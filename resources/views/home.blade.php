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
    
    $erikaImages = [
        '/images/masseurs/Erika/IMG_0843.jpeg',
        '/images/masseurs/Erika/IMG_0844.jpeg',
        '/images/masseurs/Erika/IMG_0865.jpeg',
        '/images/masseurs/Erika/IMG_0866.jpeg',
        '/images/masseurs/Erika/IMG_0872.jpeg',
        '/images/masseurs/Erika/IMG_0878.jpeg',
        '/images/masseurs/Erika/IMG_0880.jpeg'
    ];
    
    $features = $homepage['features_section']['features'] ?? [];
    $steps = $homepage['process_section']['steps'] ?? [];
@endphp

<main class="relative z-10 px-0 md:px-8 py-8">
    <!-- Hero Section -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto text-center">
            <p class="text-sm md:text-md mb-8 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                {{ $homepage['subtitle'] ?? 'EROTIC MASSAGE' }}
            </p>
            <h1 class="text-4xl md:text-6xl lg:text-8xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                {{ $homepage['title'] ?? 'TANTRIC LUXE' }}
            </h1>
            <p class="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">
                {{ $homepage['main_heading'] ?? 'MASAJE TANTRICO PALMA' }}
            </p>
            <p class="text-xl md:text-2xl font-light tracking-widest mb-8 text-gray-300 tenali-ramakrishna">
                {{ $homepage['secondary_heading'] ?? 'EXPERIENCIA EXCLUSIVA DE MASAJE TANTRICO EN MALLORCA' }}
            </p>
            <div class="w-24 h-px bg-amber-400 mx-auto mb-8"></div>

            <!-- Service options -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-8xl mx-auto">
                <!-- Left service -->
                <div class="hidden lg:block space-y-6 col-span-1">
                    <div class="w-20 h-20 rounded-full w-full m-0">
                        <img src="{{ asset('images/MantraButton.png') }}" 
                             alt="Botón masaje tantrico exclusivo Mallorca"
                             class="object-contain w-full h-full">
                    </div>
                    <div class="text-center flex flex-col items-center">
                        <h3 class="text-xl md:text-2xl font-light tracking-wider mb-4">
                            {!! $homepage['hero_section']['card1_title'] ?? 'MASAJE TANTRICO<br />EXCLUSIVO' !!}
                        </h3>
                        <p class="text-sm text-gray-400 mb-6 leading-relaxed w-[250px]">
                            {{ $homepage['hero_section']['card1_text'] ?? 'Experimenta nuestro masaje tantrico Palma premium - Relajación y conexión espiritual absoluta' }}
                        </p>
                        <div class="flex flex-col w-[200px] justify-self-center">
                            <a href="https://wa.me/34602560426?text={{ urlencode(trans('contactPage.whatsapp_default_message', [], $locale)) }}" 
                               target="_blank"
                               class="tenali-ramakrishna border-1 cursor-pointer border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 pb-1 pt-2 text-sm font-medium tracking-wider transition-colors text-center">
                                {{ $homepage['reserve_button_text'] ?? 'RESERVAR AHORA' }}
                            </a>

                            <!-- Decorative dots -->
                            <div class="flex justify-center mt-6 gap-3 space-x-2">
                                <div class="w-2 h-2 bg-amber-100 rounded-full"></div>
                                <div class="w-2 h-2 bg-amber-200 rounded-full"></div>
                                <div class="w-2 h-2 bg-amber-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Center services -->
                <div class="flex justify-evenly lg:justify-between self-center gap-6 space-y-8 col-span-3 lg:col-span-1">
                    <!-- icon 1 -->
                    <div class="text-center flex flex-col gap-6 items-center">
                        <!-- Primer botón luxury -->
                        <div class="w-20 h-20 mx-auto rounded-full flex items-center justify-center relative">
                            <span class="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                            <img src="{{ asset('images/BotomLuxDark.webp') }}" 
                                 alt="Servicios especiales masaje tantrico Mallorca"
                                 class="object-contain w-full h-full relative z-10">
                            <span class="absolute inset-0 flex items-center justify-center text-2xl text-yellow-400 pointer-events-none z-20">
                                Ω
                            </span>
                        </div>
                        <div class="text-center">
                            <h3 class="text-2xl font-light tracking-wider tenali-ramakrishna">{{ $homepage['hero_section']['icon1_title'] ?? 'TANTRIC' }}</h3>
                            <p class="text-lg text-amber-400/80 uppercase tenali-ramakrishna">{{ $homepage['hero_section']['icon1_text'] ?? 'especial' }}</p>
                        </div>
                    </div>

                    <!-- icon 2 -->
                    <div class="text-center flex flex-col gap-6 items-center">
                        <!-- Segundo botón luxury -->
                        <div class="w-20 h-20 mx-auto rounded-full flex items-center justify-center relative">
                            <span class="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                            <img src="{{ asset('images/BotomLuxDark.webp') }}" 
                                 alt="Masaje tantrico deluxe Palma Mallorca"
                                 class="object-contain w-full h-full relative z-10">
                            <span class="absolute inset-0 flex items-center justify-center text-2xl text-yellow-400 pointer-events-none z-20">
                                Σ
                            </span>
                        </div>
                        <div class="text-center">
                            <h3 class="text-2xl font-light tracking-wider tenali-ramakrishna">{{ $homepage['hero_section']['icon2_title'] ?? 'DELUXE' }}</h3>
                            <p class="text-lg text-amber-400/80 uppercase tenali-ramakrishna">{{ $homepage['hero_section']['icon2_text'] ?? 'masajes' }}</p>
                        </div>
                    </div>

                    <!-- icon 3 -->
                    <div class="text-center flex flex-col gap-6 items-center">
                        <!-- Tercer botón luxury -->
                        <div class="w-20 h-20 mx-auto rounded-full flex items-center justify-center relative">
                            <span class="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                            <img src="{{ asset('images/BotomLuxDark.webp') }}" 
                                 alt="Experiencia tantrica única Mallorca"
                                 class="object-contain w-full h-full relative z-10">
                            <span class="absolute inset-0 flex items-center justify-center text-2xl text-yellow-400 pointer-events-none z-20">
                                Φ
                            </span>
                        </div>
                        <div class="text-center">
                            <h3 class="text-2xl font-light tracking-wider tenali-ramakrishna">{{ $homepage['hero_section']['icon3_title'] ?? 'ÚNICO' }}</h3>
                            <p class="text-lg text-amber-400/80 uppercase tenali-ramakrishna">{{ $homepage['hero_section']['icon3_text'] ?? 'momentos' }}</p>
                        </div>
                    </div>
                </div>

                <!-- Right service -->
                <div class="hidden lg:block space-y-6 col-span-1">
                    <div class="w-20 h-20 rounded-full w-full m-0">
                        <img src="{{ asset('images/MantraButton.png') }}" 
                             alt="Masaje tantrico premium Palma de Mallorca"
                             class="object-contain w-full h-full">
                    </div>
                    <div class="text-center flex flex-col items-center">
                        <h3 class="text-xl md:text-2xl font-light tracking-wider mb-4">
                            {!! $homepage['hero_section']['card2_title'] ?? 'MASAJE EROTICO<br />PREMIUM' !!}
                        </h3>
                        <p class="text-sm text-gray-400 mb-6 leading-relaxed w-[250px]">
                            {{ $homepage['hero_section']['card2_text'] ?? 'Descubre el verdadero masaje tantrico Mallorca - Conexión sagrada y relajación profunda' }}
                        </p>
                        <div class="flex flex-col w-[200px] justify-self-center">
                            <a href="https://wa.me/34602560426?text={{ urlencode(trans('contactPage.whatsapp_default_message', [], $locale)) }}" 
                               target="_blank"
                               class="tenali-ramakrishna border-1 cursor-pointer border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 pb-1 pt-2 text-sm font-medium tracking-wider transition-colors text-center">
                                {{ $homepage['reserve_button_text'] ?? 'RESERVAR AHORA' }}
                            </a>

                            <!-- Decorative dots -->
                            <div class="flex justify-center mt-6 gap-3 space-x-2">
                                <div class="w-2 h-2 bg-amber-100 rounded-full"></div>
                                <div class="w-2 h-2 bg-amber-200 rounded-full"></div>
                                <div class="w-2 h-2 bg-amber-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-16 px-4 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row gap-6 lg:gap-8">
                <div class="flex-1 relative group">
                    <div class="relative overflow-hidden rounded-xs border-1 border-yellow-200 bg-white">
                        <img src="{{ asset('images/espacio_exclusivo_tantrico.webp') }}" 
                             alt="Espacio Exclusivo Tantrico" 
                             class="w-full h-64 md:h-100 object-cover rounded-xs transition-transform duration-300 group-hover:scale-105">
                    </div>
                    <div class="mt-4 text-center">
                        <h3 class="text-lg font-light tracking-wider text-white tenali-ramakrishna">
                            {{ $homepage['gallery_section']['item1'] ?? 'ESPACIO EXCLUSIVO' }}
                        </h3>
                    </div>
                </div>
                <div class="flex-1 relative group">
                    <div class="relative overflow-hidden rounded-xs border-1 border-yellow-200 bg-white">
                        <img src="{{ asset('images/ambiente_relante_en_palma.webp') }}" 
                             alt="Ambiente Relajante En Palma" 
                             class="w-full h-64 md:h-100 object-cover rounded-xs transition-transform duration-300 group-hover:scale-105">
                    </div>
                    <div class="mt-4 text-center">
                        <h3 class="text-lg font-light tracking-wider text-white tenali-ramakrishna">
                            {{ $homepage['gallery_section']['item2'] ?? 'AMBIENTE RELAJANTE' }}
                        </h3>
                    </div>
                </div>
                <div class="flex-1 relative group">
                    <div class="relative overflow-hidden rounded-xs border-1 border-yellow-200 bg-white">
                        <img src="{{ asset('images/experiencias_eroticas_unicas.webp') }}" 
                             alt="Experiencias Eroticas Unicas" 
                             class="w-full h-64 md:h-100 object-cover rounded-xs transition-transform duration-300 group-hover:scale-105">
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

    <!-- Sección de Erika con Galería de Fotos -->
    <section class="py-16 px-4 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-900/30 shadow-2xl">
                <div class="text-center mb-12">
                    <div class="inline-block mb-4">
                        <span class="text-5xl md:text-6xl">✨</span>
                    </div>
                    <h2 class="text-4xl md:text-6xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                        {{ $homepage['masseuse_section']['title'] ?? 'Conoce a Nuestra Especialista' }}
                    </h2>
                    <div class="w-24 h-px bg-amber-400 mx-auto mb-6"></div>
                    <p class="text-lg md:text-xl font-light text-gray-300 leading-relaxed max-w-3xl mx-auto tenali-ramakrishna">
                        {{ $homepage['masseuse_section']['description'] ?? '' }}
                    </p>
                </div>

                <!-- Grid de fotos de Erika -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    @foreach(array_slice($erikaImages, 0, 4) as $index => $image)
                    <div class="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-amber-900/40 hover:border-amber-600/60 transition-all duration-300">
                        <div class="relative aspect-[3/4]">
                            <img src="{{ asset($image) }}" 
                                 alt="Erika - Masajista Profesional {{ $index + 1 }}" 
                                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span class="text-white text-sm font-medium tenali-ramakrishna">
                                    {{ $homepage['view_more_text'] ?? 'Ver más' }}
                                </span>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>

                <!-- Nombre ERIKA prominente -->
                <div class="text-center mb-8">
                    <h3 class="text-5xl md:text-7xl font-light tracking-[0.3em] gradiente-dorado cormorant-garamond mb-4">
                        ERIKA
                    </h3>
                    <div class="flex items-center justify-center gap-4 mb-4">
                        <div class="h-px w-16 bg-amber-400"></div>
                        <p class="text-xl md:text-2xl font-light text-amber-300 tenali-ramakrishna">
                            {{ $homepage['masseuse_section']['specialty_text'] ?? 'Especialista en Masaje Tantrico Sensual Deluxe' }}
                        </p>
                        <div class="h-px w-16 bg-amber-400"></div>
                    </div>
                    
                    <!-- Badge de estrellas y reviews -->
                    <div class="flex items-center justify-center gap-2 mb-6">
                        <div class="flex items-center">
                            @for($i = 0; $i < 5; $i++)
                            <span class="text-amber-400 text-2xl">★</span>
                            @endfor
                        </div>
                        <span class="text-gray-400 text-lg tenali-ramakrishna">
                            (89 {{ $homepage['masseuse_section']['reviews_text'] ?? 'opiniones' }})
                        </span>
                    </div>

                    <!-- Badge disponible -->
                    <div class="inline-flex items-center gap-2 bg-green-900/30 border border-green-600/40 rounded-full px-6 py-2 mb-8">
                        <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span class="text-green-400 font-medium tenali-ramakrishna">
                            {{ $homepage['masseuse_section']['available_text'] ?? 'Disponible Ahora' }}
                        </span>
                    </div>
                </div>

                <!-- Botón de más información -->
                <div class="text-center">
                    <a href="/{{ $locale }}/masajistas" 
                       class="inline-block tenali-ramakrishna border-2 border-amber-400 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full hover:from-amber-600/30 hover:to-amber-800/30 text-amber-300 px-10 md:px-16 py-4 md:py-5 text-xl md:text-2xl font-medium tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-900/50">
                        {{ $homepage['masseuse_section']['button_text'] ?? 'MÁS INFORMACIÓN SOBRE ERIKA' }}
                    </a>
                </div>
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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            @foreach(array_slice($services, 0, 2) as $service)
            <div class="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-amber-900/20 hover:border-amber-600/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/20 flex flex-col h-full">
                <div class="flex-grow">
                    <img src="{{ asset($service['image'] ?? '/images/default.webp') }}" 
                         alt="{{ $service['title'] ?? '' }}" 
                         class="w-full h-40 object-cover rounded-md mb-4">
                    <h3 class="text-2xl font-light tracking-wider text-amber-400 mb-4">
                        {{ $service['title'] ?? '' }}
                    </h3>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                        {{ $service['description'] ?? '' }}
                    </p>
                    <ul class="space-y-2 mb-6">
                        @foreach(array_slice($service['features'] ?? [], 0, 3) as $feature)
                        <li class="flex items-center text-sm text-gray-400">
                            <span class="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                            {{ $feature }}
                        </li>
                        @endforeach
                    </ul>
                </div>
                <a href="https://wa.me/34602560426?text={{ urlencode('Hola, me gustaría información sobre ' . ($service['title'] ?? 'los servicios')) }}" 
                   target="_blank"
                   class="w-full text-center tenali-ramakrishna border-1 border-yellow-400/50 bg-gradient-to-r from-amber-900/30 to-amber-800/30 rounded-3xl hover:from-yellow-600/40 hover:to-amber-600/40 text-white px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300 mt-4">
                    {{ $homepage['services_section']['reserve_button'] ?? 'RESERVAR AHORA' }}
                </a>
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
                <img src="{{ asset('images/especialistas_en_masajese_eroticos.webp') }}" 
                     alt="Centro de masaje tantrico exclusivo en Palma Mallorca" 
                     class="rounded-lg shadow-2xl object-cover w-full h-auto">
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
<script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
@endpush

@endsection
