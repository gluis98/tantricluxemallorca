@extends('layouts.app')

@section('title', trans('contactPage.meta_title', [], $locale))
@section('description', trans('contactPage.meta_description', [], $locale))
@section('keywords', trans('contactPage.meta_keywords', [], $locale))
@section('og_title', trans('contactPage.meta_title', [], $locale))
@section('og_description', trans('contactPage.meta_description', [], $locale))
@section('og_url', url()->current())
@section('canonical', url()->current())

@section('hreflang')
    @include('components.seo.hreflang', ['locale' => $locale])
@endsection

@section('structured_data')
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Tantric Luxe Mallorca",
        "image": "{{ asset('images/LogoFull.png') }}",
        "telephone": "+34 602 560 426",
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
            "latitude": "39.5696",
            "longitude": "2.6502"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "23:00"
        }
    }
}
</script>
@endsection

@section('content')
@php
    $contactPage = trans('contactPage', [], $locale);
@endphp

<div class="relative z-10 px-4 md:px-8 py-8">
    <div class="max-w-7xl mx-auto">
        <div class="text-center py-20">
            <h1 class="text-6xl md:text-8xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                {{ $contactPage['title'] ?? 'RESERVA TU' }}
            </h1>
            <p class="text-2xl md:text-4xl text-gray-300 tenali-ramakrishna mb-8">
                {{ $contactPage['subtitle'] ?? 'EXPERIENCIA' }}
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
                <h2 class="text-2xl font-light tracking-wider mb-6 gradiente-dorado cormorant-garamond">
                    {{ $contactPage['info_title'] ?? 'INFORMACIÓN DE CONTACTO' }}
                </h2>
                @foreach($contactPage['contact_info'] ?? [] as $info)
                <div class="mb-6 flex items-start group">
                    <div class="w-12 h-12 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-amber-600/30 group-hover:to-amber-900/30 transition-colors">
                        <span class="text-amber-400 text-2xl">{{ $info['icon'] ?? '' }}</span>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-amber-400 text-xl mb-1 tenali-ramakrishna">{{ $info['title'] ?? '' }}</h3>
                        <p class="text-gray-300">{{ $info['line1'] ?? '' }}</p>
                        <p class="text-gray-300">{{ $info['line2'] ?? '' }}</p>
                        <p class="text-sm text-gray-400">{{ $info['line3'] ?? '' }}</p>
                    </div>
                </div>
                @endforeach
                
                <!-- Quick Access Buttons -->
                <div class="space-y-4 mt-8">
                    <a href="https://wa.me/34602560426?text={{ urlencode(trans('contactPage.whatsapp_default_message', [], $locale)) }}" 
                       target="_blank"
                       class="w-full flex items-center justify-center tenali-ramakrishna border-1 border-green-400 bg-gradient-to-r from-green-900/30 to-green-800/30 rounded-3xl hover:from-green-600/40 hover:to-green-600/40 text-white px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300">
                        <span class="mr-3 text-2xl">💬</span>
                        {{ $contactPage['whatsapp_button_text'] ?? 'WHATSAPP DIRECTO' }}
                    </a>
                    <a href="tel:+34602560426" 
                       class="w-full flex items-center justify-center tenali-ramakrishna border-1 border-amber-400 bg-gradient-to-r from-amber-900/30 to-amber-800/30 rounded-3xl hover:from-amber-600/40 hover:to-amber-600/40 text-white px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300">
                        <span class="mr-3 text-2xl">📞</span>
                        {{ $contactPage['call_button_text'] ?? 'LLAMAR AHORA' }}
                    </a>
                </div>

                <!-- Privacy Notice -->
                <div class="mt-12 bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
                    <h4 class="text-lg font-light tracking-wider text-amber-400 mb-3 tenali-ramakrishna">
                        {{ $contactPage['privacy_title'] ?? '🔒 GARANTÍA DE PRIVACIDAD' }}
                    </h4>
                    <p class="text-gray-300 text-sm leading-relaxed">
                        {{ $contactPage['privacy_text'] ?? '' }}
                    </p>
                </div>
            </div>
            
            <div>
                <h2 class="text-2xl font-light tracking-wider mb-6 gradiente-dorado cormorant-garamond">
                    {{ $contactPage['form_title'] ?? 'FORMULARIO DE RESERVA' }}
                </h2>
                <form class="space-y-4">
                    <div>
                        <label class="block text-gray-300 mb-2">{{ $contactPage['name_label'] ?? 'NOMBRE *' }}</label>
                        <input type="text" class="w-full px-4 py-2 bg-gray-900/50 border border-amber-900/30 rounded-lg text-white" 
                               placeholder="{{ $contactPage['name_placeholder'] ?? 'Tu nombre' }}">
                    </div>
                    <div>
                        <label class="block text-gray-300 mb-2">{{ $contactPage['email_label'] ?? 'EMAIL *' }}</label>
                        <input type="email" class="w-full px-4 py-2 bg-gray-900/50 border border-amber-900/30 rounded-lg text-white" 
                               placeholder="{{ $contactPage['email_placeholder'] ?? 'tu@email.com' }}">
                    </div>
                    <div>
                        <label class="block text-gray-300 mb-2">{{ $contactPage['phone_label'] ?? 'TELÉFONO / WHATSAPP *' }}</label>
                        <input type="tel" class="w-full px-4 py-2 bg-gray-900/50 border border-amber-900/30 rounded-lg text-white" 
                               placeholder="{{ $contactPage['phone_placeholder'] ?? '+34 XXX XXX XXX' }}">
                    </div>
                    <div>
                        <label class="block text-gray-300 mb-2">{{ $contactPage['message_label'] ?? 'MENSAJE ADICIONAL' }}</label>
                        <textarea rows="4" class="w-full px-4 py-2 bg-gray-900/50 border border-amber-900/30 rounded-lg text-white" 
                                  placeholder="{{ $contactPage['message_placeholder'] ?? '' }}"></textarea>
                    </div>
                    <button type="submit" class="w-full px-6 py-3 bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 rounded-full transition-colors">
                        {{ $contactPage['submit_button'] ?? 'ENVIAR RESERVA' }}
                    </button>
                </form>
            </div>
        </div>

        <!-- Map Section -->
        <section class="py-16">
            <div class="text-center mb-12">
                <p class="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                    {{ $contactPage['map_section_title'] ?? 'NUESTRA UBICACIÓN' }}
                </p>
                <h2 class="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado cormorant-garamond">
                    {{ $contactPage['map_section_subtitle'] ?? 'EN EL CORAZÓN DE PALMA' }}
                </h2>
                <div class="w-24 h-px bg-amber-400 mx-auto mb-6"></div>
                <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed tenali-ramakrishna">
                    {{ $contactPage['map_section_p1'] ?? '' }}
                </p>
            </div>

            <!-- Google Maps Embed -->
            <div class="bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-amber-900/30 shadow-2xl mb-8">
                <div class="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps?q=Plaça+de+Santa+Magdalena,+3A,+Centre,+07012+Palma,+Illes+Balears&output=embed"
                        width="100%"
                        height="100%"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        class="rounded-2xl"
                    ></iframe>
                </div>
            </div>

            <!-- Map Points -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                @foreach($contactPage['map_section_points'] ?? [] as $point)
                <div class="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-xl p-6 border border-amber-900/20 text-center">
                    <div class="text-3xl mb-3">📍</div>
                    <p class="text-gray-300 text-sm tenali-ramakrishna">{{ $point }}</p>
                </div>
                @endforeach
            </div>

            <!-- Direct Link to Google Maps -->
            <div class="text-center mt-8">
                <a href="https://www.google.com/maps/place/Plaça+de+Santa+Magdalena,+3A,+Centre,+07012+Palma,+Illes+Balears" 
                   target="_blank"
                   rel="noopener noreferrer"
                   class="inline-block tenali-ramakrishna border-2 border-amber-400 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full hover:from-amber-600/30 hover:to-amber-800/30 text-amber-300 px-8 py-3 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105">
                    {{ $contactPage['open_maps_text'] ?? 'Abrir en Google Maps' }}
                </a>
            </div>
        </section>
    </div>
</div>
@endsection
