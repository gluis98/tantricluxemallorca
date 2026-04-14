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
            <a href="https://www.google.com/maps/place/Carrer+del+Pare+Bartomeu+Pou,+44,+Nord,+07003+Palma,+Illes+Balears" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl tracking-wider text-gray-300 tenali-ramakrishna break-words leading-tight hover:text-amber-400 transition-colors cursor-pointer group">
                <span class="hidden sm:inline group-hover:underline">{{ $header['location'] ?? '' }}</span>
                <span class="sm:hidden group-hover:underline">Carrer del Pare Bartomeu Pou, 44<br />Nord, 07003 Palma</span>
            </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex flex-1 justify-center items-center space-x-8 text-xl tracking-wider tenali-ramakrishna">
            <a href="/{{ $locale === 'es' ? '' : $locale }}" class="hover:text-amber-400 transition-colors uppercase">{{ $header['nav']['home'] ?? 'Inicio' }}</a>
            <a href="/{{ $locale }}{{ $header['paths']['about'] ?? '/acerca' }}" class="hover:text-amber-400 transition-colors uppercase">{{ $header['nav']['about'] ?? 'Acerca' }}</a>
            <a href="/{{ $locale }}{{ $header['paths']['services'] ?? '/servicios' }}" class="hover:text-amber-400 transition-colors uppercase">{{ $header['nav']['services'] ?? 'Servicios' }}</a>
            <a href="/{{ $locale }}{{ $header['paths']['masseuses'] ?? '/masajistas' }}" class="hover:text-amber-400 transition-colors uppercase">{{ $header['nav']['masseuses'] ?? 'Masajistas' }}</a>
            <a href="/{{ $locale }}{{ $header['paths']['contact'] ?? '/contacto' }}" class="hover:text-amber-400 transition-colors uppercase">{{ $header['nav']['contact'] ?? 'Contacto' }}</a>
            <a href="/{{ $locale }}{{ $header['paths']['booking'] ?? '/reserva' }}"
               class="inline-flex shrink-0 items-center gap-2 whitespace-nowrap border border-amber-400/70 rounded-full px-5 lg:px-7 py-2 text-amber-200 hover:bg-amber-400/10 hover:border-amber-400 transition-all uppercase">
                <span class="shrink-0 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                {{ $header['cta_reserve'] ?? 'Reserva ahora' }}
            </a>
        </nav>

        <!-- Language Switcher & Mobile Menu -->
        <div class="flex flex-1 justify-end items-center gap-4">
            <div class="flex gap-2">
                @php
                    $currentPath = request()->path();
                    
                    // Mapeo de rutas entre idiomas
                    $routeMap = [
                        // Ruta canónica (español) => traducciones por idioma
                        '' => ['en' => '', 'de' => '', 'it' => '', 'fr' => ''], // Home
                        'acerca' => ['en' => 'about', 'de' => 'uber-uns', 'it' => 'chi-siamo', 'fr' => 'a-propos'],
                        'servicios' => ['en' => 'services', 'de' => 'leistungen', 'it' => 'servizi', 'fr' => 'services'],
                        'masajistas' => ['en' => 'masseuses', 'de' => 'masseurinnen', 'it' => 'massaggiatrici', 'fr' => 'masseuses'],
                        'contacto' => ['en' => 'contact', 'de' => 'kontakt', 'it' => 'contatti', 'fr' => 'contact'],
                        'reserva' => ['en' => 'book', 'de' => 'buchen', 'it' => 'prenota', 'fr' => 'reserver'],
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
                        if (isset($translations['it'])) {
                            $reverseMap[$translations['it']] = $esRoute;
                        }
                        if (isset($translations['fr'])) {
                            $reverseMap[$translations['fr']] = $esRoute;
                        }
                    }
                    
                    // Extraer el idioma y la ruta actual
                    $currentLocale = $locale;
                    $currentRoute = '';
                    
                    if (preg_match('/^(es|en|de|it|fr)(?:\/(.+))?$/', $currentPath, $matches)) {
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
                        $itPath = '/it';
                        $frPath = '/fr';
                    } else {
                        // Rutas con path
                        $esPath = '/es/' . $canonicalRoute;
                        $enPath = '/en/' . ($routeMap[$canonicalRoute]['en'] ?? $canonicalRoute);
                        $dePath = '/de/' . ($routeMap[$canonicalRoute]['de'] ?? $canonicalRoute);
                        $itPath = '/it/' . ($routeMap[$canonicalRoute]['it'] ?? $canonicalRoute);
                        $frPath = '/fr/' . ($routeMap[$canonicalRoute]['fr'] ?? $canonicalRoute);
                    }
                    
                    // Manejar rutas dinámicas (como /servicios/{slug})
                    if (preg_match('/^(servicios|services|leistungen|servizi)\/(.+)$/', $currentRoute, $slugMatches)) {
                        $slug = $slugMatches[2];
                        $esPath = '/es/servicios/' . $slug;
                        $enPath = '/en/services/' . $slug;
                        $dePath = '/de/leistungen/' . $slug;
                        $itPath = '/it/servizi/' . $slug;
                        $frPath = '/fr/services/' . $slug;
                    }
                @endphp
                <a href="{{ $esPath }}" 
                   class="px-2 py-1 {{ $locale === 'es' ? 'text-amber-400' : 'text-gray-400' }} hover:text-amber-400 transition-colors">ES</a>
                <a href="{{ $enPath }}" 
                   class="px-2 py-1 {{ $locale === 'en' ? 'text-amber-400' : 'text-gray-400' }} hover:text-amber-400 transition-colors">EN</a>
                <a href="{{ $dePath }}" 
                   class="px-2 py-1 {{ $locale === 'de' ? 'text-amber-400' : 'text-gray-400' }} hover:text-amber-400 transition-colors">DE</a>
                <a href="{{ $itPath }}" 
                   class="px-2 py-1 {{ $locale === 'it' ? 'text-amber-400' : 'text-gray-400' }} hover:text-amber-400 transition-colors">IT</a>
                <a href="{{ $frPath }}" 
                   class="px-2 py-1 {{ $locale === 'fr' ? 'text-amber-400' : 'text-gray-400' }} hover:text-amber-400 transition-colors">FR</a>
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
                <a href="/{{ $locale }}{{ $header['paths']['booking'] ?? '/reserva' }}"
                   onclick="closeMobileMenu()"
                   class="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-amber-400/50 px-5 py-3 text-xl tracking-wider tenali-ramakrishna text-amber-200 hover:bg-amber-400/10 transition-colors uppercase">
                    {{ $header['cta_reserve'] ?? 'Reserva ahora' }}
                </a>
            </nav>
            
            <!-- Logo al final -->
            <div class="flex justify-center items-center mt-8 mb-4">
                <img src="{{ asset('images/LogoIso.png') }}"
                     alt="Logo Tantric Luxe"
                     width="80" height="80"
                     class="w-20 h-20 drop-shadow-lg"
                     loading="lazy" decoding="async">
            </div>
        </div>
    </aside>
</div>

<script>
    (function () {
        'use strict';

        // ── Captura de elementos una sola vez (evita querySelector repetido) ──
        var _overlay, _sidebar, _menuIcon, _closeIcon, _menuOpen = false;

        function getEls() {
            if (!_overlay) {
                _overlay   = document.getElementById('mobile-menu-overlay');
                _sidebar   = document.getElementById('mobile-sidebar');
                _menuIcon  = document.getElementById('menu-icon');
                _closeIcon = document.getElementById('close-icon');
            }
        }

        // Doble rAF: los writes van en el *siguiente* frame de pintura, tras aplicar el layout del frame anterior (mitiga forced reflow en Lighthouse).
        function openMobileMenu() {
            getEls();
            if (!_overlay || !_sidebar || _menuOpen) return;
            _menuOpen = true;
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    _overlay.classList.remove('pointer-events-none', 'opacity-0');
                    _overlay.classList.add('pointer-events-auto', 'opacity-100');
                    _sidebar.classList.remove('translate-x-full');
                    _sidebar.classList.add('translate-x-0');
                    if (_menuIcon)  _menuIcon.classList.add('hidden');
                    if (_closeIcon) _closeIcon.classList.remove('hidden');
                    document.documentElement.classList.add('overflow-hidden');
                });
            });
        }

        function closeMobileMenu() {
            getEls();
            if (!_overlay || !_sidebar || !_menuOpen) return;
            _menuOpen = false;
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    _overlay.classList.remove('pointer-events-auto', 'opacity-100');
                    _overlay.classList.add('pointer-events-none', 'opacity-0');
                    _sidebar.classList.remove('translate-x-0');
                    _sidebar.classList.add('translate-x-full');
                    if (_menuIcon)  _menuIcon.classList.remove('hidden');
                    if (_closeIcon) _closeIcon.classList.add('hidden');
                    document.documentElement.classList.remove('overflow-hidden');
                });
            });
        }

        // Exponer para los onclick inline del HTML
        window.openMobileMenu  = openMobileMenu;
        window.closeMobileMenu = closeMobileMenu;

        // ── Event listeners ────────────────────────────────────────────────────
        document.addEventListener('DOMContentLoaded', function () {
            getEls();

            var menuBtn = document.getElementById('mobile-menu-btn');
            if (menuBtn) {
                menuBtn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    _menuOpen ? closeMobileMenu() : openMobileMenu();
                });
            }

            var backdrop = document.getElementById('mobile-menu-backdrop');
            if (backdrop) backdrop.addEventListener('click', closeMobileMenu);

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') closeMobileMenu();
            });
        });
    }());
</script>

<div class="h-20"></div>
