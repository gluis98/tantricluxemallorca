<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * ImageController
 *
 * Sirve imágenes redimensionadas y convertidas a WebP, con caché en disco.
 * Uso: /img?src=images/masseurs/Leila/1.jpg&w=650&q=82
 * También: /img?src=Img/Rooms/foto.jpg&w=750&q=82
 *
 * Parámetros:
 *   src  — ruta relativa dentro de public_html/  (obligatorio)
 *   w    — ancho máximo en píxeles (0 = no redimensionar, solo comprimir)
 *   q    — calidad WebP 10-100 (defecto: 82)
 */
class ImageController extends Controller
{
    /** Extensiones permitidas */
    private const ALLOWED = ['jpg', 'jpeg', 'png', 'webp', 'gif'];

    /** Ancho máximo que se puede pedir (evita abuso) */
    private const MAX_WIDTH = 2000;

    public function serve(Request $request)
    {
        // ── 1. Parámetros y validación básica ──────────────────────────────
        $src     = $request->get('src', '');
        $width   = max(0, min(self::MAX_WIDTH, (int) $request->get('w', 0)));
        $quality = max(10, min(100, (int) $request->get('q', 78)));

        // Prevenir path traversal: eliminar ".." y separadores no deseados
        $src = ltrim(preg_replace('/\.{2,}/', '', str_replace(['\\', "\0"], '/', $src)), '/');

        $ext = strtolower(pathinfo($src, PATHINFO_EXTENSION));
        if (!in_array($ext, self::ALLOWED, true)) {
            abort(400, 'Tipo de imagen no permitido.');
        }

        // Solo rutas bajo public_html/images/ o public_html/Img/ (habitaciones, etc.)
        $allowedPrefix = str_starts_with($src, 'images/') || str_starts_with($src, 'Img/');
        if (! $allowedPrefix) {
            abort(403, 'Ruta no permitida.');
        }

        $sourcePath = $this->resolveSourcePath($src);
        if ($sourcePath === null) {
            $fallbackUrl = $this->fallbackRemoteUrl($src);
            if ($fallbackUrl !== null) {
                return redirect()->away($fallbackUrl, 302);
            }
            abort(404, 'Imagen no encontrada.');
        }

        // ── 2. Caché en disco ──────────────────────────────────────────────
        $sourceFingerprint = @filemtime($sourcePath) . '|' . @filesize($sourcePath);
        $cacheKey  = md5($src . '|' . $width . '|' . $quality . '|' . $sourceFingerprint);
        $cacheDir  = storage_path('app/imgcache');
        $cachePath = $cacheDir . DIRECTORY_SEPARATOR . $cacheKey . '.webp';

        if (!is_dir($cacheDir)) {
            mkdir($cacheDir, 0755, true);
        }

        // Si ya existe la variante exacta para este archivo/tamaño/calidad, servirla.
        if (file_exists($cachePath)) {
            return $this->fileResponse($cachePath);
        }

        // ── 3. Verificar extensión GD ──────────────────────────────────────
        if (!extension_loaded('gd') || !function_exists('imagewebp')) {
            // Sin GD: servir el original sin transformar
            return response()->file($sourcePath, [
                'Cache-Control' => 'public, max-age=2592000',
            ]);
        }

        // ── 4. Procesar y guardar ──────────────────────────────────────────
        $webpData = $this->process($sourcePath, $ext, $width, $quality);
        file_put_contents($cachePath, $webpData);

        return $this->fileResponse($cachePath);
    }

    /**
     * Busca el archivo en public_html (producción/hosting) o en public/ (Laragon estándar).
     */
    private function resolveSourcePath(string $src): ?string
    {
        $projectRoot = dirname(__DIR__, 3);
        $documentRoot = $_SERVER['DOCUMENT_ROOT'] ?? null;

        $candidates = [
            base_path('public_html/' . $src),
            public_path($src),
            $projectRoot . DIRECTORY_SEPARATOR . 'public_html' . DIRECTORY_SEPARATOR . $src,
            $projectRoot . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . $src,
            $documentRoot ? rtrim($documentRoot, '\\/') . DIRECTORY_SEPARATOR . $src : null,
        ];

        foreach ($candidates as $path) {
            if (!is_string($path) || $path === '') {
                continue;
            }
            $normalized = str_replace(['/', '\\'], DIRECTORY_SEPARATOR, $path);
            if (is_file($normalized)) {
                return $normalized;
            }
        }

        return null;
    }

    /**
     * Fallback opcional cuando no existe imagen local.
     * Por defecto usa el dominio productivo; se puede desactivar con IMAGE_REMOTE_FALLBACK=0.
     */
    private function fallbackRemoteUrl(string $src): ?string
    {
        $enabled = filter_var(env('IMAGE_REMOTE_FALLBACK', true), FILTER_VALIDATE_BOOL, FILTER_NULL_ON_FAILURE);
        if ($enabled === false) {
            return null;
        }

        $base = rtrim((string) env('IMAGE_REMOTE_BASE_URL', 'https://tantricluxemallorca.com'), '/');
        if ($base === '') {
            return null;
        }

        return $base . '/' . ltrim($src, '/');
    }

    // ── Respuesta con caché 1 año ──────────────────────────────────────────
    private function fileResponse(string $path)
    {
        return response()->file($path, [
            'Content-Type'  => 'image/webp',
            'Cache-Control' => 'public, max-age=31536000, immutable',
            'Vary'          => 'Accept',
        ]);
    }

    // ── Redimensionar + convertir a WebP ──────────────────────────────────
    private function process(string $path, string $ext, int $targetW, int $quality): string
    {
        // Cargar imagen según formato
        $img = match ($ext) {
            'jpg', 'jpeg' => @imagecreatefromjpeg($path),
            'png'         => @imagecreatefrompng($path),
            'webp'        => @imagecreatefromwebp($path),
            'gif'         => @imagecreatefromgif($path),
            default       => @imagecreatefromjpeg($path),
        };

        if ($img === false) {
            abort(422, 'No se pudo procesar la imagen.');
        }

        $origW = imagesx($img);
        $origH = imagesy($img);

        // Si no hay redimensión o la imagen ya es más pequeña → solo comprimir
        if ($targetW === 0 || $origW <= $targetW) {
            ob_start();
            imagewebp($img, null, $quality);
            $data = ob_get_clean();
            imagedestroy($img);
            return $data;
        }

        // Calcular alto proporcional
        $targetH = (int) round($origH * ($targetW / $origW));

        $dst = imagecreatetruecolor($targetW, $targetH);

        // Preservar transparencia (PNG / WebP con alpha)
        imagealphablending($dst, false);
        imagesavealpha($dst, true);
        $transparent = imagecolorallocatealpha($dst, 0, 0, 0, 127);
        imagefilledrectangle($dst, 0, 0, $targetW, $targetH, $transparent);

        imagecopyresampled($dst, $img, 0, 0, 0, 0, $targetW, $targetH, $origW, $origH);

        ob_start();
        imagewebp($dst, null, $quality);
        $data = ob_get_clean();

        imagedestroy($img);
        imagedestroy($dst);

        return $data;
    }
}
