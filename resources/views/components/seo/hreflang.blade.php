@php
    $currentPath = request()->path();
    $baseUrl = config('app.url', 'https://tantricluxemallorca.com');
    
    // Mapeo de rutas entre idiomas
    $routeMap = [
        '' => ['es' => '', 'en' => '', 'de' => '', 'it' => '', 'fr' => ''],
        'acerca' => ['es' => 'acerca', 'en' => 'about', 'de' => 'uber-uns', 'it' => 'chi-siamo', 'fr' => 'a-propos'],
        'servicios' => ['es' => 'servicios', 'en' => 'services', 'de' => 'leistungen', 'it' => 'servizi', 'fr' => 'services'],
        'masajistas' => ['es' => 'masajistas', 'en' => 'masseuses', 'de' => 'masseurinnen', 'it' => 'massaggiatrici', 'fr' => 'masseuses'],
        'contacto' => ['es' => 'contacto', 'en' => 'contact', 'de' => 'kontakt', 'it' => 'contatti', 'fr' => 'contact'],
        'reserva' => ['es' => 'reserva', 'en' => 'book', 'de' => 'buchen', 'it' => 'prenota', 'fr' => 'reserver'],
    ];
    
    // Extraer el idioma y la ruta actual
    $currentLocale = $locale ?? 'es';
    $currentRoute = '';
    
    if (preg_match('/^(es|en|de|it|fr)(?:\/(.+))?$/', $currentPath, $matches)) {
        $detectedLocale = $matches[1];
        $currentRoute = isset($matches[2]) ? $matches[2] : '';
    } else {
        $currentRoute = $currentPath;
    }
    
    // Convertir la ruta actual a la ruta canónica (español)
    $canonicalRoute = $currentRoute;
    foreach ($routeMap as $esRoute => $translations) {
        if ($currentRoute === $translations['en'] || $currentRoute === $translations['de'] || $currentRoute === $translations['it'] || $currentRoute === $translations['fr'] || $currentRoute === $esRoute) {
            $canonicalRoute = $esRoute;
            break;
        }
    }
    
    // Manejar rutas dinámicas (servicios con slug)
    $isDynamicRoute = false;
    $slug = '';
    if (preg_match('/^(servicios|services|leistungen|servizi)\/(.+)$/', $currentRoute, $slugMatches)) {
        $isDynamicRoute = true;
        $slug = $slugMatches[2];
    }
    
    // Generar URLs para cada idioma
    if ($isDynamicRoute) {
        $esUrl = $baseUrl . '/es/servicios/' . $slug;
        $enUrl = $baseUrl . '/en/services/' . $slug;
        $deUrl = $baseUrl . '/de/leistungen/' . $slug;
        $itUrl = $baseUrl . '/it/servizi/' . $slug;
        $frUrl = $baseUrl . '/fr/services/' . $slug;
    } else {
        // Si no encontramos la ruta en el mapa, usar la ruta actual
        if (!isset($routeMap[$canonicalRoute])) {
            $canonicalRoute = $currentRoute;
        }
        
        $esUrl = $baseUrl . '/es' . ($canonicalRoute ? '/' . $canonicalRoute : '');
        $enUrl = $baseUrl . '/en' . (isset($routeMap[$canonicalRoute]['en']) && $routeMap[$canonicalRoute]['en'] ? '/' . $routeMap[$canonicalRoute]['en'] : ($canonicalRoute && !isset($routeMap[$canonicalRoute]) ? '/' . $canonicalRoute : ''));
        $deUrl = $baseUrl . '/de' . (isset($routeMap[$canonicalRoute]['de']) && $routeMap[$canonicalRoute]['de'] ? '/' . $routeMap[$canonicalRoute]['de'] : ($canonicalRoute && !isset($routeMap[$canonicalRoute]) ? '/' . $canonicalRoute : ''));
        $itUrl = $baseUrl . '/it' . (isset($routeMap[$canonicalRoute]['it']) && $routeMap[$canonicalRoute]['it'] ? '/' . $routeMap[$canonicalRoute]['it'] : ($canonicalRoute && !isset($routeMap[$canonicalRoute]) ? '/' . $canonicalRoute : ''));
        $frUrl = $baseUrl . '/fr' . (isset($routeMap[$canonicalRoute]['fr']) && $routeMap[$canonicalRoute]['fr'] ? '/' . $routeMap[$canonicalRoute]['fr'] : ($canonicalRoute && !isset($routeMap[$canonicalRoute]) ? '/' . $canonicalRoute : ''));
    }
@endphp

<link rel="alternate" hreflang="es" href="{{ $esUrl }}">
<link rel="alternate" hreflang="en" href="{{ $enUrl }}">
<link rel="alternate" hreflang="de" href="{{ $deUrl }}">
<link rel="alternate" hreflang="it" href="{{ $itUrl }}">
<link rel="alternate" hreflang="fr" href="{{ $frUrl }}">
<link rel="alternate" hreflang="x-default" href="{{ $esUrl }}">
