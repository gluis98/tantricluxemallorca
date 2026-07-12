@extends('layouts.app')

@section('title', trans('servicesPage.meta_title', [], $locale))
@section('description', trans('servicesPage.meta_description', [], $locale))
@section('keywords', trans('servicesPage.meta_keywords', [], $locale))
@section('og_title', trans('servicesPage.meta_title', [], $locale))
@section('og_description', trans('servicesPage.meta_description', [], $locale))
@section('og_url', url()->current())
@section('canonical', url()->current())

@section('hreflang')
    @include('components.seo.hreflang', ['locale' => $locale])
@endsection

@section('structured_data')
@php
    $servicesForSchema = array_values(trans('servicesPage.services', [], $locale) ?? []);
    $itemListElement = [];
    foreach ($servicesForSchema as $index => $svc) {
        $itemListElement[] = [
            '@type' => 'ListItem',
            'position' => $index + 1,
            'item' => [
                '@type' => 'Service',
                'name' => $svc['title'] ?? '',
                'description' => $svc['description'] ?? '',
                'offers' => [
                    '@type' => 'Offer',
                    'price' => preg_replace('/[^0-9.]/', '', $svc['price'] ?? '0'),
                    'priceCurrency' => 'EUR',
                    'availability' => 'https://schema.org/InStock',
                ],
                'provider' => [
                    '@type' => 'LocalBusiness',
                    'name' => 'Tantric Luxe Mallorca',
                ],
            ],
        ];
    }
    $servicesSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'ItemList',
        'name' => trans('servicesPage.title', [], $locale),
        'description' => trans('servicesPage.meta_description', [], $locale),
        'itemListElement' => $itemListElement,
    ];
@endphp
@include('components.seo.json-ld', ['schema' => $servicesSchema])
@endsection

@section('content')
@php
    $servicesPage = trans('servicesPage', [], $locale);
    $services     = $servicesPage['services'] ?? [];
    $bookingPath  = trans('common.header.paths.booking', [], $locale);
    $bookingLang  = trans('bookingPage', [], $locale);
@endphp

<div class="relative z-10 px-4 md:px-8 py-12">
    <div class="max-w-7xl mx-auto">

        {{-- Cabecera ──────────────────────────────────────────────────────── --}}
        <div class="text-center py-16 md:py-20">
            <p class="text-sm md:text-base tracking-[0.35em] text-amber-400/70 tenali-ramakrishna uppercase mb-4">
                {{ $servicesPage['pre_title'] ?? 'OFRECEMOS EXPERIENCIAS' }}
            </p>
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                {{ $servicesPage['title'] ?? 'SERVICIOS' }}
            </h1>
            <div class="w-24 h-px bg-amber-400 mx-auto mb-6"></div>
            <p class="text-lg md:text-xl text-gray-300 tenali-ramakrishna max-w-2xl mx-auto leading-relaxed">
                {{ $servicesPage['description'] ?? '' }}
            </p>
            <div class="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8">
                <a href="/{{ $locale }}{{ $bookingPath }}"
                   class="tenali-ramakrishna border border-amber-400/60 rounded-full hover:bg-amber-400/10 text-amber-300 px-8 py-3 text-sm font-medium tracking-wider transition-all uppercase">
                    {{ $bookingLang['home_banner_button'] ?? 'RESERVAR ONLINE' }}
                </a>
                <a href="https://wa.me/34602560426?text={{ urlencode(trans('contactPage.whatsapp_default_message', [], $locale)) }}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="tenali-ramakrishna border border-green-400/60 rounded-full hover:bg-green-500/10 text-green-300 px-8 py-3 text-sm font-medium tracking-wider transition-all uppercase">
                    WHATSAPP DIRECTO
                </a>
            </div>
        </div>

        {{-- Grid de servicios ────────────────────────────────────────────── --}}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            @foreach($services as $svc)
            <div class="group relative bg-gradient-to-br from-amber-900/20 to-black/60
                        backdrop-blur-sm rounded-3xl p-8
                        border border-amber-900/30 hover:border-amber-600/50
                        transition-all duration-500 hover:-translate-y-2
                        hover:shadow-2xl hover:shadow-amber-900/30
                        flex flex-col">

                {{-- Cabecera: duración + precio --}}
                <div class="flex items-center justify-between mb-6">
                    <span class="text-xs tracking-[0.2em] text-amber-400/60 tenali-ramakrishna uppercase">
                        {{ $svc['duration'] ?? '' }}
                    </span>
                    <span class="text-xl font-light cormorant-garamond text-amber-300">
                        {{ $svc['price'] ?? '' }}
                    </span>
                </div>

                {{-- Título --}}
                <h2 class="text-2xl font-light tracking-wider mb-4 cormorant-garamond gradiente-dorado">
                    {{ $svc['title'] ?? '' }}
                </h2>

                {{-- Separador --}}
                <div class="w-16 h-px bg-amber-400/40 mb-5"></div>

                {{-- Descripción --}}
                <p class="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {{ $svc['description'] ?? '' }}
                </p>

                {{-- Features --}}
                @if(!empty($svc['features']))
                <ul class="space-y-2 mb-8">
                    @foreach($svc['features'] as $feature)
                    <li class="flex items-center gap-3 text-sm text-gray-400">
                        <span class="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></span>
                        {{ $feature }}
                    </li>
                    @endforeach
                </ul>
                @endif

                {{-- Botón reserva online (servicio preseleccionado) --}}
                <a href="/{{ $locale }}{{ $bookingPath }}?servicio={{ urlencode($svc['slug'] ?? '') }}"
                   class="group/btn flex items-center justify-center gap-3 w-full
                          bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400
                          text-black font-medium py-3 px-6 rounded-2xl
                          transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25
                          text-sm tracking-wider">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {{ $servicesPage['reserve_button'] ?? 'RESERVAR' }}
                </a>
            </div>
            @endforeach
        </div>

    </div>
</div>
@endsection
