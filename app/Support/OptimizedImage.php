<?php

namespace App\Support;

/**
 * URL del optimizador /_img siempre respecto a la raíz de la aplicación.
 * Usamos /_img para evitar conflictos con directorios físicos llamados /img.
 */
class OptimizedImage
{
    public static function url(string $src, int $w = 0, int $q = 78): string
    {
        $q = max(10, min(100, $q));
        $w = max(0, min(2000, $w));
        $params = ['src' => $src, 'q' => $q];
        if ($w > 0) {
            $params['w'] = $w;
        }
        $query = http_build_query($params, '', '&', PHP_QUERY_RFC3986);

        return url('/_img?'.$query);
    }

    /**
     * Genera un atributo srcset (p. ej. "url 400w, url 680w").
     *
     * @param  list<int>  $widths
     */
    public static function srcset(string $src, array $widths, int $q = 78): string
    {
        $parts = [];
        foreach ($widths as $width) {
            $parts[] = self::url($src, $width, $q).' '.$width.'w';
        }

        return implode(', ', $parts);
    }

    /** URL del ancho máximo del conjunto (fallback para src). */
    public static function largest(string $src, array $widths, int $q = 78): string
    {
        return self::url($src, max($widths), $q);
    }
}
