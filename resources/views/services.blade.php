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
@php $servicesForSchema = trans('servicesPage.services', [], $locale) ?? []; @endphp
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "{{ trans('servicesPage.title', [], $locale) }}",
    "description": "{{ trans('servicesPage.meta_description', [], $locale) }}",
    "itemListElement": [
        @foreach($servicesForSchema as $index => $svc)
        {
            "@type": "ListItem",
            "position": {{ $index + 1 }},
            "item": {
                "@type": "Service",
                "name": "{{ $svc['title'] ?? '' }}",
                "description": "{{ $svc['description'] ?? '' }}",
                "offers": {
                    "@type": "Offer",
                    "price": "{{ preg_replace('/[^0-9.]/', '', $svc['price'] ?? '0') }}",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock"
                },
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Tantric Luxe Mallorca"
                }
            }
        }{{ $index < count($servicesForSchema) - 1 ? ',' : '' }}
        @endforeach
    ]
}
</script>
@endsection

@section('content')
@php
    $servicesPage = trans('servicesPage', [], $locale);
    $services     = $servicesPage['services'] ?? [];
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

                {{-- Botón --}}
                <a href="https://wa.me/34602560426?text={{ urlencode('Hola, me gustaría información sobre ' . ($svc['title'] ?? 'los servicios')) }}"
                   target="_blank" rel="noopener noreferrer"
                   class="group/btn flex items-center justify-center gap-3 w-full
                          bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400
                          text-black font-medium py-3 px-6 rounded-2xl
                          transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25
                          text-sm tracking-wider">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L.057 23.617a.75.75 0 00.921.921l5.77-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.88 0-3.645-.5-5.17-1.373l-.37-.217-3.425.876.893-3.318-.24-.385A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    {{ $servicesPage['reserve_button'] ?? 'RESERVAR' }}
                </a>
            </div>
            @endforeach
        </div>

    </div>
</div>
@endsection
