@extends('layouts.app')

@php
    // Definir las variables al inicio para que estén disponibles en todas las secciones
    $masseusesPage = trans('masseusesPage', [], $locale);
    $masseuses = $masseusesPage['masseuses'] ?? [];
@endphp

@section('title', trans('masseusesPage.meta_title', [], $locale))
@section('description', trans('masseusesPage.meta_description', [], $locale))
@section('keywords', trans('masseusesPage.meta_keywords', [], $locale))
@section('og_title', trans('masseusesPage.meta_title', [], $locale))
@section('og_description', trans('masseusesPage.meta_description', [], $locale))
@section('og_url', url()->current())
@section('canonical', url()->current())

@section('hreflang')
    @include('components.seo.hreflang', ['locale' => $locale])
@endsection

@section('structured_data')
@if(count($masseuses) > 0)
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
        @foreach($masseuses as $index => $masseuse)
        {
            "@type": "ListItem",
            "position": {{ $index + 1 }},
            "item": {
                "@type": "Person",
                "name": "{{ $masseuse['name'] ?? '' }}",
                "jobTitle": "{{ $masseuse['specialty'] ?? '' }}",
                "worksFor": {
                    "@type": "LocalBusiness",
                    "name": "Tantric Luxe Mallorca",
                    "url": "https://tantricluxemallorca.com"
                }
            }
        }{{ $index < count($masseuses) - 1 ? ',' : '' }}
        @endforeach
    ]
}
</script>
@endif
@endsection

@section('content')

<div class="relative z-10 px-4 md:px-8 py-8">
    <div class="max-w-7xl mx-auto">
        <div class="text-center py-20">
            <h1 class="text-6xl md:text-8xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                {{ $masseusesPage['title'] ?? 'MASAJISTAS TANTRICAS' }}
            </h1>
            <p class="text-2xl md:text-4xl text-gray-300 tenali-ramakrishna mb-8">
                {{ $masseusesPage['subtitle'] ?? 'BELLEZA, ARTE Y ENERGÍA EN CADA SESIÓN' }}
            </p>
        </div>
        
        <div class="grid grid-cols-1 gap-12">
            @foreach($masseuses as $masseuse)
            <div class="bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-900/30 shadow-2xl">
                <div class="text-center mb-12">
                    <div class="inline-block mb-4">
                        <span class="text-5xl md:text-6xl">✨</span>
                    </div>
                    <h2 class="text-4xl md:text-6xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                        {{ $masseusesPage['pre_title'] ?? 'NUESTRAS ESPECIALISTAS' }}
                    </h2>
                    <div class="w-24 h-px bg-amber-400 mx-auto mb-6"></div>
                    <p class="text-lg md:text-xl font-light text-gray-300 leading-relaxed max-w-3xl mx-auto tenali-ramakrishna">
                        {{ $masseusesPage['description'] ?? '' }}
                    </p>
                </div>

                <!-- Grid de fotos -->
                @if(isset($masseuse['images']) && count($masseuse['images']) > 0)
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    @foreach(array_slice($masseuse['images'], 0, 4) as $index => $image)
                    <div class="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-amber-900/40 hover:border-amber-600/60 transition-all duration-300">
                        <div class="relative aspect-[3/4]">
                            <img src="{{ asset($image) }}" 
                                 alt="{{ $masseuse['name'] ?? '' }} - {{ $index + 1 }}" 
                                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span class="text-white text-sm font-medium tenali-ramakrishna">
                                    {{ $masseusesPage['view_more_text'] ?? 'Ver más' }}
                                </span>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                @else
                <div class="mb-8">
                    <img src="{{ asset($masseuse['image'] ?? '') }}" 
                         alt="{{ $masseuse['name'] ?? '' }}" 
                         class="w-full max-w-md mx-auto h-auto rounded-2xl shadow-xl">
                </div>
                @endif

                <!-- Nombre prominente -->
                <div class="text-center mb-8">
                    <h3 class="text-5xl md:text-7xl font-light tracking-[0.3em] gradiente-dorado cormorant-garamond mb-4">
                        {{ strtoupper($masseuse['name'] ?? '') }}
                    </h3>
                    <div class="flex items-center justify-center gap-4 mb-4">
                        <div class="h-px w-16 bg-amber-400"></div>
                        <p class="text-xl md:text-2xl font-light text-amber-300 tenali-ramakrishna">
                            {{ $masseuse['specialty'] ?? '' }}
                        </p>
                        <div class="h-px w-16 bg-amber-400"></div>
                    </div>
                    
                    <!-- Badge de estrellas y reviews -->
                    <div class="flex items-center justify-center gap-2 mb-6">
                        <div class="flex items-center">
                            @for($i = 0; $i < ($masseuse['rating'] ?? 5); $i++)
                            <span class="text-amber-400 text-2xl">★</span>
                            @endfor
                        </div>
                        <span class="text-gray-400 text-lg tenali-ramakrishna">
                            ({{ $masseuse['reviews'] ?? 0 }} {{ $masseusesPage['reviews_text'] ?? 'opiniones' }})
                        </span>
                    </div>

                    <!-- Badge disponible -->
                    <div class="inline-flex items-center gap-2 bg-green-900/30 border border-green-600/40 rounded-full px-6 py-2 mb-8">
                        <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span class="text-green-400 font-medium tenali-ramakrishna">
                            {{ $masseusesPage['available_now_text'] ?? 'Disponible Ahora' }}
                        </span>
                    </div>
                </div>

                <!-- Descripción -->
                @if(isset($masseuse['description']) && $masseuse['description'])
                <div class="mb-8">
                    <p class="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto tenali-ramakrishna">
                        {{ $masseuse['description'] }}
                    </p>
                </div>
                @endif

                <!-- Skills -->
                @if(isset($masseuse['skills']) && count($masseuse['skills']) > 0)
                <div class="mb-8">
                    <h4 class="text-xl font-light tracking-wider text-amber-400 mb-4 text-center cormorant-garamond">
                        {{ $masseusesPage['specialties_title'] ?? 'Especialidades' }}
                    </h4>
                    <div class="flex flex-wrap justify-center gap-3">
                        @foreach($masseuse['skills'] as $skill)
                        <span class="px-4 py-2 bg-amber-900/30 border border-amber-600/40 rounded-full text-amber-300 text-sm tenali-ramakrishna">
                            {{ $skill }}
                        </span>
                        @endforeach
                    </div>
                </div>
                @endif

                <!-- Botón de reserva -->
                <div class="text-center">
                    <a href="https://wa.me/34602560426?text={{ urlencode('Hola, me gustaría reservar una cita con ' . ($masseuse['name'] ?? 'la masajista')) }}" 
                       target="_blank"
                       class="inline-block tenali-ramakrishna border-2 border-amber-400 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full hover:from-amber-600/30 hover:to-amber-800/30 text-amber-300 px-10 md:px-16 py-4 md:py-5 text-xl md:text-2xl font-medium tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-900/50">
                        {{ $masseusesPage['reserve_button_text'] ?? 'RESERVAR CON' }} {{ strtoupper($masseuse['name'] ?? '') }}
                    </a>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
@endsection
