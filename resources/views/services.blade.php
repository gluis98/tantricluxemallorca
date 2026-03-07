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
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tantric Massage",
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
    }
}
</script>
@endsection

@section('content')
@php
    $servicesPage = trans('servicesPage', [], $locale);
    $services = $servicesPage['services'] ?? [];
@endphp

<div class="relative z-10 px-4 md:px-8 py-8">
    <div class="max-w-7xl mx-auto">
        <div class="text-center py-20">
            <h1 class="text-6xl md:text-8xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                {{ $servicesPage['title'] ?? 'SERVICIOS ERÓTICOS' }}
            </h1>
            <p class="text-2xl md:text-4xl text-gray-300 tenali-ramakrishna mb-8">
                {{ $servicesPage['subtitle'] ?? 'EXCLUSIVIDAD Y PRIVACIDAD' }}
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @foreach($services as $service)
            <div class="bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-8 border border-amber-900/30">
                <h3 class="text-2xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                    {{ $service['title'] ?? '' }}
                </h3>
                <p class="text-gray-300 mb-4">{{ $service['description'] ?? '' }}</p>
                <div class="flex justify-between items-center">
                    <span class="text-amber-400 text-xl">{{ $service['price'] ?? '' }}</span>
                    <span class="text-gray-400">{{ $service['duration'] ?? '' }}</span>
                </div>
                <a href="https://wa.me/34602560426?text={{ urlencode('Hola, me gustaría información sobre ' . ($service['title'] ?? 'los servicios')) }}" 
                   target="_blank"
                   class="mt-4 inline-block px-6 py-3 bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 rounded-full transition-colors">
                    {{ $servicesPage['reserve_button'] ?? 'RESERVAR' }}
                </a>
            </div>
            @endforeach
        </div>
    </div>
</div>
@endsection
