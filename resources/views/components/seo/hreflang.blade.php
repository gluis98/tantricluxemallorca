@php
    $currentPath = request()->path();
    $baseUrl = config('app.url', 'https://tantricluxemallorca.com');
    
    // Mapeo de rutas entre idiomas
    $routeMap = [
        '' => ['es' => '', 'en' => '', 'de' => ''],
        'acerca' => ['es' => 'acerca', 'en' => 'about', 'de' => 'uber-uns'],
        'servicios' => ['es' => 'servicios', 'en' => 'services', 'de' => 'leistungen'],
        'masajistas' => ['es' => 'masajistas', 'en' => 'masseuses', 'de' => 'masseurinnen'],
        'contacto' => ['es' => 'contacto', 'en' => 'contact', 'de' => 'kontakt'],
    ];
    
    // Extraer el idioma y la ruta actual
    $currentLocale = $locale ?? 'es';
    $currentRoute = '';
    
    if (preg_match('/^(es|en|de)(?:\/(.+))?$/', $currentPath, $matches)) {
        $detectedLocale = $matches[1];
        $currentRoute = isset($matches[2]) ? $matches[2] : '';
    } else {
        $currentRoute = $currentPath;
    }
    
    // Convertir la ruta actual a la ruta canónica (español)
    $canonicalRoute = $currentRoute;
    foreach ($routeMap as $esRoute => $translations) {
        if ($currentRoute === $translations['en'] || $currentRoute === $translations['de'] || $currentRoute === $esRoute) {
            $canonicalRoute = $esRoute;
            break;
        }
    }
    
    // Manejar rutas dinámicas (servicios con slug)
    $isDynamicRoute = false;
    $slug = '';
    if (preg_match('/^(servicios|services|leistungen)\/(.+)$/', $currentRoute, $slugMatches)) {
        $isDynamicRoute = true;
        $slug = $slugMatches[2];
    }
    
    // Generar URLs para cada idioma
    if ($isDynamicRoute) {
        $esUrl = $baseUrl . '/es/servicios/' . $slug;
        $enUrl = $baseUrl . '/en/services/' . $slug;
        $deUrl = $baseUrl . '/de/leistungen/' . $slug;
    } else {
        // Si no encontramos la ruta en el mapa, usar la ruta actual
        if (!isset($routeMap[$canonicalRoute])) {
            $canonicalRoute = $currentRoute;
        }
        
        $esUrl = $baseUrl . '/es' . ($canonicalRoute ? '/' . $canonicalRoute : '');
        $enUrl = $baseUrl . '/en' . (isset($routeMap[$canonicalRoute]['en']) && $routeMap[$canonicalRoute]['en'] ? '/' . $routeMap[$canonicalRoute]['en'] : ($canonicalRoute && !isset($routeMap[$canonicalRoute]) ? '/' . $canonicalRoute : ''));
        $deUrl = $baseUrl . '/de' . (isset($routeMap[$canonicalRoute]['de']) && $routeMap[$canonicalRoute]['de'] ? '/' . $routeMap[$canonicalRoute]['de'] : ($canonicalRoute && !isset($routeMap[$canonicalRoute]) ? '/' . $canonicalRoute : ''));
    }
@endphp

<link rel="alternate" hreflang="es" href="{{ $esUrl }}">
<link rel="alternate" hreflang="en" href="{{ $enUrl }}">
<link rel="alternate" hreflang="de" href="{{ $deUrl }}">
<link rel="alternate" hreflang="x-default" href="{{ $esUrl }}">
