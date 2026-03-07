@php
    $locale = $locale ?? 'es';
    $common = trans('common', [], $locale);
    $header = $common['header'] ?? [];
    $services = trans('servicesPage.services', [], $locale) ?? [];
@endphp

<header class="z-50 px-4 py-6 lg:px-8 absolute w-full">
    <!-- Gold Line -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; padding: 1px; background: linear-gradient(90deg,rgb(255, 230, 166), #fff,rgb(224, 194, 117));"></div>

    <div class="flex justify-between items-center max-w-7xl mx-auto">
        <!-- Location -->
        <div class="flex-1 flex justify-start">
            <a href="https://www.google.com/maps/place/Plaça+de+Santa+Magdalena,+3A,+Centre,+07012+Palma,+Illes+Balears" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl tracking-wider text-gray-300 tenali-ramakrishna break-words leading-tight hover:text-amber-400 transition-colors cursor-pointer group">
                <span class="hidden sm:inline group-hover:underline">{{ $header['location'] ?? '' }}</span>
                <span class="sm:hidden group-hover:underline">Plaça de Santa Magdalena, 3A<br />Centre, 07012 Palma</span>
            </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex flex-1 justify-center items-center space-x-8 text-xl tracking-wider tenali-ramakrishna">
            <a href="/{{ $locale === 'es' ? '' : $locale }}" class="hover:text-amber-400 transition-colors uppercase">{{ $header['nav']['home'] ?? 'Inicio' }}</a>
            <a href="/{{ $locale }}{{ $header['paths']['about'] ?? '/acerca' }}" class="hover:text-amber-400 transition-colors uppercase">{{ $header['nav']['about'] ?? 'Acerca' }}</a>
            <a href="/{{ $locale }}{{ $header['paths']['services'] ?? '/servicios' }}" class="hover:text-amber-400 transition-colors uppercase">{{ $header['nav']['services'] ?? 'Servicios' }}</a>
            <a href="/{{ $locale }}{{ $header['paths']['masseuses'] ?? '/masajistas' }}" class="hover:text-amber-400 transition-colors uppercase">{{ $header['nav']['masseuses'] ?? 'Masajistas' }}</a>
            <a href="/{{ $locale }}{{ $header['paths']['contact'] ?? '/contacto' }}" class="hover:text-amber-400 transition-colors uppercase">{{ $header['nav']['contact'] ?? 'Contacto' }}</a>
        </nav>

        <!-- Language Switcher & Mobile Menu -->
        <div class="flex flex-1 justify-end items-center gap-4">
            <div class="flex gap-2">
                @php
                    $currentPath = request()->path();
                    
                    // Mapeo de rutas entre idiomas
                    $routeMap = [
                        // Ruta canónica (español) => [en => ruta_en, de => ruta_de]
                        '' => ['en' => '', 'de' => ''], // Home
                        'acerca' => ['en' => 'about', 'de' => 'uber-uns'],
                        'servicios' => ['en' => 'services', 'de' => 'leistungen'],
                        'masajistas' => ['en' => 'masseuses', 'de' => 'masseurinnen'],
                        'contacto' => ['en' => 'contact', 'de' => 'kontakt'],
                    ];
                    
                    // Mapeo inverso: desde cualquier idioma a español
                    $reverseMap = [];
                    foreach ($routeMap as $esRoute => $translations) {
                        $reverseMap[$esRoute] = $esRoute; // Español a español
                        if (isset($translations['en'])) {
                            $reverseMap[$translations['en']] = $esRoute;
                        }
                        if (isset($translations['de'])) {
                            $reverseMap[$translations['de']] = $esRoute;
                        }
                    }
                    
                    // Extraer el idioma y la ruta actual
                    $currentLocale = $locale;
                    $currentRoute = '';
                    
                    if (preg_match('/^(es|en|de)(?:\/(.+))?$/', $currentPath, $matches)) {
                        $detectedLocale = $matches[1];
                        $currentRoute = isset($matches[2]) ? $matches[2] : '';
                    } else {
                        // Si no tiene prefijo, asumir español
                        $currentRoute = $currentPath;
                    }
                    
                    // Convertir la ruta actual a la ruta canónica (español)
                    $canonicalRoute = $reverseMap[$currentRoute] ?? $currentRoute;
                    
                    // Construir las rutas para cada idioma
                    if ($canonicalRoute === '') {
                        // Home
                        $esPath = '/es';
                        $enPath = '/en';
                        $dePath = '/de';
                    } else {
                        // Rutas con path
                        $esPath = '/es/' . $canonicalRoute;
                        $enPath = '/en/' . ($routeMap[$canonicalRoute]['en'] ?? $canonicalRoute);
                        $dePath = '/de/' . ($routeMap[$canonicalRoute]['de'] ?? $canonicalRoute);
                    }
                    
                    // Manejar rutas dinámicas (como /servicios/{slug})
                    if (preg_match('/^(servicios|services|leistungen)\/(.+)$/', $currentRoute, $slugMatches)) {
                        $slug = $slugMatches[2];
                        $esPath = '/es/servicios/' . $slug;
                        $enPath = '/en/services/' . $slug;
                        $dePath = '/de/leistungen/' . $slug;
                    }
                @endphp
                <a href="{{ $esPath }}" 
                   class="px-2 py-1 {{ $locale === 'es' ? 'text-amber-400' : 'text-gray-400' }} hover:text-amber-400 transition-colors">ES</a>
                <a href="{{ $enPath }}" 
                   class="px-2 py-1 {{ $locale === 'en' ? 'text-amber-400' : 'text-gray-400' }} hover:text-amber-400 transition-colors">EN</a>
                <a href="{{ $dePath }}" 
                   class="px-2 py-1 {{ $locale === 'de' ? 'text-amber-400' : 'text-gray-400' }} hover:text-amber-400 transition-colors">DE</a>
            </div>
            <button id="mobile-menu-btn" class="lg:hidden text-white hover:text-amber-400 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>
</header>
<div class="h-20"></div>
