<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Response;

class SitemapController extends Controller
{
    public function index()
    {
        $baseUrl = config('app.url', 'https://tantricluxemallorca.com');
        $locales = ['es', 'en', 'de'];
        
        // Mapeo de rutas
        $routes = [
            '' => [
                'es' => '',
                'en' => '',
                'de' => '',
                'changefreq' => 'daily',
                'priority' => '1.0'
            ],
            'acerca' => [
                'es' => 'acerca',
                'en' => 'about',
                'de' => 'uber-uns',
                'changefreq' => 'monthly',
                'priority' => '0.8'
            ],
            'servicios' => [
                'es' => 'servicios',
                'en' => 'services',
                'de' => 'leistungen',
                'changefreq' => 'weekly',
                'priority' => '0.9'
            ],
            'masajistas' => [
                'es' => 'masajistas',
                'en' => 'masseuses',
                'de' => 'masseurinnen',
                'changefreq' => 'weekly',
                'priority' => '0.8'
            ],
            'contacto' => [
                'es' => 'contacto',
                'en' => 'contact',
                'de' => 'kontakt',
                'changefreq' => 'monthly',
                'priority' => '0.7'
            ],
        ];
        
        // Obtener servicios dinámicos
        $services = [];
        try {
            App::setLocale('es');
            $servicesPage = trans('servicesPage', [], 'es');
            $services = $servicesPage['services'] ?? [];
        } catch (\Exception $e) {
            // Si falla, continuar sin servicios
        }
        
        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' . "\n";
        
        // Agregar rutas estáticas
        foreach ($routes as $canonicalRoute => $routeData) {
            foreach ($locales as $locale) {
                $path = $routeData[$locale] ? '/' . $routeData[$locale] : '';
                $url = $baseUrl . '/' . $locale . $path;
                
                $xml .= '  <url>' . "\n";
                $xml .= '    <loc>' . htmlspecialchars($url) . '</loc>' . "\n";
                $xml .= '    <changefreq>' . $routeData['changefreq'] . '</changefreq>' . "\n";
                $xml .= '    <priority>' . $routeData['priority'] . '</priority>' . "\n";
                $xml .= '    <lastmod>' . date('Y-m-d') . '</lastmod>' . "\n";
                
                // Agregar alternativas hreflang
                foreach ($locales as $altLocale) {
                    $altPath = $routeData[$altLocale] ? '/' . $routeData[$altLocale] : '';
                    $altUrl = $baseUrl . '/' . $altLocale . $altPath;
                    $xml .= '    <xhtml:link rel="alternate" hreflang="' . $altLocale . '" href="' . htmlspecialchars($altUrl) . '" />' . "\n";
                }
                $xml .= '    <xhtml:link rel="alternate" hreflang="x-default" href="' . htmlspecialchars($baseUrl . '/es' . ($routeData['es'] ? '/' . $routeData['es'] : '')) . '" />' . "\n";
                
                $xml .= '  </url>' . "\n";
            }
        }
        
        // Agregar servicios dinámicos
        foreach ($services as $service) {
            $slug = $service['slug'] ?? '';
            if (!$slug) continue;
            
            $serviceRoutes = [
                'es' => 'servicios',
                'en' => 'services',
                'de' => 'leistungen',
            ];
            
            foreach ($locales as $locale) {
                $url = $baseUrl . '/' . $locale . '/' . $serviceRoutes[$locale] . '/' . $slug;
                
                $xml .= '  <url>' . "\n";
                $xml .= '    <loc>' . htmlspecialchars($url) . '</loc>' . "\n";
                $xml .= '    <changefreq>weekly</changefreq>' . "\n";
                $xml .= '    <priority>0.8</priority>' . "\n";
                $xml .= '    <lastmod>' . date('Y-m-d') . '</lastmod>' . "\n";
                
                // Agregar alternativas hreflang
                foreach ($locales as $altLocale) {
                    $altUrl = $baseUrl . '/' . $altLocale . '/' . $serviceRoutes[$altLocale] . '/' . $slug;
                    $xml .= '    <xhtml:link rel="alternate" hreflang="' . $altLocale . '" href="' . htmlspecialchars($altUrl) . '" />' . "\n";
                }
                $xml .= '    <xhtml:link rel="alternate" hreflang="x-default" href="' . htmlspecialchars($baseUrl . '/es/servicios/' . $slug) . '" />' . "\n";
                
                $xml .= '  </url>' . "\n";
            }
        }
        
        $xml .= '</urlset>';
        
        return Response::make($xml, 200, [
            'Content-Type' => 'application/xml; charset=utf-8',
        ]);
    }
}
