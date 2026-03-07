@php
    $locale = $locale ?? 'es';
    $common = trans('common', [], $locale);
    $footer = $common['footer'] ?? [];
@endphp

<footer class="border-t relative text-center md:text-left border-amber-900/20 py-12 px-4 mt-12">
    <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div class="justify-self-center md:justify-self-start">
                <div class="flex flex-col w-[200px] sm:w-[300px] md:w-[80%] items-center">
                    <img src="{{ asset('images/LogoFull.png') }}" alt="Logo Tantric Luxe" class="object-contain w-full h-full">
                </div>
            </div>
            <div>
                <h4 class="text-amber-400 mb-4 tenali-ramakrishna">{{ $footer['navigation'] ?? 'NAVEGACIÓN' }}</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li><a href="/{{ $locale === 'es' ? '' : $locale }}" class="hover:text-amber-400 transition-colors">{{ $footer['nav_home'] ?? 'Masaje Tantrico Mallorca' }}</a></li>
                    <li><a href="/{{ $locale }}{{ $footer['paths']['services'] ?? '/servicios' }}" class="hover:text-amber-400 transition-colors">{{ $footer['nav_services'] ?? 'Servicios Tantricos' }}</a></li>
                    <li><a href="/{{ $locale }}{{ $footer['paths']['masseuses'] ?? '/masajistas' }}" class="hover:text-amber-400 transition-colors">{{ $footer['nav_masseuses'] ?? 'Masajistas Eróticas' }}</a></li>
                    <li><a href="/{{ $locale }}{{ $footer['paths']['contact'] ?? '/contacto' }}" class="hover:text-amber-400 transition-colors">{{ $footer['nav_contact'] ?? 'Contacto' }}</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-amber-400 mb-4 tenali-ramakrishna">{{ $footer['massages_title'] ?? 'MASAJES TANTRICOS' }}</h4>
                <ul class="space-y-2 text-sm text-gray-400">
                    <li>Masaje Tantrico Deluxe Mallorca</li>
                    <li>Masaje Tantrico Premium Palma</li>
                    <li>Experiencia Tantrica Parejas</li>
                    <li>Ritual Tantrico Personalizado</li>
                </ul>
            </div>
            <div>
                <h4 class="text-amber-400 mb-4 tenali-ramakrishna">{{ $footer['follow_us'] ?? 'SÍGUENOS' }}</h4>
                <div class="flex space-x-4 justify-center md:justify-start">
                    <a href="#" class="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center hover:from-amber-600/30 hover:to-amber-900/30 transition-colors" aria-label="{{ $footer['instagram_aria'] ?? 'Instagram' }}">
                        <span class="text-amber-400">📷</span>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center hover:from-amber-600/30 hover:to-amber-900/30 transition-colors" aria-label="{{ $footer['whatsapp_aria'] ?? 'WhatsApp' }}">
                        <span class="text-amber-400">💬</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="border-t border-amber-900/20 pt-8 text-center text-sm text-gray-400">
            <p>{{ $footer['copyright'] ?? '© 2025 Tantric Luxe Mallorca' }}</p>
        </div>
    </div>
</footer>
