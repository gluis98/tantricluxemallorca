@php
    $currentPath = request()->path();
    $baseUrl = rtrim(config('app.url', 'https://tantricluxemallorca.com'), '/');

    $locales = ['es', 'en', 'de', 'it', 'fr'];

    // Ruta del segmento de servicios / masajistas por idioma
    $servicePaths = ['es' => 'servicios', 'en' => 'services', 'de' => 'leistungen', 'it' => 'servizi', 'fr' => 'services'];
    $masseusePaths = ['es' => 'masajistas', 'en' => 'masseuses', 'de' => 'masseurinnen', 'it' => 'massaggiatrici', 'fr' => 'masseuses'];

    // Mapeo de rutas estáticas
    $routeMap = [
        ''          => ['es' => '',           'en' => '',          'de' => '',             'it' => '',              'fr' => ''],
        'acerca'    => ['es' => 'acerca',     'en' => 'about',     'de' => 'uber-uns',     'it' => 'chi-siamo',     'fr' => 'a-propos'],
        'servicios' => ['es' => 'servicios',  'en' => 'services',  'de' => 'leistungen',   'it' => 'servizi',       'fr' => 'services'],
        'masajistas'=> ['es' => 'masajistas', 'en' => 'masseuses', 'de' => 'masseurinnen', 'it' => 'massaggiatrici','fr' => 'masseuses'],
        'contacto'  => ['es' => 'contacto',   'en' => 'contact',   'de' => 'kontakt',      'it' => 'contatti',      'fr' => 'contact'],
        'reserva'   => ['es' => 'reserva',    'en' => 'book',      'de' => 'buchen',       'it' => 'prenota',       'fr' => 'reserver'],
    ];

    $currentLocale = $locale ?? 'es';
    $currentRoute  = '';

    if (preg_match('/^(es|en|de|it|fr)(?:\/(.+))?$/', $currentPath, $m)) {
        $currentRoute = $m[2] ?? '';
    } else {
        $currentRoute = $currentPath;
    }

    // ── Rutas dinámicas de servicio ──────────────────────────────────────────
    $isDynamicRoute    = false;
    $hreflangUrls      = [];

    if (preg_match('/^(?:servicios|services|leistungen|servizi)\/(.+)$/', $currentRoute, $slugMatches)) {
        $isDynamicRoute = true;
        $currentSlug    = $slugMatches[1];

        $servicesByLocale = [];
        foreach ($locales as $loc) {
            $servicesByLocale[$loc] = array_values(trans('servicesPage.services', [], $loc) ?? []);
        }

        $serviceIndex = null;
        foreach ($servicesByLocale as $services) {
            foreach ($services as $idx => $svc) {
                if (($svc['slug'] ?? null) === $currentSlug) {
                    $serviceIndex = $idx;
                    break 2;
                }
            }
        }

        if ($serviceIndex !== null) {
            foreach ($locales as $loc) {
                $svc = $servicesByLocale[$loc][$serviceIndex] ?? null;
                $slugForLocale = $svc['slug'] ?? null;
                if ($slugForLocale) {
                    $hreflangUrls[$loc] = $baseUrl . '/' . $loc . '/' . $servicePaths[$loc] . '/' . $slugForLocale;
                }
            }
        }
    }

    // ── Rutas dinámicas de masajista (slug estable entre idiomas) ────────────
    if (! $isDynamicRoute && preg_match('/^(?:masajistas|masseuses|masseurinnen|massaggiatrici)\/(.+)$/', $currentRoute, $masseuseMatches)) {
        $isDynamicRoute = true;
        $masseuseSlug = strtolower($masseuseMatches[1]);
        foreach ($locales as $loc) {
            $hreflangUrls[$loc] = $baseUrl . '/' . $loc . '/' . $masseusePaths[$loc] . '/' . $masseuseSlug;
        }
    }

    // ── Rutas estáticas ──────────────────────────────────────────────────────
    if (!$isDynamicRoute) {
        $canonicalKey = $currentRoute;
        foreach ($routeMap as $key => $translations) {
            if (in_array($currentRoute, $translations, true) || $currentRoute === $key) {
                $canonicalKey = $key;
                break;
            }
        }

        if (isset($routeMap[$canonicalKey])) {
            foreach ($locales as $loc) {
                $path = $routeMap[$canonicalKey][$loc];
                $hreflangUrls[$loc] = $baseUrl . '/' . $loc . ($path ? '/' . $path : '');
            }
        } else {
            foreach ($locales as $loc) {
                $hreflangUrls[$loc] = $baseUrl . '/' . $loc . ($currentRoute ? '/' . $currentRoute : '');
            }
        }
    }
@endphp

@foreach($locales as $loc)
    @if(isset($hreflangUrls[$loc]))
<link rel="alternate" hreflang="{{ $loc }}" href="{{ $hreflangUrls[$loc] }}">
    @endif
@endforeach
@if(isset($hreflangUrls['es']))
<link rel="alternate" hreflang="x-default" href="{{ $hreflangUrls['es'] }}">
@endif
