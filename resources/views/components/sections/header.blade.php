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
            <button id="mobile-menu-btn" class="lg:hidden text-white hover:text-amber-400 transition-colors" aria-label="Abrir menú">
                <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    </div>
</header>

<!-- Mobile Sidebar Menu -->
<div id="mobile-menu-overlay" class="fixed inset-0 z-50 transition-all duration-500 pointer-events-none opacity-0">
    <!-- Fondo oscuro -->
    <div id="mobile-menu-backdrop" class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeMobileMenu()"></div>
    
    <!-- Sidebar -->
    <aside id="mobile-sidebar" class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 via-gray-950 to-black border-l border-amber-900/30 shadow-2xl transform translate-x-full transition-transform duration-500 ease-in-out overflow-y-auto">
        <div class="flex flex-col h-full p-6">
            <!-- Header del sidebar -->
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-2xl font-light tracking-wider text-amber-400 cormorant-garamond uppercase">Menú</h2>
                <button onclick="closeMobileMenu()" class="text-white hover:text-amber-400 transition-colors" aria-label="Cerrar menú">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <!-- Navegación móvil -->
            <nav class="flex flex-col gap-6 flex-1">
                <a href="/{{ $locale === 'es' ? '' : $locale }}" 
                   onclick="closeMobileMenu()"
                   class="text-xl tracking-wider tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-3">
                    {{ $header['nav']['home'] ?? 'Inicio' }}
                </a>
                <a href="/{{ $locale }}{{ $header['paths']['about'] ?? '/acerca' }}" 
                   onclick="closeMobileMenu()"
                   class="text-xl tracking-wider tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-3">
                    {{ $header['nav']['about'] ?? 'Acerca' }}
                </a>
                <a href="/{{ $locale }}{{ $header['paths']['services'] ?? '/servicios' }}" 
                   onclick="closeMobileMenu()"
                   class="text-xl tracking-wider tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-3">
                    {{ $header['nav']['services'] ?? 'Servicios' }}
                </a>
                <a href="/{{ $locale }}{{ $header['paths']['masseuses'] ?? '/masajistas' }}" 
                   onclick="closeMobileMenu()"
                   class="text-xl tracking-wider tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-3">
                    {{ $header['nav']['masseuses'] ?? 'Masajistas' }}
                </a>
                <a href="/{{ $locale }}{{ $header['paths']['contact'] ?? '/contacto' }}" 
                   onclick="closeMobileMenu()"
                   class="text-xl tracking-wider tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-3">
                    {{ $header['nav']['contact'] ?? 'Contacto' }}
                </a>
            </nav>
            
            <!-- Logo al final -->
            <div class="flex justify-center items-center mt-8 mb-4">
                <img src="{{ asset('images/LogoIso.png') }}" 
                     alt="Logo Tantric Luxe" 
                     class="w-20 h-20 drop-shadow-lg">
            </div>
        </div>
    </aside>
</div>

<script>
    function openMobileMenu() {
        const overlay = document.getElementById('mobile-menu-overlay');
        const sidebar = document.getElementById('mobile-sidebar');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        
        if (overlay && sidebar) {
            overlay.classList.remove('pointer-events-none', 'opacity-0');
            overlay.classList.add('pointer-events-auto', 'opacity-100');
            sidebar.classList.remove('translate-x-full');
            sidebar.classList.add('translate-x-0');
            
            if (menuIcon) menuIcon.classList.add('hidden');
            if (closeIcon) closeIcon.classList.remove('hidden');
            
            // Prevenir scroll del body
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeMobileMenu() {
        const overlay = document.getElementById('mobile-menu-overlay');
        const sidebar = document.getElementById('mobile-sidebar');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        
        if (overlay && sidebar) {
            overlay.classList.remove('pointer-events-auto', 'opacity-100');
            overlay.classList.add('pointer-events-none', 'opacity-0');
            sidebar.classList.remove('translate-x-0');
            sidebar.classList.add('translate-x-full');
            
            if (menuIcon) menuIcon.classList.remove('hidden');
            if (closeIcon) closeIcon.classList.add('hidden');
            
            // Restaurar scroll del body
            document.body.style.overflow = '';
        }
    }
    
    // Event listener para el botón del menú
    document.addEventListener('DOMContentLoaded', function() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        if (menuBtn) {
            menuBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const overlay = document.getElementById('mobile-menu-overlay');
                const isOpen = overlay && overlay.classList.contains('opacity-100');
                
                if (isOpen) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            });
        }
        
        // Cerrar al hacer clic fuera del sidebar
        const backdrop = document.getElementById('mobile-menu-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', closeMobileMenu);
        }
        
        // Cerrar con la tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
    });
</script>

<div class="h-20"></div>
