<?php

namespace App\Support;

class MasseuseCatalog
{
    /**
     * Construye masajistas desde carpetas en images/masseurs.
     * Si hay datos semilla (traducciones), los reutiliza por coincidencia de carpeta/nombre/slug.
     */
    public static function build(array $seedItems = [], bool $singleImage = false): array
    {
        $dirs = self::directories();
        $items = [];

        foreach ($dirs as $dir) {
            $images = self::imagesFor($dir);
            if (count($images) === 0) {
                continue;
            }

            $seed = self::matchSeed($dir, $seedItems);
            $prettyName = str_replace('_', ' ', $dir);
            $slug = $seed['slug'] ?? self::slugify($seed['name'] ?? $prettyName);

            $item = [
                'id' => $seed['id'] ?? crc32($dir),
                'slug' => $slug,
                'name' => $seed['name'] ?? $prettyName,
                'age' => $seed['age'] ?? null,
                'specialty' => $seed['specialty'] ?? 'Masaje Tántrico Sensual',
                'image' => $images[0],
                'images' => $singleImage ? [$images[0]] : $images,
                'description' => $seed['description'] ?? 'Experiencia exclusiva y personalizada para despertar tus sentidos.',
                'fullDescription' => $seed['fullDescription'] ?? ($seed['description'] ?? 'Experiencia exclusiva y personalizada para despertar tus sentidos.'),
                'meta_title' => $seed['meta_title'] ?? null,
                'meta_description' => $seed['meta_description'] ?? null,
                'meta_keywords' => $seed['meta_keywords'] ?? null,
                'skills' => $seed['skills'] ?? ['Masaje Tántrico', 'Relajación Profunda', 'Conexión Sensorial'],
                'rating' => $seed['rating'] ?? 5,
                'reviews' => $seed['reviews'] ?? 50,
                'folder' => $dir,
            ];

            $items[] = $item;
        }

        return $items;
    }

    public static function findBySlug(string $slug, array $seedItems = [], bool $singleImage = false): ?array
    {
        $slug = strtolower(trim($slug));
        foreach (self::build($seedItems, $singleImage) as $item) {
            if (strtolower((string) ($item['slug'] ?? '')) === $slug) {
                return $item;
            }
        }

        return null;
    }

    public static function slugify(string $name): string
    {
        $slug = strtolower(trim($name));
        $slug = preg_replace('/[^a-z0-9]+/', '-', $slug) ?? $slug;

        return trim($slug, '-') ?: 'masseuse';
    }

    private static function directories(): array
    {
        $baseCandidates = [
            base_path('public_html/images/masseurs'),
            public_path('images/masseurs'),
        ];

        $found = [];
        foreach ($baseCandidates as $base) {
            if (! is_dir($base)) {
                continue;
            }
            foreach (scandir($base) ?: [] as $entry) {
                if ($entry === '.' || $entry === '..') {
                    continue;
                }
                $full = $base.DIRECTORY_SEPARATOR.$entry;
                if (is_dir($full)) {
                    $found[$entry] = true;
                }
            }
        }

        $dirs = array_keys($found);
        natcasesort($dirs);

        return array_values($dirs);
    }

    private static function imagesFor(string $dir): array
    {
        $baseCandidates = [
            base_path('public_html/images/masseurs/'.$dir),
            public_path('images/masseurs/'.$dir),
        ];

        $files = [];
        foreach ($baseCandidates as $base) {
            if (! is_dir($base)) {
                continue;
            }
            foreach (scandir($base) ?: [] as $entry) {
                if ($entry === '.' || $entry === '..') {
                    continue;
                }
                if (! preg_match('/\.(jpe?g|png|webp|gif|avif)$/i', $entry)) {
                    continue;
                }
                $files[$entry] = '/images/masseurs/'.$dir.'/'.$entry;
            }
        }

        $names = array_keys($files);
        natcasesort($names);
        $sorted = [];
        foreach ($names as $name) {
            $sorted[] = $files[$name];
        }

        return $sorted;
    }

    private static function matchSeed(string $dir, array $seedItems): ?array
    {
        $dirLower = strtolower($dir);

        foreach ($seedItems as $seed) {
            if (! is_array($seed)) {
                continue;
            }

            $seedName = strtolower((string) ($seed['name'] ?? ''));
            $seedSlug = strtolower((string) ($seed['slug'] ?? ''));
            if ($seedName === $dirLower || $seedSlug === $dirLower || $seedSlug === self::slugify($dir)) {
                return $seed;
            }

            $image = (string) ($seed['image'] ?? '');
            if ($image !== '' && str_contains(strtolower($image), '/masseurs/'.$dirLower.'/')) {
                return $seed;
            }
            foreach (($seed['images'] ?? []) as $img) {
                if (is_string($img) && str_contains(strtolower($img), '/masseurs/'.$dirLower.'/')) {
                    return $seed;
                }
            }
        }

        return null;
    }
}
