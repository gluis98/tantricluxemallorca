<!DOCTYPE html>
<html lang="{{ $locale ?? 'es' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Primary Meta Tags -->
    <title>@yield('title', 'Tantric Luxe Mallorca')</title>
    <meta name="title" content="@yield('title', 'Tantric Luxe Mallorca')">
    <meta name="description" content="@yield('description', 'Masajes eróticos y tantricos exclusivos en Palma de Mallorca')">
    <meta name="keywords" content="@yield('keywords', 'masajes palma, masajes mallorca')">
    <meta name="author" content="Tantric Luxe Mallorca">
    <meta name="robots" content="index, follow">
    <meta name="language" content="{{ $locale ?? 'es' }}">
    <meta name="revisit-after" content="7 days">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="@yield('canonical', url()->current())">
    
    <!-- Preload LCP hero image (per-page) — SIEMPRE primero para mayor prioridad -->
    @yield('page_preload')
    {{-- El Mandala es decorativo: NO se preloada (evita competir con el LCP real) --}}
    
    @php
        $ogTitle = View::hasSection('og_title') ? View::yieldContent('og_title') : (View::hasSection('title') ? View::yieldContent('title') : 'Tantric Luxe Mallorca');
        $ogDescription = View::hasSection('og_description') ? View::yieldContent('og_description') : (View::hasSection('description') ? View::yieldContent('description') : 'Masajes eróticos y tantricos exclusivos en Palma de Mallorca');
        $ogUrl = View::hasSection('og_url') ? View::yieldContent('og_url') : url()->current();
        $ogImage = View::hasSection('og_image') ? View::yieldContent('og_image') : asset('images/LogoFull.png');
    @endphp
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ $ogUrl }}">
    <meta property="og:title" content="{{ $ogTitle }}">
    <meta property="og:description" content="{{ $ogDescription }}">
    <meta property="og:image" content="{{ $ogImage }}">
    <meta property="og:locale" content="{{ $locale === 'es' ? 'es_ES' : ($locale === 'en' ? 'en_US' : 'de_DE') }}">
    <meta property="og:site_name" content="Tantric Luxe Mallorca">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="{{ $ogUrl }}">
    <meta name="twitter:title" content="{{ $ogTitle }}">
    <meta name="twitter:description" content="{{ $ogDescription }}">
    <meta name="twitter:image" content="{{ $ogImage }}">
    
    <!-- Alternate Languages (hreflang) -->
    @yield('hreflang')
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico') }}">
    
    @php
        // Resolver assets compilados desde public_html/build/
        $cssFile = null;
        $jsFile  = null;
        $manifestPath = base_path('public_html/build/manifest.json');

        if (file_exists($manifestPath) && is_readable($manifestPath)) {
            try {
                $manifest = json_decode(file_get_contents($manifestPath), true);
                if (json_last_error() === JSON_ERROR_NONE && is_array($manifest)) {
                    // CSS
                    if (isset($manifest['resources/css/app.css']['file'])) {
                        $cssFileName = $manifest['resources/css/app.css']['file'];
                        if (file_exists(base_path('public_html/build/' . $cssFileName))) {
                            $cssFile = asset('build/' . $cssFileName);
                        }
                    }
                    // JS
                    if (isset($manifest['resources/js/app.js']['file'])) {
                        $jsFileName = $manifest['resources/js/app.js']['file'];
                        if (file_exists(base_path('public_html/build/' . $jsFileName))) {
                            $jsFile = asset('build/' . $jsFileName);
                        }
                    }
                }
            } catch (\Exception $e) {
                // fallback silencioso
            }
        }
    @endphp

    <!-- Preconnect Google Fonts (siempre, para reducir latencia) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    {{-- Carga NO-render-blocking de Google Fonts (media=print trick) --}}
    <link rel="preload"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Tenali+Ramakrishna&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Tenali+Ramakrishna&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap">
    </noscript>

    <!-- CSS principal -->
    @if($cssFile)
        {{-- Preload para descubrir el CSS antes (reduce latencia del Critical Chain) --}}
        <link rel="preload" href="{{ $cssFile }}" as="style">
        {{-- CSS compilado con Vite (incluye Tailwind + estilos propios) --}}
        <link rel="stylesheet" href="{{ $cssFile }}">
    @else
        {{-- Fallback: estilos críticos inline + Tailwind CDN diferido --}}
        <style>
            /* Estilos críticos inline para evitar FOUC */
            :root { --background: #0a0a0a; --foreground: #ededed; }
            *, *::before, *::after { box-sizing: border-box; }
            body {
                margin: 0;
                background: var(--background);
                color: var(--foreground);
                font-family: 'Urbanist', 'Georgia', sans-serif;
                -webkit-font-smoothing: antialiased;
            }
            h1, h2, h3, h4, h5 { font-family: 'Cormorant Garamond', 'Georgia', serif; }
            .gradiente-dorado {
                background: linear-gradient(90deg, #FFD700 0%, #FFFFFF 50%, #FFD700 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .tenali-ramakrishna { font-family: 'Tenali Ramakrishna', sans-serif; }
            .cormorant-garamond { font-family: 'Cormorant Garamond', serif; }
            .bg-gradient-carnemarron { background: linear-gradient(90deg, #b48952, #d2a47b, #b48952); }
            @keyframes fuego {
                0%   { opacity: .7;  filter: blur(16px) brightness(1.2);  transform: scale(1)    translateY(0); }
                20%  { opacity: .85; filter: blur(18px) brightness(1.3);  transform: scale(1.05) translateY(-2px); }
                40%  { opacity: .6;  filter: blur(15px) brightness(1.1);  transform: scale(.98)  translateY(1px); }
                60%  { opacity: .8;  filter: blur(17px) brightness(1.25); transform: scale(1.03) translateY(-1px); }
                80%  { opacity: .65; filter: blur(16px) brightness(1.15); transform: scale(1.1)  translateY(2px); }
                100% { opacity: .7;  filter: blur(16px) brightness(1.2);  transform: scale(1.02) translateY(0); }
            }
            .glow-fire {
                background: radial-gradient(70% 220% at 50% -40%, #ffd700cc 0%, #ff9900bb 30%, transparent 80%);
                filter: blur(18px) brightness(1.25); opacity: .85;
                transition: opacity .3s; animation: fuego 5s infinite ease-in-out;
            }
            @keyframes glow-pulse { 0%,100%{opacity:.2} 50%{opacity:.05} }
            .glow-mandala {
                background: radial-gradient(circle, #ffd70088 0%, #ff990044 60%, transparent 100%);
                filter: blur(100px); opacity: .7; transition: opacity .3s;
                animation: glow-pulse 3s infinite ease-in-out;
                pointer-events: none; position: absolute; inset: 0; z-index: 0; border-radius: 50%;
            }
        </style>
        {{-- Tailwind CDN diferido (no bloquea render) --}}
        <script>
            window.addEventListener('load', function () {
                var s = document.createElement('script');
                s.src = 'https://cdn.tailwindcss.com';
                s.onload = function () {
                    if (window.tailwind) {
                        tailwind.config = {
                            theme: {
                                extend: {
                                    colors: { amber: { 50:'#fffbeb',100:'#fef3c7',200:'#fde68a',300:'#fcd34d',400:'#fbbf24',500:'#f59e0b',600:'#d97706',700:'#b45309',800:'#92400e',900:'#78350f',950:'#451a03' } },
                                    fontFamily: { cormorant:['Cormorant Garamond','serif'], tenali:['Tenali Ramakrishna','sans-serif'], urbanist:['Urbanist','sans-serif'] }
                                }
                            }
                        };
                    }
                };
                document.head.appendChild(s);
            });
        </script>
    @endif
    
    <!-- JavaScript -->
    @if($jsFile)
        <script src="{{ $jsFile }}" defer></script>
    @endif
    
    <!-- Structured Data (JSON-LD) -->
    @yield('structured_data')
</head>
<body class="antialiased">
    <div class="min-h-screen relative">
        <!-- Background design -->
        <div class="absolute inset-0 bg-gray-950"></div>
        
        <!-- Multiple radial gradients for depth -->
        <div class="absolute inset-0" style="background: radial-gradient(circle at 20% 30%, rgba(120, 53, 15, 0.4) 0%, transparent 50%);"></div>
        <div class="absolute inset-0" style="background: radial-gradient(circle at 80% 20%, rgba(92, 51, 23, 0.3) 0%, transparent 40%);"></div>
        <div class="absolute inset-0" style="background: radial-gradient(circle at 60% 80%, rgba(69, 39, 17, 0.25) 0%, transparent 35%);"></div>
        <div class="absolute inset-0" style="background: radial-gradient(circle at 10% 70%, rgba(53, 45, 40, 0.2) 0%, transparent 45%);"></div>
        
        <!-- Linear gradients -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-amber-950/10 to-black/80"></div>
        <div class="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-amber-950/10"></div>
        
        <!-- Mandalas -->
        <div class="fixed inset-0 w-screen h-screen pointer-events-none z-0">
            <div class="absolute top-0 left-0 -translate-x-[60%] md:-translate-x-1/2 w-[600px] h-[600px]">
                <span class="glow-mandala"></span>
                <img src="{{ route('img.serve', ['src' => 'images/Mandala.webp', 'w' => 600, 'q' => 75]) }}" alt="" role="presentation" width="600" height="600" class="object-contain w-full h-full relative z-10" fetchpriority="low" loading="lazy" decoding="async">
            </div>
            <div class="absolute top-0 right-0 translate-x-[60%] md:translate-x-1/2 w-[600px] h-[600px]">
                <span class="glow-mandala"></span>
                <img src="{{ route('img.serve', ['src' => 'images/Mandala.webp', 'w' => 600, 'q' => 75]) }}" alt="" role="presentation" width="600" height="600" class="object-contain w-full h-full relative z-10" fetchpriority="low" loading="lazy" decoding="async" style="transform: scaleX(-1);">
            </div>
        </div>
        
        @include('components.sections.header', ['locale' => $locale ?? 'es'])
        
        <main class="relative z-10">
            @yield('content')
        </main>
        
        @include('components.sections.footer', ['locale' => $locale ?? 'es'])
        
        @include('components.floating-whatsapp-button', ['locale' => $locale ?? 'es'])
    </div>
    
    @stack('scripts')
</body>
</html>
