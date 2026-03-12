@extends('layouts.app')

@section('title', trans('homepage.meta_title', [], $locale))
@section('description', trans('homepage.meta_description', [], $locale))
@section('keywords', trans('homepage.meta_keywords', [], $locale))
@section('og_title', trans('homepage.meta_title', [], $locale))
@section('og_description', trans('homepage.meta_description', [], $locale))
@section('og_url', url()->current())
@section('canonical', url()->current())

@section('hreflang')
    @include('components.seo.hreflang', ['locale' => $locale])
@endsection

@section('page_preload')
    {{-- Precarga responsiva del LCP: el navegador descarga el tamaño correcto según la pantalla --}}
    <link rel="preload" as="image"
          href="{{ route('img.serve', ['src' => 'images/hero section/1.jpg', 'w' => 800, 'q' => 85]) }}"
          imagesrcset="{{ route('img.serve', ['src' => 'images/hero section/1.jpg', 'w' => 420, 'q' => 85]) }} 420w,
                       {{ route('img.serve', ['src' => 'images/hero section/1.jpg', 'w' => 800, 'q' => 85]) }} 800w"
          imagesizes="(max-width: 1024px) 90vw, 50vw"
          fetchpriority="high">
@endsection

@section('structured_data')
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Tantric Luxe Mallorca",
    "description": "{{ trans('homepage.meta_description', [], $locale) }}",
    "url": "https://tantricluxemallorca.com",
    "logo": "{{ asset('images/LogoFull.png') }}",
    "image": "{{ asset('images/LogoFull.png') }}",
    "telephone": "+34-602-560-426",
    "email": "info@tantricluxemallorca.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plaça de Santa Magdalena, 3A, Centre",
        "addressLocality": "Palma",
        "postalCode": "07012",
        "addressRegion": "Illes Balears",
        "addressCountry": "ES"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "39.5736032",
        "longitude": "2.6386885"
    },
    "openingHours": "Mo-Su 09:00-23:00",
    "priceRange": "€99-€499",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "89",
        "bestRating": "5",
        "worstRating": "1"
    },
    "sameAs": [
        "https://instagram.com/tantricluxemallorca",
        "https://facebook.com/tantricluxemallorca"
    ]
}
</script>
@endsection

@section('content')
@php
    $homepage = trans('homepage', [], $locale);
    $servicesPage = trans('servicesPage', [], $locale);
    $services = $servicesPage['services'] ?? [];
    $packages = $servicesPage['packages'] ?? [];
    $faqs = $servicesPage['faqs'] ?? [];
    
    $features = $homepage['features_section']['features'] ?? [];
    $steps = $homepage['process_section']['steps'] ?? [];
@endphp

<main class="relative z-10 px-0 md:px-8 py-8">
    <!-- Hero Section -->
    <section class="relative min-h-[92vh] flex items-center overflow-hidden px-4 lg:px-8 py-8">
        <div class="max-w-7xl mx-auto w-full">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                <!-- Columna izquierda: texto y CTAs -->
                <div class="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">

                    <!-- Eyebrow -->
                    <p class="text-xs md:text-sm mb-5 font-light tracking-[0.3em] text-amber-400 tenali-ramakrishna uppercase">
                        {{ $homepage['subtitle'] ?? 'EROTIC MASSAGE' }}
                    </p>

                    <!-- Título principal H1 -->
                    <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-light tracking-wider mb-5 gradiente-dorado cormorant-garamond leading-none">
                        {{ $homepage['title'] ?? 'TANTRIC LUXE' }}
                    </h1>

                    <!-- Subtítulo -->
                    <p class="text-xl md:text-2xl lg:text-3xl font-light tracking-widest mb-4 text-gray-300 tenali-ramakrishna">
                        {{ $homepage['main_heading'] ?? 'MASAJE TANTRICO PALMA' }}
                    </p>

                    <p class="text-sm md:text-base font-light tracking-widest mb-8 text-gray-400 tenali-ramakrishna leading-relaxed">
                        {{ $homepage['secondary_heading'] ?? 'EXPERIENCIA EXCLUSIVA DE MASAJE TANTRICO EN MALLORCA' }}
                    </p>

                    <!-- Separador dorado -->
                    <div class="w-20 h-px bg-amber-400 mx-auto lg:mx-0 mb-8"></div>

                    <!-- Iconos de características -->
                    <div class="flex justify-center lg:justify-start gap-10 mb-10">
                        <!-- Tantric -->
                        <div class="flex flex-col gap-3 items-center">
                            <div class="w-14 h-14 rounded-full flex items-center justify-center relative">
                                <span class="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                                <img src="{{ route('img.serve', ['src' => 'images/BotomLuxDark.webp', 'w' => 120, 'q' => 85]) }}"
                                     alt="Masaje tantrico especial Mallorca"
                                     width="56" height="56"
                                     class="object-contain w-full h-full relative z-10"
                                     loading="lazy" decoding="async">
                                <span class="absolute inset-0 flex items-center justify-center text-lg text-yellow-400 pointer-events-none z-20">Ω</span>
                            </div>
                            <div class="text-center">
                                <p class="text-sm font-light tracking-wider tenali-ramakrishna uppercase">{{ $homepage['hero_section']['icon1_title'] ?? 'TANTRIC' }}</p>
                                <p class="text-xs text-amber-400/80 uppercase tenali-ramakrishna">{{ $homepage['hero_section']['icon1_text'] ?? 'especial' }}</p>
                            </div>
                        </div>
                        <!-- Deluxe -->
                        <div class="flex flex-col gap-3 items-center">
                            <div class="w-14 h-14 rounded-full flex items-center justify-center relative">
                                <span class="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                                <img src="{{ route('img.serve', ['src' => 'images/BotomLuxDark.webp', 'w' => 120, 'q' => 85]) }}"
                                     alt="Masaje tantrico deluxe Palma"
                                     width="56" height="56"
                                     class="object-contain w-full h-full relative z-10"
                                     loading="lazy" decoding="async">
                                <span class="absolute inset-0 flex items-center justify-center text-lg text-yellow-400 pointer-events-none z-20">Σ</span>
                            </div>
                            <div class="text-center">
                                <p class="text-sm font-light tracking-wider tenali-ramakrishna uppercase">{{ $homepage['hero_section']['icon2_title'] ?? 'DELUXE' }}</p>
                                <p class="text-xs text-amber-400/80 uppercase tenali-ramakrishna">{{ $homepage['hero_section']['icon2_text'] ?? 'masajes' }}</p>
                            </div>
                        </div>
                        <!-- Único -->
                        <div class="flex flex-col gap-3 items-center">
                            <div class="w-14 h-14 rounded-full flex items-center justify-center relative">
                                <span class="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                                <img src="{{ route('img.serve', ['src' => 'images/BotomLuxDark.webp', 'w' => 120, 'q' => 85]) }}"
                                     alt="Experiencia tantrica única Mallorca"
                                     width="56" height="56"
                                     class="object-contain w-full h-full relative z-10"
                                     loading="lazy" decoding="async">
                                <span class="absolute inset-0 flex items-center justify-center text-lg text-yellow-400 pointer-events-none z-20">Φ</span>
                            </div>
                            <div class="text-center">
                                <p class="text-sm font-light tracking-wider tenali-ramakrishna uppercase">{{ $homepage['hero_section']['icon3_title'] ?? 'ÚNICO' }}</p>
                                <p class="text-xs text-amber-400/80 uppercase tenali-ramakrishna">{{ $homepage['hero_section']['icon3_text'] ?? 'momentos' }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Botones CTA -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="https://wa.me/34602560426?text={{ urlencode(trans('contactPage.whatsapp_default_message', [], $locale)) }}"
                           target="_blank" rel="noopener noreferrer"
                           class="tenali-ramakrishna cursor-pointer border border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:opacity-90 text-white px-10 py-3 text-sm font-medium tracking-widest transition-opacity text-center uppercase">
                            {{ $homepage['reserve_button_text'] ?? 'RESERVAR AHORA' }}
                        </a>
                        <a href="{{ url($locale . '/servicios') }}"
                           class="tenali-ramakrishna cursor-pointer border border-amber-400/40 rounded-3xl hover:border-amber-400/80 text-amber-200 px-10 py-3 text-sm font-medium tracking-widest transition-colors text-center uppercase">
                            {{ $homepage['hero_section']['services_button'] ?? 'VER SERVICIOS' }}
                        </a>
                    </div>
                </div>

                <!-- Columna derecha: Hero Slideshow (LCP) -->
                <div class="order-1 lg:order-2 relative flex justify-center lg:justify-end">

                    <!-- Marco decorativo exterior -->
                    <div class="absolute -inset-3 rounded-sm border border-amber-400/10 pointer-events-none z-0"></div>

                    <!-- Contenedor del slideshow -->
                    <div id="hero-slider"
                         class="relative w-full max-w-lg lg:max-w-none overflow-hidden rounded-sm shadow-2xl h-[55vh] lg:h-[82vh]"
                         style="border: 1px solid rgba(251,191,36,0.18);">

                        <!-- SLIDE 1 — LCP (visible desde HTML, sin esperar JS) -->
                        <img src="{{ route('img.serve', ['src' => 'images/hero section/1.jpg', 'w' => 800, 'q' => 85]) }}"
                             srcset="{{ route('img.serve', ['src' => 'images/hero section/1.jpg', 'w' => 420, 'q' => 85]) }} 420w,
                                     {{ route('img.serve', ['src' => 'images/hero section/1.jpg', 'w' => 800, 'q' => 85]) }} 800w"
                             sizes="(max-width: 1024px) 90vw, 50vw"
                             alt="Masajista tantrica exclusiva Palma de Mallorca - Tantric Luxe"
                             width="800" height="955"
                             class="hero-slide is-active absolute inset-0 w-full h-full object-cover object-top"
                             data-slide="0"
                             fetchpriority="high"
                             loading="eager"
                             decoding="async">

                        <!-- SLIDE 2 -->
                        <img src="{{ route('img.serve', ['src' => 'images/hero section/2.jpg', 'w' => 800, 'q' => 85]) }}"
                             srcset="{{ route('img.serve', ['src' => 'images/hero section/2.jpg', 'w' => 420, 'q' => 85]) }} 420w,
                                     {{ route('img.serve', ['src' => 'images/hero section/2.jpg', 'w' => 800, 'q' => 85]) }} 800w"
                             sizes="(max-width: 1024px) 90vw, 50vw"
                             alt="Experiencia tantrica exclusiva Mallorca"
                             width="800" height="954"
                             class="hero-slide absolute inset-0 w-full h-full object-cover object-top"
                             data-slide="1"
                             loading="lazy"
                             decoding="async">

                        <!-- SLIDE 3 -->
                        <img src="{{ route('img.serve', ['src' => 'images/hero section/3.jpg', 'w' => 800, 'q' => 85]) }}"
                             srcset="{{ route('img.serve', ['src' => 'images/hero section/3.jpg', 'w' => 420, 'q' => 85]) }} 420w,
                                     {{ route('img.serve', ['src' => 'images/hero section/3.jpg', 'w' => 800, 'q' => 85]) }} 800w"
                             sizes="(max-width: 1024px) 90vw, 50vw"
                             alt="Masaje tantrico sensual Palma de Mallorca"
                             width="800" height="955"
                             class="hero-slide absolute inset-0 w-full h-full object-cover object-top"
                             data-slide="2"
                             loading="lazy"
                             decoding="async">

                        <!-- Overlay degradado inferior -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none z-10"></div>

                        <!-- Etiqueta de lujo -->
                        <div class="absolute bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-3 whitespace-nowrap z-20">
                            <div class="h-px w-10 bg-amber-400/60"></div>
                            <span class="text-xs tracking-[0.3em] text-amber-300/90 tenali-ramakrishna uppercase">Mallorca · Palma</span>
                            <div class="h-px w-10 bg-amber-400/60"></div>
                        </div>

                        <!-- Dots de navegación -->
                        <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                            <button class="hero-dot transition-all duration-500 rounded-full bg-amber-400 w-5 h-1.5" data-dot="0" aria-label="Slide 1"></button>
                            <button class="hero-dot transition-all duration-500 rounded-full bg-amber-400/30 w-1.5 h-1.5" data-dot="1" aria-label="Slide 2"></button>
                            <button class="hero-dot transition-all duration-500 rounded-full bg-amber-400/30 w-1.5 h-1.5" data-dot="2" aria-label="Slide 3"></button>
                        </div>
                    </div>

                    <!-- Glow ambiental -->
                    <div class="absolute inset-0 -z-10 rounded-sm"
                         style="background: radial-gradient(ellipse at 60% 40%, rgba(180,137,82,0.18) 0%, transparent 70%); filter: blur(40px);"></div>
                </div>

            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-16 px-4 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row gap-6 lg:gap-8">
                <div class="flex-1 relative group">
                    <div class="relative overflow-hidden rounded-xs" style="border: 1px solid rgba(251,191,36,0.20);">
                        <img src="{{ route('img.serve', ['src' => 'images/extras sections/ESPACIO EXLUSIVO.jpeg', 'w' => 750, 'q' => 82]) }}"
                             srcset="{{ route('img.serve', ['src' => 'images/extras sections/ESPACIO EXLUSIVO.jpeg', 'w' => 420, 'q' => 82]) }} 420w,
                                     {{ route('img.serve', ['src' => 'images/extras sections/ESPACIO EXLUSIVO.jpeg', 'w' => 750, 'q' => 82]) }} 750w"
                             sizes="(max-width: 768px) 90vw, 33vw"
                             alt="Espacio Exclusivo Tantrico Palma Mallorca"
                             width="750" height="500"
                             class="w-full h-64 md:h-100 object-cover transition-transform duration-500 group-hover:scale-105"
                             loading="lazy" decoding="async">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                    <div class="mt-4 text-center">
                        <h3 class="text-lg font-light tracking-wider text-white tenali-ramakrishna">
                            {{ $homepage['gallery_section']['item1'] ?? 'ESPACIO EXCLUSIVO' }}
                        </h3>
                    </div>
                </div>
                <div class="flex-1 relative group">
                    <div class="relative overflow-hidden rounded-xs" style="border: 1px solid rgba(251,191,36,0.20);">
                        <img src="{{ route('img.serve', ['src' => 'images/extras sections/Ambiente relajante.jpeg', 'w' => 750, 'q' => 82]) }}"
                             srcset="{{ route('img.serve', ['src' => 'images/extras sections/Ambiente relajante.jpeg', 'w' => 420, 'q' => 82]) }} 420w,
                                     {{ route('img.serve', ['src' => 'images/extras sections/Ambiente relajante.jpeg', 'w' => 750, 'q' => 82]) }} 750w"
                             sizes="(max-width: 768px) 90vw, 33vw"
                             alt="Ambiente Relajante Masaje Tantrico Palma"
                             width="750" height="500"
                             class="w-full h-64 md:h-100 object-cover transition-transform duration-500 group-hover:scale-105"
                             loading="lazy" decoding="async">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                    <div class="mt-4 text-center">
                        <h3 class="text-lg font-light tracking-wider text-white tenali-ramakrishna">
                            {{ $homepage['gallery_section']['item2'] ?? 'AMBIENTE RELAJANTE' }}
                        </h3>
                    </div>
                </div>
                <div class="flex-1 relative group">
                    <div class="relative overflow-hidden rounded-xs" style="border: 1px solid rgba(251,191,36,0.20);">
                        <img src="{{ route('img.serve', ['src' => 'images/extras sections/Experiencia única.jpeg', 'w' => 750, 'q' => 82]) }}"
                             srcset="{{ route('img.serve', ['src' => 'images/extras sections/Experiencia única.jpeg', 'w' => 420, 'q' => 82]) }} 420w,
                                     {{ route('img.serve', ['src' => 'images/extras sections/Experiencia única.jpeg', 'w' => 750, 'q' => 82]) }} 750w"
                             sizes="(max-width: 768px) 90vw, 33vw"
                             alt="Experiencia Única Masaje Tantrico Mallorca"
                             width="750" height="500"
                             class="w-full h-64 md:h-100 object-cover transition-transform duration-500 group-hover:scale-105"
                             loading="lazy" decoding="async">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                    <div class="mt-4 text-center">
                        <h3 class="text-lg font-light tracking-wider text-white tenali-ramakrishna">
                            {{ $homepage['gallery_section']['item3'] ?? 'EXPERIENCIA ÚNICA' }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección Masajistas: 4 Cards en fila -->
    @php
        $masseusesData = [
            [
                'name'      => 'Sharon',
                'specialty' => trans('masseusesPage.masseuses.0.specialty', [], $locale),
                'image'     => '/images/masseurs/Sharon/1.jpg',
                'reviews'   => 64,
            ],
            [
                'name'      => 'April',
                'specialty' => trans('masseusesPage.masseuses.1.specialty', [], $locale),
                'image'     => '/images/masseurs/April/1.jpeg',
                'reviews'   => 51,
            ],
            [
                'name'      => 'Anny',
                'specialty' => trans('masseusesPage.masseuses.2.specialty', [], $locale),
                'image'     => '/images/masseurs/Anny/1.jpg',
                'reviews'   => 47,
            ],
        ];
    @endphp
    <section class="py-16 px-4 lg:px-8">
        <div class="max-w-7xl mx-auto">

            <!-- Encabezado -->
            <div class="text-center mb-12">
                <p class="text-xs tracking-[0.3em] text-amber-400 tenali-ramakrishna uppercase mb-4">
                    {{ trans('masseusesPage.pre_title', [], $locale) }}
                </p>
                <h2 class="text-4xl md:text-5xl font-light tracking-wider gradiente-dorado cormorant-garamond mb-5">
                    {{ trans('masseusesPage.title', [], $locale) }}
                </h2>
                <div class="w-20 h-px bg-amber-400 mx-auto mb-5"></div>
                <p class="text-base text-gray-400 tenali-ramakrishna max-w-xl mx-auto">
                    {{ trans('masseusesPage.description', [], $locale) }}
                </p>
            </div>

            <!-- Grid 4 cards -->
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12 max-w-4xl mx-auto w-full">
                @foreach($masseusesData as $m)
                <div class="group relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:-translate-y-1"
                     style="border: 1px solid rgba(120,53,15,0.35);">

                    <!-- Imagen de la masajista -->
                    <div class="relative overflow-hidden" style="aspect-ratio: 3/4;">
                        <img src="{{ route('img.serve', ['src' => ltrim($m['image'], '/'), 'w' => 400, 'q' => 82]) }}"
                             srcset="{{ route('img.serve', ['src' => ltrim($m['image'], '/'), 'w' => 400, 'q' => 82]) }} 400w,
                                     {{ route('img.serve', ['src' => ltrim($m['image'], '/'), 'w' => 650, 'q' => 82]) }} 650w"
                             sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 22vw"
                             alt="{{ $m['name'] }} - Masajista Tantrica Palma Mallorca"
                             width="400" height="533"
                             class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                             loading="lazy"
                             decoding="async">

                        <!-- Overlay degradado -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                        <!-- Badge disponible (top-right) -->
                        <div class="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1"
                             style="border: 1px solid rgba(74,222,128,0.35);">
                            <div class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                            <span class="text-xs text-green-400 tenali-ramakrishna leading-none">
                                {{ trans('masseusesPage.available_now_text', [], $locale) }}
                            </span>
                        </div>

                        <!-- Info superpuesta en la parte inferior -->
                        <div class="absolute bottom-0 left-0 right-0 p-4">

                            <!-- Nombre -->
                            <h3 class="text-2xl md:text-3xl font-light tracking-[0.2em] gradiente-dorado cormorant-garamond mb-1 leading-tight">
                                {{ strtoupper($m['name']) }}
                            </h3>

                            <!-- Especialidad -->
                            <p class="text-xs text-amber-300/80 tenali-ramakrishna mb-3 leading-snug line-clamp-2">
                                {{ $m['specialty'] }}
                            </p>

                            <!-- Estrellas + reviews -->
                            <div class="flex items-center gap-1.5 mb-4">
                                <span class="text-amber-400 text-sm leading-none">★★★★★</span>
                                <span class="text-xs text-gray-400 tenali-ramakrishna">({{ $m['reviews'] }})</span>
                            </div>

                            <!-- Botón reservar -->
                            <a href="https://wa.me/34602560426?text={{ urlencode('Hola, me gustaría reservar una cita con ' . $m['name']) }}"
                               target="_blank" rel="noopener noreferrer"
                               class="block text-center text-xs tenali-ramakrishna rounded-full py-2 px-3 tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                               style="border: 1px solid rgba(251,191,36,0.55); color: #fcd34d; background: rgba(120,53,15,0.30);">
                                {{ trans('masseusesPage.reserve_button_text', [], $locale) }} {{ strtoupper($m['name']) }}
                            </a>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>

            <!-- Botón ver todas -->
            <div class="text-center">
                <a href="/{{ $locale }}/masajistas"
                   class="inline-block tenali-ramakrishna border-2 border-amber-400/60 hover:border-amber-400 bg-gradient-to-r from-amber-900/20 to-amber-800/10 rounded-full text-amber-300 px-12 py-4 text-base font-medium tracking-widest transition-all duration-300 hover:scale-105 shadow-lg uppercase">
                    {{ $homepage['masseuse_section']['button_text'] ?? 'MÁS INFORMACIÓN DE NUESTRAS MASAJISTAS' }}
                </a>
            </div>

        </div>
    </section>

    <!-- Services Section -->
    <section id="servicios" class="py-12 sm:py-24 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-12">
            <p class="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                {{ $homepage['services_section']['pre_title'] ?? 'NUESTROS SERVICIOS' }}
            </p>
            <h2 class="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                {{ $homepage['services_section']['title'] ?? 'EXPERIENCIAS EXCLUSIVAS' }}
            </h2>
            <div class="w-24 h-px bg-amber-400 mx-auto"></div>
        </div>

        @php
        $homeServices = [
            [
                'icon'        => '🌿',
                'title'       => 'MASAJE RELAJANTE',
                'description' => 'Ideal para desconectar del estrés y recuperar la armonía del cuerpo. Mediante técnicas suaves y relajantes se alivian las tensiones acumuladas, permitiendo que el cuerpo y la mente entren en un estado de profunda relajación.',
                'prices'      => ['30 min – 60€', '60 min – 100€'],
                'wa_text'     => 'Hola, me gustaría información sobre el Masaje Relajante',
                'accent'      => 'from-emerald-900/20 to-black/40',
                'badge'       => 'Relajación',
            ],
            [
                'icon'        => '✨',
                'title'       => 'MASAJE CUERPO A CUERPO',
                'description' => 'Una experiencia íntima y sensorial donde el contacto piel con piel crea una conexión especial entre los cuerpos. A través de movimientos suaves, fluidos y envolventes, este masaje despierta los sentidos y genera una sensación profunda de relajación, sensualidad y bienestar.',
                'prices'      => ['30 min – 80€', '45 min – 120€', '60 min – 150€ 💫'],
                'wa_text'     => 'Hola, me gustaría información sobre el Masaje Cuerpo a Cuerpo',
                'accent'      => 'from-amber-900/20 to-black/40',
                'badge'       => 'Más Popular',
            ],
            [
                'icon'        => '💧',
                'title'       => 'EXPERIENCIA ERÓTICA EN LA DUCHA',
                'description' => 'Una experiencia íntima y sensorial bajo el agua, donde el ambiente cálido y el contacto cercano crean un momento de profunda relajación y sensualidad. La combinación del agua, las caricias suaves y la cercanía del cuerpo despiertan los sentidos.',
                'prices'      => ['60 min – 200€ 💧✨'],
                'wa_text'     => 'Hola, me gustaría información sobre la Experiencia Erótica en la Ducha',
                'accent'      => 'from-blue-900/20 to-black/40',
                'badge'       => 'Exclusivo',
            ],
        ];
        @endphp

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            @foreach($homeServices as $svc)
            <div class="relative bg-gradient-to-b {{ $svc['accent'] }} backdrop-blur-sm rounded-2xl overflow-hidden
                        border border-amber-900/30 hover:border-amber-400/50
                        shadow-lg hover:shadow-2xl hover:shadow-amber-900/25
                        transition-all duration-500 hover:-translate-y-1
                        flex flex-col group">

                {{-- Línea decorativa superior (acento dorado) --}}
                <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>

                {{-- Brillo ambiental de fondo al hacer hover --}}
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style="background: radial-gradient(ellipse at 50% 0%, rgba(251,191,36,0.07) 0%, transparent 70%);"></div>

                <!-- Cabecera -->
                <div class="relative px-7 pt-9 pb-5 text-center">
                    <!-- Badge -->
                    <span class="absolute top-5 right-5 text-[9px] tracking-[0.2em] tenali-ramakrishna
                                 text-amber-300/70 border border-amber-400/20 rounded-full px-3 py-1 uppercase bg-black/20">
                        {{ $svc['badge'] }}
                    </span>

                    <!-- Icono con halo -->
                    <div class="relative inline-flex items-center justify-center w-16 h-16 mx-auto mb-5">
                        <div class="absolute inset-0 rounded-full bg-amber-400/8 group-hover:bg-amber-400/15 transition-colors duration-500"></div>
                        <span class="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-400 select-none">{{ $svc['icon'] }}</span>
                    </div>

                    <!-- Título -->
                    <h3 class="text-base sm:text-lg font-light tracking-[0.15em] gradiente-dorado cormorant-garamond leading-snug mb-4">
                        {{ $svc['title'] }}
                    </h3>

                    <!-- Separador ornamental -->
                    <div class="flex items-center justify-center gap-2 mb-1">
                        <div class="h-px w-8 bg-amber-400/40"></div>
                        <span class="text-amber-400/50 text-[8px]">◆</span>
                        <div class="h-px w-8 bg-amber-400/40"></div>
                    </div>
                </div>

                <!-- Descripción -->
                <div class="flex-grow px-7 pb-6">
                    <p class="text-gray-400/90 text-sm leading-[1.8] text-center tenali-ramakrishna">
                        {{ $svc['description'] }}
                    </p>
                </div>

                <!-- Bloque de precios -->
                <div class="mx-5 mb-5 rounded-xl bg-black/25 border border-amber-900/25 overflow-hidden">
                    <div class="px-5 py-3 border-b border-amber-900/20 text-center">
                        <p class="text-[10px] tracking-[0.25em] text-amber-400/60 tenali-ramakrishna uppercase">
                            Duración &amp; Precio
                        </p>
                    </div>
                    <div class="divide-y divide-amber-900/15">
                        @foreach($svc['prices'] as $price)
                        <div class="flex items-center justify-between px-5 py-3 group/price hover:bg-amber-400/5 transition-colors duration-200">
                            <span class="text-sm text-amber-200/80 tenali-ramakrishna">{{ $price }}</span>
                            <span class="text-amber-500/40 text-xs">✦</span>
                        </div>
                        @endforeach
                    </div>
                </div>

                <!-- Botón reservar con icono WhatsApp -->
                <div class="px-7 pb-8">
                    <a href="https://wa.me/34602560426?text={{ urlencode($svc['wa_text']) }}"
                       target="_blank" rel="noopener noreferrer"
                       class="flex items-center justify-center gap-2 w-full
                              tenali-ramakrishna tracking-[0.18em] text-xs uppercase font-medium
                              text-amber-300 border border-amber-400/40 hover:border-amber-400/80
                              bg-gradient-to-r from-amber-900/25 to-amber-800/15
                              hover:from-amber-800/40 hover:to-amber-700/30
                              rounded-full px-6 py-3.5
                              transition-all duration-300 hover:scale-[1.03] hover:shadow-md hover:shadow-amber-900/30">
                        <svg class="w-4 h-4 flex-shrink-0 opacity-70" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L.057 23.617a.75.75 0 00.921.921l5.77-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.88 0-3.645-.5-5.17-1.373l-.37-.217-3.425.876.893-3.318-.24-.385A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                        </svg>
                        {{ $homepage['services_section']['reserve_button'] ?? 'RESERVAR AHORA' }}
                    </a>
                </div>
            </div>
            @endforeach
        </div>

        <!-- Botón para ver todos los servicios -->
        <div class="text-center">
            <a href="/{{ $locale }}/servicios" 
               class="tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors">
                {{ $homepage['services_section']['see_all_button'] ?? 'VER TODOS LOS SERVICIOS' }}
            </a>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-4 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <p class="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                    {{ $homepage['features_section']['pre_title'] ?? 'POR QUÉ ELEGIRNOS' }}
                </p>
                <h2 class="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado cormorant-garamond">
                    {{ $homepage['features_section']['title'] ?? 'EXPERIENCIA PREMIUM GARANTIZADA' }}
                </h2>
                <div class="w-24 h-px bg-amber-400 mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                @foreach($features as $feature)
                <div class="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-xl p-6 border border-amber-900/20 hover:border-amber-600/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 group">
                    <div class="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                        {{ $feature['icon'] }}
                    </div>
                    <h3 class="text-xl font-light tracking-wider text-amber-400 mb-3 text-center cormorant-garamond">
                        {{ $feature['title'] }}
                    </h3>
                    <p class="text-gray-300 text-sm leading-relaxed text-center tenali-ramakrishna">
                        {{ $feature['description'] }}
                    </p>
                </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section class="py-12 sm:py-24 px-4 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-16 items-center">
            <div>
                <div class="flex flex-col mb-10 items-center text-center md:text-left md:items-start">
                    <p class="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                        {{ $homepage['about_us_section']['pre_title'] ?? 'SOBRE NOSOTROS' }}
                    </p>
                    <h2 class="text-3xl md:text-4xl font-light tracking-wider mb-8 gradiente-dorado">
                        {{ $homepage['about_us_section']['title'] ?? 'ESPECIALISTAS EN MASAJE TANTRICO MALLORCA' }}
                    </h2>
                    <div class="w-24 h-px bg-amber-400"></div>
                </div>
                <p class="text-gray-300 mb-6 leading-relaxed">
                    {{ $homepage['about_us_section']['p1'] ?? '' }}
                </p>
                <p class="text-gray-300 mb-8 leading-relaxed">
                    {{ $homepage['about_us_section']['p2'] ?? '' }}
                </p>
                <div class="grid grid-cols-3 gap-8 text-center">
                    <div>
                        <h4 class="text-3xl font-light text-amber-400 mb-2">{{ $homepage['about_us_section']['stat1_title'] ?? '10+' }}</h4>
                        <p class="text-sm text-gray-400">{{ $homepage['about_us_section']['stat1_text'] ?? 'Años en masaje tantrico' }}</p>
                    </div>
                    <div>
                        <h4 class="text-3xl font-light text-amber-400 mb-2">{{ $homepage['about_us_section']['stat2_title'] ?? '500+' }}</h4>
                        <p class="text-sm text-gray-400">{{ $homepage['about_us_section']['stat2_text'] ?? 'Clientes satisfechos' }}</p>
                    </div>
                    <div>
                        <h4 class="text-3xl font-light text-amber-400 mb-2">{{ $homepage['about_us_section']['stat3_title'] ?? '100%' }}</h4>
                        <p class="text-sm text-gray-400">{{ $homepage['about_us_section']['stat3_text'] ?? 'Privacidad garantizada' }}</p>
                    </div>
                </div>
            </div>
            <div class="relative w-full h-full">
                <img src="{{ route('img.serve', ['src' => 'images/especialistas_en_masajese_eroticos.webp', 'w' => 700, 'q' => 80]) }}"
                     srcset="{{ route('img.serve', ['src' => 'images/especialistas_en_masajese_eroticos.webp', 'w' => 700, 'q' => 80]) }} 700w,
                             {{ route('img.serve', ['src' => 'images/especialistas_en_masajese_eroticos.webp', 'w' => 1000, 'q' => 80]) }} 1000w"
                     sizes="(max-width: 768px) 90vw, 50vw"
                     alt="Centro de masaje tantrico exclusivo en Palma Mallorca"
                     width="700" height="700"
                     class="rounded-lg shadow-2xl object-cover w-full h-auto"
                     loading="lazy" decoding="async">
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section class="py-16 px-4 lg:px-8 bg-gradient-to-b from-amber-900/5 to-transparent">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <p class="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                    {{ $homepage['process_section']['pre_title'] ?? 'CÓMO FUNCIONA' }}
                </p>
                <h2 class="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado cormorant-garamond">
                    {{ $homepage['process_section']['title'] ?? 'TU EXPERIENCIA EN 4 PASOS' }}
                </h2>
                <div class="w-24 h-px bg-amber-400 mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                @foreach($steps as $index => $step)
                <div class="relative">
                    <div class="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/30 hover:border-amber-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 h-full flex flex-col">
                        <div class="text-6xl md:text-7xl font-light text-amber-400/20 mb-4 cormorant-garamond">
                            {{ $step['number'] }}
                        </div>
                        <h3 class="text-xl md:text-2xl font-light tracking-wider text-amber-400 mb-4 cormorant-garamond">
                            {{ $step['title'] }}
                        </h3>
                        <p class="text-gray-300 text-sm leading-relaxed flex-grow tenali-ramakrishna">
                            {{ $step['description'] }}
                        </p>
                    </div>
                    
                    @if($index < count($steps) - 1)
                    <div class="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-amber-400/30 transform -translate-y-1/2">
                        <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
                    </div>
                    @endif
                </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-12 sm:py-24 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-10">
            <p class="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                {{ $homepage['testimonials_section']['pre_title'] ?? 'TESTIMONIOS' }}
            </p>
            <h2 class="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                {{ $homepage['testimonials_section']['title'] ?? 'OPINIONES DE TANTRIC LUXE' }}
            </h2>
            <div class="w-24 h-px bg-amber-400 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            @foreach($homepage['testimonials_section']['testimonials'] ?? [] as $testimonial)
            <div class="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-amber-900/20">
                <div class="flex mb-4">
                    @for($i = 0; $i < 5; $i++)
                    <span class="text-amber-400">★</span>
                    @endfor
                </div>
                <p class="text-gray-300 mb-6 italic">&quot;{{ $testimonial['quote'] ?? '' }}&quot;</p>
                <p class="text-amber-400 font-light">- {{ $testimonial['author'] ?? '' }}</p>
            </div>
            @endforeach
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 px-4 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
                <p class="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                    {{ $servicesPage['faq_pre_title'] ?? 'PREGUNTAS FRECUENTES' }}
                </p>
                <h2 class="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado cormorant-garamond">
                    {{ $servicesPage['faq_title'] ?? 'TODO LO QUE NECESITAS SABER' }}
                </h2>
                <div class="w-24 h-px bg-amber-400 mx-auto"></div>
            </div>

            <div class="space-y-4" x-data="{ openIndex: null }">
                @foreach(array_slice($faqs, 0, 3) as $index => $faq)
                <div class="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-xl border border-amber-900/20 overflow-hidden transition-all duration-300">
                    <button @click="openIndex = openIndex === {{ $index }} ? null : {{ $index }}" 
                            class="w-full p-6 text-left flex items-center justify-between hover:bg-amber-900/10 transition-colors">
                        <h3 class="text-lg md:text-xl font-light tracking-wider text-amber-400 pr-4 tenali-ramakrishna">
                            {{ $faq['question'] ?? '' }}
                        </h3>
                        <span class="text-amber-400 text-2xl transition-transform duration-300 flex-shrink-0" 
                              :class="openIndex === {{ $index }} ? 'rotate-180' : ''">▼</span>
                    </button>
                    
                    <div x-show="openIndex === {{ $index }}" 
                         x-collapse
                         class="overflow-hidden transition-all duration-300">
                        <div class="p-6 pt-0">
                            <p class="text-gray-300 leading-relaxed tenali-ramakrishna">
                                {{ $faq['answer'] ?? '' }}
                            </p>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>

            <div class="text-center mt-8">
                <p class="text-gray-400 text-sm tenali-ramakrishna">
                    ¿Tienes más preguntas? 
                    <a href="/whatsapp" class="text-amber-400 hover:text-amber-300 underline transition-colors">
                        Contáctanos por WhatsApp
                    </a>
                </p>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 lg:px-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black/40 to-amber-900/20"></div>
        
        <div class="max-w-4xl mx-auto relative z-10 text-center">
            <div class="mb-8">
                <span class="text-6xl md:text-7xl">✨</span>
            </div>
            
            <h2 class="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 gradiente-dorado cormorant-garamond">
                {{ $homepage['cta_section']['title'] ?? '¿LISTO PARA TU EXPERIENCIA?' }}
            </h2>
            
            <div class="w-32 h-px bg-amber-400 mx-auto mb-8"></div>
            
            <p class="text-xl md:text-2xl font-light text-gray-300 mb-10 leading-relaxed tenali-ramakrishna max-w-2xl mx-auto">
                {{ $homepage['cta_section']['subtitle'] ?? 'Reserva ahora y descubre el verdadero arte del masaje tántrico en Palma de Mallorca. Tu transformación comienza aquí.' }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://wa.me/34602560426?text={{ urlencode('Hola, me gustaría información sobre los servicios TL Mallorca.') }}" 
                   target="_blank"
                   class="tenali-ramakrishna border-2 border-amber-400 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full hover:from-amber-600/30 hover:to-amber-800/30 text-amber-300 px-10 md:px-16 py-4 md:py-5 text-xl md:text-2xl font-medium tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-900/50">
                    {{ $homepage['cta_section']['button_text'] ?? 'RESERVAR AHORA' }}
                </a>
                
                <a href="https://wa.me/34602560426?text={{ urlencode('Hola, me gustaría información sobre los servicios TL Mallorca.') }}" 
                   target="_blank"
                   class="tenali-ramakrishna border-2 border-amber-400/50 bg-transparent rounded-full hover:bg-amber-400/10 text-amber-300 px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105">
                    WhatsApp Directo
                </a>
            </div>

            <div class="flex justify-center mt-12 gap-3">
                <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                <div class="w-2 h-2 bg-amber-300 rounded-full"></div>
                <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contacto" class="py-12 sm:py-24 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-10">
            <p class="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                {{ $homepage['contact_section']['pre_title'] ?? 'CONTACTO' }}
            </p>
            <h2 class="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                {{ $homepage['contact_section']['title'] ?? 'RESERVA TU MASAJE TANTRICO MALLORCA' }}
            </h2>
            <div class="w-24 h-px bg-amber-400 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <h3 class="text-2xl font-light tracking-wider text-amber-400 mb-8">
                    {{ $homepage['contact_section']['info_title'] ?? 'INFORMACIÓN DE CONTACTO' }}
                </h3>
                <div class="space-y-6">
                    <div class="flex items-start group cursor-pointer">
                        <div class="w-12 h-12 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-amber-600/30 group-hover:to-amber-900/30 transition-colors">
                            <span class="text-amber-400">📍</span>
                        </div>
                        <a href="https://www.google.com/maps/place/Plaça+de+Santa+Magdalena,+3A,+Centre,+07012+Palma,+Illes+Balears" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="flex-1 min-w-0 hover:text-amber-300 transition-colors">
                            <h4 class="text-amber-400 text-xl mb-1 tenali-ramakrishna group-hover:text-amber-300">
                                {{ $homepage['contact_section']['location_title'] ?? 'Centro Masaje Tantrico' }}
                            </h4>
                            <p class="text-gray-300 break-words leading-relaxed text-sm sm:text-base group-hover:underline">
                                <span class="block sm:inline">Plaça de Santa Magdalena, 3A, Centre,</span>
                                <span class="block sm:inline"> 07012 Palma, Illes Balears</span>
                            </p>
                            <p class="text-sm text-gray-400 group-hover:text-gray-300">
                                {{ $homepage['contact_section']['location_note'] ?? 'Palma de Mallorca' }}
                            </p>
                        </a>
                    </div>
                    <div class="flex items-start">
                        <div class="w-12 h-12 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0">
                            <span class="text-amber-400">📱</span>
                        </div>
                        <div>
                            <h4 class="text-amber-400 text-xl mb-1 tenali-ramakrishna">
                                {{ $homepage['contact_section']['whatsapp_title'] ?? 'WhatsApp' }}
                            </h4>
                            <p class="text-gray-300">{{ $homepage['contact_section']['whatsapp_number'] ?? '+34 602 560 426' }}</p>
                            <p class="text-sm text-gray-400">{{ $homepage['contact_section']['whatsapp_note'] ?? 'Respuesta inmediata para reservas' }}</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="w-12 h-12 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0">
                            <span class="text-amber-400">⏰</span>
                        </div>
                        <div>
                            <h4 class="text-amber-400 text-xl mb-1 tenali-ramakrishna">
                                {{ $homepage['contact_section']['schedule_title'] ?? 'Horario' }}
                            </h4>
                            <p class="text-gray-300">{{ $homepage['contact_section']['schedule_days'] ?? 'Lunes a Domingo' }}</p>
                            <p class="text-sm text-gray-400">{{ $homepage['contact_section']['schedule_hours'] ?? '09:00 - 23:00' }}</p>
                        </div>
                    </div>
                </div>

                <div class="mt-12">
                    <h4 class="text-xl font-light tracking-wider text-amber-400 mb-4">
                        {{ $homepage['contact_section']['privacy_title'] ?? 'POLÍTICA DE PRIVACIDAD' }}
                    </h4>
                    <p class="text-gray-400 text-sm leading-relaxed">
                        {{ $homepage['contact_section']['privacy_text'] ?? '' }}
                    </p>
                </div>
            </div>

            <!-- WhatsApp CTA Section -->
            <div class="bg-gradient-to-br from-green-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-900/30 shadow-2xl">
                <div class="text-center">
                    <div class="mb-6">
                        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 mb-4 shadow-xl">
                            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </div>
                    </div>
                    
                    <h3 class="text-3xl md:text-4xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                        {{ $homepage['whatsapp_cta_section']['title'] ?? 'RESERVA POR WHATSAPP' }}
                    </h3>
                    
                    <div class="w-24 h-px bg-green-400 mx-auto mb-6"></div>
                    
                    <p class="text-lg md:text-xl font-light text-gray-300 mb-8 leading-relaxed tenali-ramakrishna max-w-md mx-auto">
                        {{ $homepage['whatsapp_cta_section']['subtitle'] ?? 'La forma más rápida y sencilla de reservar tu cita. Obtén una respuesta instantánea y asegura tu lugar con solo unos clics.' }}
                    </p>
                    
                    <div class="space-y-4">
                        <a href="https://wa.me/34602560426?text={{ urlencode(trans('contactPage.whatsapp_default_message', [], $locale)) }}" 
                           target="_blank"
                           class="inline-flex items-center justify-center w-full tenali-ramakrishna border-2 border-green-400 bg-gradient-to-r from-green-600/30 to-green-800/30 rounded-full hover:from-green-600/40 hover:to-green-800/40 text-white px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-900/50">
                            <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            {{ $homepage['whatsapp_cta_section']['button_text'] ?? 'CHATEAR POR WHATSAPP' }}
                        </a>
                        
                        <div class="flex items-center justify-center gap-2 text-sm text-gray-400">
                            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span>{{ $homepage['whatsapp_cta_section']['response_text'] ?? 'Respuesta en menos de 1 hora' }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

@push('scripts')
<style>
    /* ── Hero Slideshow ── */
    .hero-slide {
        opacity: 0;
        transition: opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1);
        /* will-change solo en slide activo (ahorra GPU en móvil) */
    }
    .hero-slide.is-active {
        opacity: 1;
        will-change: opacity, transform;
        /* Ken Burns activo solo en desktop (GPU limitada en móvil) */
        animation: hero-ken-burns 9s ease-in-out forwards;
    }
    .hero-slide.is-leaving {
        opacity: 0;
        transition: opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes hero-ken-burns {
        0%   { transform: scale(1.06) translate(0px,    0px); }
        100% { transform: scale(1.00) translate(-6px, -4px); }
    }
    /* En móvil: sin Ken Burns (ahorra CPU/GPU y evita jank) */
    @media (max-width: 1024px) {
        .hero-slide.is-active {
            animation: none;
            transform: none;
        }
    }
    /* Respeta preferencia de movimiento reducido (accesibilidad + rendimiento) */
    @media (prefers-reduced-motion: reduce) {
        .hero-slide,
        .hero-slide.is-active,
        .hero-slide.is-leaving {
            animation: none !important;
            transition-duration: 0.3s !important;
        }
    }
    /* Dots */
    .hero-dot.is-active { width: 20px; background-color: rgba(251,191,36,1);   }
    .hero-dot:not(.is-active) { width:  6px; background-color: rgba(251,191,36,0.30); }
</style>
<script>
(function () {
    'use strict';
    const slider  = document.getElementById('hero-slider');
    if (!slider) return;

    const slides  = slider.querySelectorAll('.hero-slide');
    const dots    = slider.querySelectorAll('.hero-dot');
    const total   = slides.length;
    let   current = 0;
    let   timer;

    function activateSlide(idx) {
        // Capturar referencias ANTES de modificar el DOM (evita forced reflow)
        var prevSlide = slides[current];
        var prevDot   = dots[current];
        current = idx;
        var nextSlide = slides[current];
        var nextDot   = dots[current];

        // Agrupar todos los cambios DOM en un único frame (evita múltiples reflows)
        requestAnimationFrame(function () {
            prevSlide.classList.remove('is-active');
            prevSlide.classList.add('is-leaving');
            prevDot.classList.remove('is-active');

            nextSlide.classList.add('is-active');
            nextDot.classList.add('is-active');

            // Limpiar 'is-leaving' una vez terminada la transición
            setTimeout(function () { prevSlide.classList.remove('is-leaving'); }, 1700);
        });
    }

    function nextSlide() {
        activateSlide((current + 1) % total);
    }

    function startTimer() {
        timer = setInterval(nextSlide, 5500);
    }

    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }

    // Slide 1 ya lleva is-active en el HTML (visible sin JS → LCP correcto).
    // Solo inicializamos el dot y arrancamos el timer.
    requestAnimationFrame(function () {
        dots[0].classList.add('is-active');
        startTimer();
    });

    // Clicks en dots
    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
            if (i === current) return;
            resetTimer();
            activateSlide(i);
        });
    });

    // Pausar al hover
    slider.addEventListener('mouseenter', function () { clearInterval(timer); });
    slider.addEventListener('mouseleave', function () { startTimer(); });
})();
</script>
@endpush

@endsection
