@extends('layouts.app')

@php
    $servicesPage = trans('servicesPage', [], $locale);
    $services = $servicesPage['services'] ?? [];
    $service = collect($services)->firstWhere('slug', $slug);
    
    $metaTitle = $service ? ($service['title'] ?? '') . ' | Tantric Luxe Mallorca' : trans('servicesPage.meta_title', [], $locale);
    $metaDescription = $service ? ($service['description'] ?? $service['fullDescription'] ?? '') : trans('servicesPage.meta_description', [], $locale);
    $metaKeywords = $service ? ($service['title'] ?? '') . ', masaje tantrico, palma, mallorca' : trans('servicesPage.meta_keywords', [], $locale);
@endphp

@section('title', $metaTitle)
@section('description', $metaDescription)
@section('keywords', $metaKeywords)
@section('og_title', $metaTitle)
@section('og_description', $metaDescription)
@section('og_url', url()->current())
@section('og_image', $service ? asset($service['image'] ?? 'images/LogoFull.png') : asset('images/LogoFull.png'))
@section('canonical', url()->current())

@section('hreflang')
    @include('components.seo.hreflang', ['locale' => $locale])
@endsection

@section('structured_data')
@if($service)
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "{{ $service['title'] ?? '' }}",
    "description": "{{ strip_tags($service['description'] ?? $service['fullDescription'] ?? '') }}",
    "provider": {
        "@type": "Spa",
        "name": "Tantric Luxe Mallorca",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Plaça de Santa Magdalena, 3A, Centre",
            "addressLocality": "Palma",
            "postalCode": "07012",
            "addressRegion": "Illes Balears",
            "addressCountry": "ES"
        }
    },
    "areaServed": {
        "@type": "City",
        "name": "Palma de Mallorca"
    },
    "offers": {
        "@type": "Offer",
        "price": "{{ preg_replace('/[^0-9.]/', '', $service['price'] ?? '') }}",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
    }
}
</script>
@endif
@endsection

@section('content')
@php
    // Variables ya definidas arriba
@endphp

@if($service)
<div class="relative z-10 px-4 md:px-8 py-8">
    <div class="max-w-7xl mx-auto">
        <div class="text-center py-20">
            <h1 class="text-6xl md:text-8xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                {{ $service['title'] ?? '' }}
            </h1>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <img src="{{ asset($service['image'] ?? '') }}" alt="{{ $service['title'] ?? '' }}" class="w-full rounded-2xl">
            </div>
            <div>
                <p class="text-lg text-gray-300 mb-4">{{ $service['fullDescription'] ?? $service['description'] ?? '' }}</p>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-amber-400 text-2xl">{{ $service['price'] ?? '' }}</span>
                    <span class="text-gray-400">{{ $service['duration'] ?? '' }}</span>
                </div>
                <a href="https://wa.me/34602560426?text={{ urlencode('Hola, me gustaría información sobre ' . ($service['title'] ?? 'este servicio')) }}" 
                   target="_blank"
                   class="inline-block px-6 py-3 bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 rounded-full transition-colors">
                    {{ $servicesPage['modal_reserve_button'] ?? 'RESERVAR AHORA' }}
                </a>
            </div>
        </div>
    </div>
</div>
@else
<div class="relative z-10 px-4 md:px-8 py-8">
    <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl mb-4">Servicio no encontrado</h1>
        <a href="/{{ $locale }}/servicios" class="text-amber-400 hover:text-amber-300">Volver a servicios</a>
    </div>
</div>
@endif
@endsection
