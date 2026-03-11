@extends('layouts.app')

@section('title', trans('aboutPage.meta_title', [], $locale))
@section('description', trans('aboutPage.meta_description', [], $locale))
@section('keywords', trans('aboutPage.meta_keywords', [], $locale))
@section('og_title', trans('aboutPage.meta_title', [], $locale))
@section('og_description', trans('aboutPage.meta_description', [], $locale))
@section('og_url', url()->current())
@section('canonical', url()->current())

@section('hreflang')
    @include('components.seo.hreflang', ['locale' => $locale])
@endsection

@section('structured_data')
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Tantric Luxe Mallorca",
        "description": "{{ trans('aboutPage.meta_description', [], $locale) }}",
        "url": "https://tantricluxemallorca.com",
        "logo": "{{ asset('images/LogoFull.png') }}",
        "foundingDate": "2019",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Plaça de Santa Magdalena, 3A, Centre",
            "addressLocality": "Palma",
            "postalCode": "07012",
            "addressRegion": "Illes Balears",
            "addressCountry": "ES"
        },
        "telephone": "+34-602-560-426",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "89",
            "bestRating": "5",
            "worstRating": "1"
        }
    }
}
</script>
@endsection

@section('content')
@php
    $about = trans('aboutPage', [], $locale);
@endphp

<div class="relative z-10 px-4 md:px-8 py-8">
    <div class="max-w-7xl mx-auto">
        <div class="text-center py-20">
            <h1 class="text-6xl md:text-8xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                {{ $about['title'] ?? 'NUESTRA HISTORIA' }}
            </h1>
            <p class="text-2xl md:text-4xl text-gray-300 tenali-ramakrishna mb-8">
                {{ $about['subtitle'] ?? 'SPA TANTRICO DE LUJO' }}
            </p>
        </div>
        
        <div class="prose prose-invert max-w-none">
            <p class="text-lg text-gray-300 mb-8">
                {{ $about['story_p1'] ?? '' }}
            </p>
            <p class="text-lg text-gray-300 mb-8">
                {{ $about['story_p2'] ?? '' }}
            </p>
            <p class="text-lg text-gray-300 mb-8">
                {{ $about['story_p3'] ?? '' }}
            </p>
        </div>
    </div>
</div>
@endsection
