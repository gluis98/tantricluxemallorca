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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
            @foreach($services as $svc)
            <div class="relative flex flex-col rounded-xl overflow-hidden group
                        border border-amber-500/40 hover:border-amber-400/70
                        bg-[#0f0b07] hover:bg-[#130d08]
                        shadow-[0_0_18px_-4px_rgba(180,130,50,0.18)] hover:shadow-[0_0_32px_-4px_rgba(180,130,50,0.35)]
                        transition-all duration-500 hover:-translate-y-1">

                {{-- Línea dorada superior --}}
                <div class="h-px w-full bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"></div>

                {{-- Cabecera: icono + título + badge --}}
                <div class="px-8 pt-8 pb-6 text-center">
                    <div class="text-5xl mb-5 transition-transform duration-500 group-hover:scale-110 select-none leading-none">
                        {{ $svc['icon'] ?? '✨' }}
                    </div>
                    <h2 class="text-xl md:text-2xl font-light tracking-wide cormorant-garamond mb-3"
                        style="-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
                               background-image:linear-gradient(90deg,#c9963a 0%,#f5d485 50%,#c9963a 100%);">
                        {{ $svc['title'] ?? '' }}
                    </h2>
                    <span class="inline-block text-[10px] uppercase tracking-[0.22em] cormorant-garamond
                                 text-amber-400/60 border border-amber-400/15 rounded-full px-4 py-1 bg-amber-400/5">
                        {{ $svc['badge'] ?? '' }}
                    </span>
                </div>

                {{-- Separador --}}
                <div class="mx-8 h-px bg-gradient-to-r from-transparent via-amber-800/50 to-transparent"></div>

                {{-- Descripción --}}
                <div class="flex-grow px-8 py-6">
                    <p class="text-gray-400 text-[15px] leading-relaxed text-center cormorant-garamond font-light">
                        {{ $svc['description'] ?? '' }}
                    </p>
                </div>

                {{-- Separador --}}
                <div class="mx-8 h-px bg-gradient-to-r from-transparent via-amber-800/50 to-transparent"></div>

                {{-- Precios --}}
                <div class="px-8 pt-5 pb-5">
                    <p class="text-center text-[10px] uppercase tracking-[0.3em] text-amber-500/50 cormorant-garamond mb-4">
                        Duraci&oacute;n &amp; Precio
                    </p>
                    <div class="space-y-3">
                        @foreach($svc['prices'] ?? [] as $price)
                        <div class="flex items-center gap-3 px-4 py-3.5 rounded-lg
                                    bg-amber-950/30 border border-amber-500/40 hover:border-amber-400/70
                                    transition-colors duration-200">
                            <span class="w-1.5 h-1.5 rounded-full bg-amber-400/70 flex-shrink-0"></span>
                            <span class="flex-1 text-base text-amber-100/85 cormorant-garamond font-light tracking-wide">
                                {{ $price }}
                            </span>
                        </div>
                        @endforeach
                    </div>
                </div>

                {{-- Botón WhatsApp --}}
                <div class="px-8 pb-9">
                    <a href="https://wa.me/34602560426?text={{ urlencode($svc['wa_text'] ?? 'Hola, me gustaría información sobre ' . ($svc['title'] ?? 'los servicios')) }}"
                       target="_blank" rel="noopener noreferrer"
                       class="flex items-center justify-center gap-3 w-full
                              text-sm uppercase tracking-[0.2em] cormorant-garamond font-medium
                              text-[#0f0b07] rounded-lg px-6 py-4
                              bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500
                              hover:from-amber-400 hover:via-amber-300 hover:to-amber-400
                              shadow-md shadow-amber-900/40 hover:shadow-lg hover:shadow-amber-700/40
                              transition-all duration-300 hover:scale-[1.02]">
                        <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L.057 23.617a.75.75 0 00.921.921l5.77-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.88 0-3.645-.5-5.17-1.373l-.37-.217-3.425.876.893-3.318-.24-.385A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                        </svg>
                        {{ $servicesPage['reserve_button'] ?? 'RESERVAR' }}
                    </a>
                </div>

                {{-- Línea dorada inferior --}}
                <div class="h-px w-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
            </div>
            @endforeach
        </div>

    </div>
</div>
@endsection
