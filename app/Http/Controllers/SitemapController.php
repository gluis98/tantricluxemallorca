<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Response;

class SitemapController extends Controller
{
    public function index()
    {
        $baseUrl = rtrim(config('app.url', 'https://tantricluxemallorca.com'), '/');
        $locales  = ['es', 'en', 'de', 'it', 'fr'];
        $today    = date('Y-m-d');

        // Rutas estáticas con sus slugs por idioma
        $routes = [
            // Inicio (cada idioma tiene su propia URL canónica)
            [
                'slugs'       => ['es' => '', 'en' => '', 'de' => '', 'it' => '', 'fr' => ''],
                'changefreq'  => 'daily',
                'priority'    => '1.0',
            ],
            // Servicios
            [
                'slugs'       => ['es' => 'servicios', 'en' => 'services', 'de' => 'leistungen', 'it' => 'servizi', 'fr' => 'services'],
                'changefreq'  => 'weekly',
                'priority'    => '0.9',
            ],
            // Masajistas
            [
                'slugs'       => ['es' => 'masajistas', 'en' => 'masseuses', 'de' => 'masseurinnen', 'it' => 'massaggiatrici', 'fr' => 'masseuses'],
                'changefreq'  => 'weekly',
                'priority'    => '0.9',
            ],
            // Acerca
            [
                'slugs'       => ['es' => 'acerca', 'en' => 'about', 'de' => 'uber-uns', 'it' => 'chi-siamo', 'fr' => 'a-propos'],
                'changefreq'  => 'monthly',
                'priority'    => '0.7',
            ],
            // Contacto
            [
                'slugs'       => ['es' => 'contacto', 'en' => 'contact', 'de' => 'kontakt', 'it' => 'contatti', 'fr' => 'contact'],
                'changefreq'  => 'monthly',
                'priority'    => '0.8',
            ],
            // Reserva online
            [
                'slugs'       => ['es' => 'reserva', 'en' => 'book', 'de' => 'buchen', 'it' => 'prenota', 'fr' => 'reserver'],
                'changefreq'  => 'weekly',
                'priority'    => '0.95',
            ],
        ];

        // Servicios dinámicos por idioma (manteniendo correspondencia por índice)
        $servicesByLocale = [];
        foreach ($locales as $locale) {
            try {
                App::setLocale($locale);
                $servicesData = trans('servicesPage', [], $locale);
                $servicesByLocale[$locale] = array_values($servicesData['services'] ?? []);
            } catch (\Exception $e) {
                // continuar sin servicios si falla
                $servicesByLocale[$locale] = [];
            }
        }

        $xml  = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"' . "\n";
        $xml .= '        xmlns:xhtml="http://www.w3.org/1999/xhtml">' . "\n\n";

        // --- Rutas estáticas ---
        foreach ($routes as $route) {
            foreach ($locales as $locale) {
                $slug = $route['slugs'][$locale];
                $url  = $baseUrl . '/' . $locale . ($slug ? '/' . $slug : '');

                $xml .= '  <url>' . "\n";
                $xml .= '    <loc>' . htmlspecialchars($url) . '</loc>' . "\n";
                $xml .= '    <lastmod>' . $today . '</lastmod>' . "\n";
                $xml .= '    <changefreq>' . $route['changefreq'] . '</changefreq>' . "\n";
                $xml .= '    <priority>' . $route['priority'] . '</priority>' . "\n";

                // hreflang alternates
                foreach ($locales as $altLocale) {
                    $altSlug = $route['slugs'][$altLocale];
                    $altUrl  = $baseUrl . '/' . $altLocale . ($altSlug ? '/' . $altSlug : '');
                    $xml .= '    <xhtml:link rel="alternate" hreflang="' . $altLocale . '" href="' . htmlspecialchars($altUrl) . '" />' . "\n";
                }
                // x-default apunta siempre a la versión española
                $esSlug  = $route['slugs']['es'];
                $esUrl   = $baseUrl . '/es' . ($esSlug ? '/' . $esSlug : '');
                $xml .= '    <xhtml:link rel="alternate" hreflang="x-default" href="' . htmlspecialchars($esUrl) . '" />' . "\n";

                $xml .= '  </url>' . "\n";
            }
        }

        // --- Rutas dinámicas de servicios ---
        $servicePathByLocale = ['es' => 'servicios', 'en' => 'services', 'de' => 'leistungen', 'it' => 'servizi', 'fr' => 'services'];

        $maxServices = 0;
        foreach ($locales as $locale) {
            $maxServices = max($maxServices, count($servicesByLocale[$locale] ?? []));
        }

        for ($i = 0; $i < $maxServices; $i++) {
            foreach ($locales as $locale) {
                $service = $servicesByLocale[$locale][$i] ?? null;
                $slug = $service['slug'] ?? null;
                if (!$slug) {
                    continue;
                }

                $url = $baseUrl . '/' . $locale . '/' . $servicePathByLocale[$locale] . '/' . $slug;

                $xml .= '  <url>' . "\n";
                $xml .= '    <loc>' . htmlspecialchars($url) . '</loc>' . "\n";
                $xml .= '    <lastmod>' . $today . '</lastmod>' . "\n";
                $xml .= '    <changefreq>weekly</changefreq>' . "\n";
                $xml .= '    <priority>0.8</priority>' . "\n";

                foreach ($locales as $altLocale) {
                    $altService = $servicesByLocale[$altLocale][$i] ?? null;
                    $altSlug = $altService['slug'] ?? null;
                    if (!$altSlug) {
                        continue;
                    }

                    $altUrl = $baseUrl . '/' . $altLocale . '/' . $servicePathByLocale[$altLocale] . '/' . $altSlug;
                    $xml .= '    <xhtml:link rel="alternate" hreflang="' . $altLocale . '" href="' . htmlspecialchars($altUrl) . '" />' . "\n";
                }

                $esService = $servicesByLocale['es'][$i] ?? null;
                $esSlug = $esService['slug'] ?? null;
                if ($esSlug) {
                    $xml .= '    <xhtml:link rel="alternate" hreflang="x-default" href="' . htmlspecialchars($baseUrl . '/es/servicios/' . $esSlug) . '" />' . "\n";
                }

                $xml .= '  </url>' . "\n";
            }
        }

        // --- Rutas dinámicas de masajistas (slug estable) ---
        $masseusePathByLocale = ['es' => 'masajistas', 'en' => 'masseuses', 'de' => 'masseurinnen', 'it' => 'massaggiatrici', 'fr' => 'masseuses'];
        $masseuseSlugs = [];
        foreach ($locales as $locale) {
            try {
                App::setLocale($locale);
                foreach (array_values(trans('masseusesPage.masseuses', [], $locale) ?? []) as $masseuse) {
                    $slug = strtolower((string) ($masseuse['slug'] ?? ''));
                    if ($slug !== '') {
                        $masseuseSlugs[$slug] = true;
                    }
                }
            } catch (\Exception $e) {
                // continuar
            }
        }

        foreach (array_keys($masseuseSlugs) as $masseuseSlug) {
            foreach ($locales as $locale) {
                $url = $baseUrl . '/' . $locale . '/' . $masseusePathByLocale[$locale] . '/' . $masseuseSlug;

                $xml .= '  <url>' . "\n";
                $xml .= '    <loc>' . htmlspecialchars($url) . '</loc>' . "\n";
                $xml .= '    <lastmod>' . $today . '</lastmod>' . "\n";
                $xml .= '    <changefreq>weekly</changefreq>' . "\n";
                $xml .= '    <priority>0.8</priority>' . "\n";

                foreach ($locales as $altLocale) {
                    $altUrl = $baseUrl . '/' . $altLocale . '/' . $masseusePathByLocale[$altLocale] . '/' . $masseuseSlug;
                    $xml .= '    <xhtml:link rel="alternate" hreflang="' . $altLocale . '" href="' . htmlspecialchars($altUrl) . '" />' . "\n";
                }
                $xml .= '    <xhtml:link rel="alternate" hreflang="x-default" href="' . htmlspecialchars($baseUrl . '/es/masajistas/' . $masseuseSlug) . '" />' . "\n";

                $xml .= '  </url>' . "\n";
            }
        }

        $xml .= '</urlset>';

        return Response::make($xml, 200, [
            'Content-Type'  => 'application/xml; charset=utf-8',
            'Cache-Control' => 'public, max-age=86400', // caché 24 h en el navegador/CDN
        ]);
    }
}
