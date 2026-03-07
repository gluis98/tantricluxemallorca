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
    
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    
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
                <img src="{{ asset('images/Mandala.webp') }}" alt="Left Mandala" class="object-contain w-full h-full relative z-10">
            </div>
            <div class="absolute top-0 right-0 translate-x-[60%] md:translate-x-1/2 w-[600px] h-[600px]">
                <span class="glow-mandala"></span>
                <img src="{{ asset('images/Mandala.webp') }}" alt="Right Mandala" class="object-contain w-full h-full relative z-10" style="transform: scaleX(-1);">
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
