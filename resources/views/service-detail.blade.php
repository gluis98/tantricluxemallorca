@extends('layouts.app')

@php
    $servicesPage = trans('servicesPage', [], $locale);
    $services = $servicesPage['services'] ?? [];
    $service = collect($services)->firstWhere('slug', $slug);
    $bookingPath = trans('common.header.paths.booking', [], $locale);
    $servicesPath = trans('common.header.paths.services', [], $locale);

    $metaTitle = $service
        ? ($service['meta_title'] ?? (($service['title'] ?? '') . ' | Tantric Luxe Mallorca'))
        : trans('servicesPage.meta_title', [], $locale);
    $metaDescription = $service
        ? ($service['meta_description'] ?? ($service['description'] ?? $service['fullDescription'] ?? ''))
        : trans('servicesPage.meta_description', [], $locale);
    $metaKeywords = $service
        ? ($service['meta_keywords'] ?? (($service['title'] ?? '') . ', ' . trans('servicesPage.meta_keywords', [], $locale)))
        : trans('servicesPage.meta_keywords', [], $locale);
@endphp

@section('title', $metaTitle)
@section('description', $metaDescription)
@section('keywords', $metaKeywords)
@section('og_title', $metaTitle)
@section('og_description', $metaDescription)
@section('og_url', url()->current())
@section('og_image', $service ? asset(ltrim($service['image'] ?? 'images/LogoFull.png', '/')) : asset('images/LogoFull.png'))
@section('canonical', url()->current())

@section('hreflang')
    @include('components.seo.hreflang', ['locale' => $locale])
@endsection

@section('structured_data')
@php
    $serviceSchema = $service ? [
        '@context' => 'https://schema.org',
        '@type' => 'Service',
        'name' => $service['title'] ?? '',
        'description' => strip_tags($service['fullDescription'] ?? $service['description'] ?? ''),
        'provider' => [
            '@type' => 'Spa',
            'name' => 'Tantric Luxe Mallorca',
            'address' => [
                '@type' => 'PostalAddress',
                'streetAddress' => 'Carrer del Pare Bartomeu Pou, 44, Nord',
                'addressLocality' => 'Palma',
                'postalCode' => '07003',
                'addressRegion' => 'Illes Balears',
                'addressCountry' => 'ES',
            ],
        ],
        'areaServed' => [
            '@type' => 'City',
            'name' => 'Palma de Mallorca',
        ],
        'offers' => [
            '@type' => 'Offer',
            'price' => preg_replace('/[^0-9.]/', '', $service['price'] ?? ''),
            'priceCurrency' => 'EUR',
            'availability' => 'https://schema.org/InStock',
        ],
    ] : null;
@endphp
@include('components.seo.json-ld', ['schema' => $serviceSchema])
@endsection

@section('content')
@if($service)
<div class="relative z-10 px-4 md:px-8 py-8">
    <div class="max-w-7xl mx-auto">
        <div class="mb-8">
            <a href="/{{ $locale }}{{ $servicesPath }}"
               class="text-amber-400/80 hover:text-amber-300 text-sm tenali-ramakrishna tracking-wider uppercase transition-colors">
                ← {{ $servicesPage['title'] ?? 'Servicios' }}
            </a>
        </div>

        <div class="text-center py-12 md:py-16">
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                {{ $service['title'] ?? '' }}
            </h1>
            <div class="w-24 h-px bg-amber-400 mx-auto mb-6"></div>
            <p class="text-amber-300/90 tenali-ramakrishna text-lg">
                {{ $service['duration'] ?? '' }} · {{ $service['price'] ?? '' }}
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div>
                <img src="{{ asset(ltrim($service['image'] ?? 'images/LogoFull.png', '/')) }}"
                     alt="{{ $service['title'] ?? '' }} - Tantric Luxe Mallorca"
                     class="w-full rounded-2xl object-cover"
                     loading="eager" decoding="async">
            </div>
            <div class="flex flex-col justify-center">
                <p class="text-lg text-gray-300 mb-6 leading-relaxed tenali-ramakrishna">
                    {{ $service['fullDescription'] ?? $service['description'] ?? '' }}
                </p>

                @if(!empty($service['features']))
                <ul class="space-y-2 mb-8">
                    @foreach($service['features'] as $feature)
                    <li class="flex items-center gap-3 text-sm text-gray-400">
                        <span class="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></span>
                        {{ $feature }}
                    </li>
                    @endforeach
                </ul>
                @endif

                <a href="/{{ $locale }}{{ $bookingPath }}?servicio={{ urlencode($service['slug'] ?? '') }}"
                   class="inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-medium rounded-2xl transition-all text-sm tracking-wider w-full sm:w-auto">
                    {{ $servicesPage['modal_reserve_button'] ?? 'RESERVAR AHORA' }}
                </a>
            </div>
        </div>
    </div>
</div>
@else
<div class="relative z-10 px-4 md:px-8 py-8">
    <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl mb-4">{{ $servicesPage['title'] ?? 'Servicios' }}</h1>
        <a href="/{{ $locale }}{{ $servicesPath }}" class="text-amber-400 hover:text-amber-300">←</a>
    </div>
</div>
@endif
@endsection
