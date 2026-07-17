@extends('layouts.app')

@php
    $masseusesPage = trans('masseusesPage', [], $locale);
    $bookingPath = trans('common.header.paths.booking', [], $locale);
    $masseusesPath = trans('common.header.paths.masseuses', [], $locale);

    $metaTitle = $masseuse['meta_title']
        ?? (($masseuse['name'] ?? '') . ' | ' . ($masseusesPage['title'] ?? 'Tantric Luxe Mallorca'));
    $metaDescription = $masseuse['meta_description']
        ?? ($masseuse['description'] ?? $masseusesPage['meta_description'] ?? '');
    $metaKeywords = $masseuse['meta_keywords']
        ?? (($masseuse['name'] ?? '') . ', ' . ($masseusesPage['meta_keywords'] ?? ''));
@endphp

@section('title', $metaTitle)
@section('description', $metaDescription)
@section('keywords', $metaKeywords)
@section('og_title', $metaTitle)
@section('og_description', $metaDescription)
@section('og_url', url()->current())
@section('og_image', !empty($masseuse['image']) ? asset(ltrim($masseuse['image'], '/')) : asset('images/LogoFull.png'))
@section('canonical', url()->current())

@section('hreflang')
    @include('components.seo.hreflang', ['locale' => $locale])
@endsection

@section('structured_data')
@php
    $personSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'Person',
        'name' => $masseuse['name'] ?? '',
        'jobTitle' => $masseuse['specialty'] ?? '',
        'description' => strip_tags($masseuse['fullDescription'] ?? $masseuse['description'] ?? ''),
        'image' => !empty($masseuse['image']) ? url(ltrim($masseuse['image'], '/')) : null,
        'worksFor' => [
            '@type' => 'LocalBusiness',
            'name' => 'Tantric Luxe Mallorca',
            'url' => 'https://tantricluxemallorca.com',
            'address' => [
                '@type' => 'PostalAddress',
                'streetAddress' => 'Carrer del Pare Bartomeu Pou, 44, Nord',
                'addressLocality' => 'Palma',
                'postalCode' => '07003',
                'addressRegion' => 'Illes Balears',
                'addressCountry' => 'ES',
            ],
        ],
    ];
@endphp
@include('components.seo.json-ld', ['schema' => $personSchema])
@endsection

@section('content')
<div class="relative z-10 px-4 md:px-8 py-8">
    <div class="max-w-7xl mx-auto">
        <div class="mb-8">
            <a href="/{{ $locale }}{{ $masseusesPath }}"
               class="text-amber-400/80 hover:text-amber-300 text-sm tenali-ramakrishna tracking-wider uppercase transition-colors">
                ← {{ $masseusesPage['title'] ?? 'Masajistas' }}
            </a>
        </div>

        <div class="text-center py-10 md:py-16">
            <p class="text-sm tracking-[0.35em] text-amber-400/70 tenali-ramakrishna uppercase mb-4">
                {{ $masseusesPage['pre_title'] ?? '' }}
            </p>
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] mb-4 gradiente-dorado cormorant-garamond">
                {{ strtoupper($masseuse['name'] ?? '') }}
            </h1>
            <div class="w-24 h-px bg-amber-400 mx-auto mb-6"></div>
            <p class="text-xl md:text-2xl text-amber-300 tenali-ramakrishna">
                {{ $masseuse['specialty'] ?? '' }}
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-12">
            <div>
                @if(!empty($masseuse['images']))
                <div class="grid grid-cols-2 gap-3">
                    @foreach(array_slice($masseuse['images'], 0, 4) as $index => $image)
                    <div class="relative overflow-hidden rounded-2xl border border-amber-900/40 {{ $index === 0 ? 'col-span-2' : '' }}"
                         style="{{ $index === 0 ? 'aspect-ratio: 4/5;' : 'aspect-ratio: 3/4;' }}">
                        <img src="{{ \App\Support\OptimizedImage::url(ltrim($image, '/'), $index === 0 ? 900 : 480, 82) }}"
                             alt="{{ $masseuse['name'] ?? '' }} - {{ $masseuse['specialty'] ?? 'Masajista tantrica Palma' }}"
                             class="w-full h-full object-cover"
                             loading="{{ $index === 0 ? 'eager' : 'lazy' }}"
                             decoding="async">
                    </div>
                    @endforeach
                </div>
                @elseif(!empty($masseuse['image']))
                <img src="{{ \App\Support\OptimizedImage::url(ltrim($masseuse['image'], '/'), 900, 82) }}"
                     alt="{{ $masseuse['name'] ?? '' }}"
                     class="w-full rounded-2xl object-cover"
                     style="aspect-ratio: 3/4;"
                     loading="eager" decoding="async">
                @endif
            </div>

            <div class="flex flex-col justify-center">
                <div class="flex items-center gap-2 mb-6">
                    @for($i = 0; $i < ($masseuse['rating'] ?? 5); $i++)
                    <span class="text-amber-400 text-xl">★</span>
                    @endfor
                    <span class="text-gray-400 tenali-ramakrishna ml-2">
                        ({{ $masseuse['reviews'] ?? 0 }} {{ $masseusesPage['reviews_text'] ?? 'opiniones' }})
                    </span>
                </div>

                <p class="text-gray-300 text-lg leading-relaxed tenali-ramakrishna mb-8">
                    {{ $masseuse['fullDescription'] ?? $masseuse['description'] ?? '' }}
                </p>

                @if(!empty($masseuse['skills']))
                <div class="mb-10">
                    <h2 class="text-xl font-light tracking-wider text-amber-400 mb-4 cormorant-garamond">
                        {{ $masseusesPage['specialties_title'] ?? 'Especialidades' }}
                    </h2>
                    <div class="flex flex-wrap gap-3">
                        @foreach($masseuse['skills'] as $skill)
                        <span class="px-4 py-2 bg-amber-900/30 border border-amber-600/40 rounded-full text-amber-300 text-sm tenali-ramakrishna">
                            {{ $skill }}
                        </span>
                        @endforeach
                    </div>
                </div>
                @endif

                <div class="flex flex-col sm:flex-row gap-3">
                    <a href="/{{ $locale }}{{ $bookingPath }}?masajista={{ urlencode($masseuse['slug'] ?? $masseuse['name'] ?? '') }}"
                       class="inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-medium rounded-2xl transition-all text-sm tracking-wider">
                        {{ $masseusesPage['reserve_button_text'] ?? 'RESERVAR CON' }} {{ strtoupper($masseuse['name'] ?? '') }}
                    </a>
                    <a href="https://wa.me/34602560426?text={{ urlencode(trans('contactPage.whatsapp_default_message', [], $locale) . ' - ' . ($masseuse['name'] ?? '')) }}"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="inline-flex justify-center items-center px-8 py-4 border border-green-400/60 text-green-300 hover:bg-green-500/10 rounded-2xl transition-all text-sm tracking-wider tenali-ramakrishna">
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
