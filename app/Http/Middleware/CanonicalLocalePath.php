<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class CanonicalLocalePath
{
    /**
     * Slugs retirados: redirigen al listado de servicios.
     *
     * @var list<string>
     */
    private const LEGACY_SERVICE_SLUGS = [
        'golden-relax',
        'golden-sensitivo',
        'experiencia-golden',
        'golden-suite-experiencia',
        'velvet-duet-pareja',
        'golden-sensitive',
        'golden-experience',
        'golden-suite-experience',
        'velvet-duet-couple',
        'golden-sensitiv',
        'golden-erlebnis',
        'golden-suite-erlebnis',
        'velvet-duet-paar',
    ];

    private const LOCALES = ['es', 'en', 'de', 'it', 'fr'];

    private function servicesPathByLocale(string $locale): string
    {
        return match ($locale) {
            'es' => 'servicios',
            'en', 'fr' => 'services',
            'de' => 'leistungen',
            'it' => 'servizi',
            default => 'servicios',
        };
    }

    private function staticRouteMap(): array
    {
        return [
            'acerca' => ['es' => 'acerca', 'en' => 'about', 'de' => 'uber-uns', 'it' => 'chi-siamo', 'fr' => 'a-propos'],
            'servicios' => ['es' => 'servicios', 'en' => 'services', 'de' => 'leistungen', 'it' => 'servizi', 'fr' => 'services'],
            'masajistas' => ['es' => 'masajistas', 'en' => 'masseuses', 'de' => 'masseurinnen', 'it' => 'massaggiatrici', 'fr' => 'masseuses'],
            'contacto' => ['es' => 'contacto', 'en' => 'contact', 'de' => 'kontakt', 'it' => 'contatti', 'fr' => 'contact'],
            'reserva' => ['es' => 'reserva', 'en' => 'book', 'de' => 'buchen', 'it' => 'prenota', 'fr' => 'reserver'],
            'whatsapp' => ['es' => 'whatsapp', 'en' => 'whatsapp', 'de' => 'whatsapp', 'it' => 'whatsapp', 'fr' => 'whatsapp'],
        ];
    }

    private function servicesByLocale(): array
    {
        $servicesByLocale = [];
        foreach (self::LOCALES as $locale) {
            App::setLocale($locale);
            $servicesByLocale[$locale] = array_values(trans('servicesPage.services', [], $locale) ?? []);
        }

        return $servicesByLocale;
    }

    private function serviceIndexBySlug(string $slug, array $servicesByLocale): ?int
    {
        foreach ($servicesByLocale as $services) {
            foreach ($services as $index => $service) {
                if (($service['slug'] ?? null) === $slug) {
                    return $index;
                }
            }
        }

        return null;
    }

    public function handle(Request $request, Closure $next)
    {
        $locale = $request->route('locale');
        if (!is_string($locale) || !in_array($locale, self::LOCALES, true)) {
            return $next($request);
        }

        $segments = $request->segments();
        $tail = array_slice($segments, 1);
        $firstTail = $tail[0] ?? '';

        // Caso /de/es/servicios -> /es/servicios
        if (in_array($firstTail, self::LOCALES, true)) {
            $target = '/' . implode('/', $tail);
            return redirect($target, 301);
        }

        if (count($tail) === 1) {
            $routeMap = $this->staticRouteMap();
            foreach ($routeMap as $canonical => $translations) {
                if ($firstTail === $canonical || in_array($firstTail, $translations, true)) {
                    $expected = $translations[$locale] ?? $canonical;
                    if ($firstTail !== $expected) {
                        return redirect('/' . $locale . '/' . $expected, 301);
                    }
                    break;
                }
            }
        }

        if (count($tail) >= 2) {
            $serviceSegment = $tail[0];
            $slug = $tail[1];
            $serviceSegments = ['servicios', 'services', 'leistungen', 'servizi'];
            if (in_array($serviceSegment, $serviceSegments, true)) {
                $expectedSegment = $this->servicesPathByLocale($locale);
                $targetBase = '/' . $locale . '/' . $expectedSegment;

                if (in_array($slug, self::LEGACY_SERVICE_SLUGS, true)) {
                    return redirect($targetBase, 301);
                }

                $servicesByLocale = $this->servicesByLocale();
                $index = $this->serviceIndexBySlug($slug, $servicesByLocale);
                if ($index === null) {
                    return redirect($targetBase, 301);
                }

                $targetSlug = $servicesByLocale[$locale][$index]['slug'] ?? null;
                if (!$targetSlug) {
                    return redirect($targetBase, 301);
                }

                $canonical = $targetBase . '/' . $targetSlug;
                if ('/' . implode('/', $segments) !== $canonical) {
                    return redirect($canonical, 301);
                }
            }
        }

        return $next($request);
    }
}

