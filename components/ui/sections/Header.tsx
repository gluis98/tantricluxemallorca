'use client';

import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { i18n } from '@/i18n-config';
import LanguageSwitcher from '@/components/ui/buttons/LanguageSwitcher';

type Service = {
    slug: string;
    title: string;
    description: string;
};

const Header = ({ lang, dictionary, services = [] }: {
    lang: string,
    dictionary: {
        location: string;
        nav: {
            home: string;
            about: string;
            services: string;
            masseuses: string;
            contact: string;
        };
        paths: { about: string; services: string; masseuses: string; contact: string; };
        openMenu: string;
        closeMenu: string;
    };
    services?: Service[];
}) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);

    return (
        <>
        <header className="z-50 px-4 py-6 lg:px-8 absolute w-full">
            {/* Gold Line */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                padding: '1px',
                background: 'linear-gradient(90deg,rgb(255, 230, 166), #fff,rgb(224, 194, 117))',
            }}>
            </div>

            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Top bar */}
                <div className="flex-1 flex justify-start">
                    <a 
                        href="https://www.google.com/maps/place/Tantric+Luxe+Mallorca+-+Masajes+Tantricos/@39.5809825,2.6480904,17.96z/data=!4m6!3m5!1s0x129793d4f862b319:0xe5362cc17cc4db26!8m2!3d39.5808678!4d2.6485458!16s%2Fg%2F11xrx_6gkn?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl tracking-wider text-gray-300 tenali-ramakrishna break-words leading-tight hover:text-amber-400 transition-colors cursor-pointer group"
                        title="Abrir en Google Maps"
                    >
                        <span className="hidden sm:inline group-hover:underline">{dictionary.location}</span>
                        <span className="sm:hidden group-hover:underline">Carrer del Pare Bartomeu Pou, 44<br />Nord, 07003 Palma</span>
                    </a>
                </div>

                {/* Main navigation - Solo visible en pantallas grandes (lg y superiores) */}
                <nav className="hidden lg:flex flex-1 justify-center items-center space-x-8 text-xl tracking-wider tenali-ramakrishna">
                    <Link href={lang === i18n.defaultLocale ? '/' : `/${lang}`} className="hover:text-amber-400 transition-colors uppercase">{dictionary.nav.home}</Link>
                    <Link href={lang === i18n.defaultLocale ? '/acerca' : `/${lang}${dictionary.paths.about}`} className="hover:text-amber-400 transition-colors uppercase">{dictionary.nav.about}</Link>
                    
                    {/* Services Dropdown */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setIsServicesDropdownOpen(true)}
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                        <Link 
                            href={lang === i18n.defaultLocale ? '/servicios' : `/${lang}${dictionary.paths.services}`}
                            className="hover:text-amber-400 transition-colors uppercase flex items-center gap-1"
                        >
                            {dictionary.nav.services}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </Link>
                        
                        {/* Dropdown Menu */}
                        {isServicesDropdownOpen && services.length > 0 && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-gradient-to-br from-black/95 via-gray-950/95 to-amber-950/90 backdrop-blur-md rounded-2xl shadow-2xl border border-amber-900/30 overflow-hidden z-50">
                                <div className="p-2">
                                    {services.map((service, index) => (
                                        <Link
                                            key={index}
                                            href={`/${lang}/servicios/${service.slug}`}
                                            className="block px-4 py-3 rounded-xl hover:bg-amber-900/30 transition-all duration-300 group/item"
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="text-amber-400 text-lg mt-1 group-hover/item:scale-110 transition-transform">✨</span>
                                                <div className="flex-1">
                                                    <h4 className="text-amber-300 font-light text-sm tracking-wider mb-1 group-hover/item:text-amber-200 transition-colors">
                                                        {service.title}
                                                    </h4>
                                                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 group-hover/item:text-gray-300 transition-colors">
                                                        {service.description.substring(0, 80)}...
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                    <div className="mt-2 pt-2 border-t border-amber-900/30">
                                        <Link
                                            href={lang === i18n.defaultLocale ? '/servicios' : `/${lang}${dictionary.paths.services}`}
                                            className="block px-4 py-3 rounded-xl hover:bg-amber-600/20 transition-all duration-300 text-center"
                                        >
                                            <span className="text-amber-400 text-sm font-light tracking-wider uppercase">
                                                {lang === 'es' ? 'Ver Todos los Servicios' : lang === 'en' ? 'View All Services' : 'Alle Leistungen anzeigen'}
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <Link href={lang === i18n.defaultLocale ? '/masajistas' : `/${lang}${dictionary.paths.masseuses}`} className="hover:text-amber-400 transition-colors uppercase">{dictionary.nav.masseuses}</Link>
                    <Link href={lang === i18n.defaultLocale ? '/contacto' : `/${lang}${dictionary.paths.contact}`} className="hover:text-amber-400 transition-colors uppercase">{dictionary.nav.contact}</Link>
                </nav>

                <div className="flex flex-1 justify-end items-center gap-4">
                    <LanguageSwitcher />
                    {/* Botón de hamburguesa - Visible en móvil y tablets (hasta lg) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-white hover:text-amber-400 transition-colors"
                        aria-label={isMenuOpen ? dictionary.closeMenu : dictionary.openMenu}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Drawer Menu */}
                <div
                    className={`
                        fixed inset-0 z-50 transition-all duration-500
                        ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
                    `}
                    aria-hidden={!isMenuOpen}
                >
                    {/* Fondo oscuro y desenfocado */}
                    <div
                        className={`
                            absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500
                            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}
                        `}
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Drawer */}
                    <aside
                        className={`
                            fixed top-0 right-0 h-full
                            w-[90vw] max-w-xs
                            bg-gradient-to-br from-black/80 via-gray-950/70 to-amber-950/60
                            shadow-2xl
                            transition-transform duration-500
                            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                            flex flex-col
                            `}
                        style={{ zIndex: 60 }}
                    >
                            <div style={{
                                height: '100%',
                                width: '2px',
                                background: 'linear-gradient(180deg,rgb(255, 230, 166), #fff,rgb(224, 194, 117))',
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                zIndex: 61,
                            }}>
                            </div>
                        {/* Botón cerrar */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-amber-900/30 hover:bg-amber-900/60 flex items-center justify-center transition-colors group"
                            aria-label={dictionary.closeMenu}
                        >
                            <X className="w-8 h-8 text-amber-300 group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* Opciones de menú */}
                        <nav className="flex flex-col justify-center h-full px-8 space-y-8 mt-24 overflow-y-auto">
                            <Link
                                href={lang === i18n.defaultLocale ? '/' : `/${lang}`}
                                className="text-2xl tracking-widest tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {dictionary.nav.home}
                            </Link>
                            <Link
                                href={lang === i18n.defaultLocale ? '/acerca' : `/${lang}${dictionary.paths.about}`}
                                className="text-2xl tracking-widest tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {dictionary.nav.about}
                            </Link>
                            
                            {/* Services Section with Dropdown */}
                            <div className="border-b border-amber-400/20 pb-2">
                                <Link
                                    href={lang === i18n.defaultLocale ? '/servicios' : `/${lang}${dictionary.paths.services}`}
                                    className="text-2xl tracking-widest tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase flex items-center justify-between"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {dictionary.nav.services}
                                </Link>
                                
                                {/* Services Dropdown in Mobile */}
                                {services.length > 0 && (
                                    <div className="mt-4 space-y-3 pl-4">
                                        {services.map((service, index) => (
                                            <Link
                                                key={index}
                                                href={`/${lang}/servicios/${service.slug}`}
                                                className="block py-2 px-3 rounded-lg hover:bg-amber-900/30 transition-all duration-300 group"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <div className="flex items-start gap-2">
                                                    <span className="text-amber-400 text-sm mt-1">✨</span>
                                                    <div>
                                                        <h4 className="text-amber-300 text-sm font-light tracking-wide mb-1 group-hover:text-amber-200">
                                                            {service.title}
                                                        </h4>
                                                        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                                                            {service.description.substring(0, 60)}...
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            <Link
                                href={lang === i18n.defaultLocale ? '/masajistas' : `/${lang}${dictionary.paths.masseuses}`}
                                className="text-2xl tracking-widest tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {dictionary.nav.masseuses}
                            </Link>
                            <Link
                                href={lang === i18n.defaultLocale ? '/contacto' : `/${lang}${dictionary.paths.contact}`}
                                className="text-2xl tracking-widest tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {dictionary.nav.contact}
                            </Link>
                        </nav>
                        <div className="flex-1" />
                        <div className="flex justify-center items-center mt-10 mb-8 z-10 relative">
                            <Image
                                src="/images/LogoIso.png"
                                alt="Logo Tantric Luxe"
                                width={90}
                                height={90}
                                priority
                                className="drop-shadow-lg"
                            />
                        </div>
                    </aside>
                </div>
            </div>
        </header>
        <div className="h-20" /> {/* Spacer to prevent content being hidden behind fixed header */}
        </>
    );
};

export default Header; 