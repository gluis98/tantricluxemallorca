<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Response;

class SitemapController extends Controller
{
    public function index()
    {
        $baseUrl = rtrim(config('app.url', 'https://tantricluxemallorca.com'), '/');
        $locales  = ['es', 'en', 'de'];
        $today    = date('Y-m-d');

        // Rutas estáticas con sus slugs por idioma
        $routes = [
            // Inicio (cada idioma tiene su propia URL canónica)
            [
                'slugs'       => ['es' => '', 'en' => '', 'de' => ''],
                'changefreq'  => 'daily',
                'priority'    => '1.0',
            ],
            // Servicios
            [
                'slugs'       => ['es' => 'servicios', 'en' => 'services', 'de' => 'leistungen'],
                'changefreq'  => 'weekly',
                'priority'    => '0.9',
            ],
            // Masajistas
            [
                'slugs'       => ['es' => 'masajistas', 'en' => 'masseuses', 'de' => 'masseurinnen'],
                'changefreq'  => 'weekly',
                'priority'    => '0.9',
            ],
            // Acerca
            [
                'slugs'       => ['es' => 'acerca', 'en' => 'about', 'de' => 'uber-uns'],
                'changefreq'  => 'monthly',
                'priority'    => '0.7',
            ],
            // Contacto
            [
                'slugs'       => ['es' => 'contacto', 'en' => 'contact', 'de' => 'kontakt'],
                'changefreq'  => 'monthly',
                'priority'    => '0.8',
            ],
        ];

        // Servicios dinámicos (slugs desde los archivos de traducción)
        $serviceSlugsByLocale = [];
        foreach ($locales as $locale) {
            try {
                App::setLocale($locale);
                $servicesData = trans('servicesPage', [], $locale);
                $slugKey = ['es' => 'servicios', 'en' => 'services', 'de' => 'leistungen'][$locale];
                foreach ($servicesData['services'] ?? [] as $service) {
                    $slug = $service['slug'] ?? null;
                    if ($slug) {
                        $serviceSlugsByLocale[$slug][$locale] = $slugKey . '/' . $slug;
                    }
                }
            } catch (\Exception $e) {
                // continuar sin servicios si falla
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
        $servicePathByLocale = ['es' => 'servicios', 'en' => 'services', 'de' => 'leistungen'];

        foreach ($serviceSlugsByLocale as $slug => $paths) {
            foreach ($locales as $locale) {
                $url = $baseUrl . '/' . $locale . '/' . $servicePathByLocale[$locale] . '/' . $slug;

                $xml .= '  <url>' . "\n";
                $xml .= '    <loc>' . htmlspecialchars($url) . '</loc>' . "\n";
                $xml .= '    <lastmod>' . $today . '</lastmod>' . "\n";
                $xml .= '    <changefreq>weekly</changefreq>' . "\n";
                $xml .= '    <priority>0.8</priority>' . "\n";

                foreach ($locales as $altLocale) {
                    $altUrl = $baseUrl . '/' . $altLocale . '/' . $servicePathByLocale[$altLocale] . '/' . $slug;
                    $xml .= '    <xhtml:link rel="alternate" hreflang="' . $altLocale . '" href="' . htmlspecialchars($altUrl) . '" />' . "\n";
                }
                $xml .= '    <xhtml:link rel="alternate" hreflang="x-default" href="' . htmlspecialchars($baseUrl . '/es/servicios/' . $slug) . '" />' . "\n";

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
