'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="relative z-50 px-4 py-6 lg:px-8">
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

            <div className="flex justify-between max-w-7xl mx-auto">
                {/* Top bar */}
                <div className="flex justify-between items-center">
                    <div className="text-2xl tracking-wider text-gray-300 tenali-ramakrishna">
                        PALMA DE MALLORCA
                    </div>
                </div>

                {/* Main navigation */}
                <nav className="flex justify-between items-center">
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white"
                            aria-label="Abrir menú"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        <div className="hidden md:flex space-x-8 text-xl tracking-wider tenali-ramakrishna">
                            <Link href="/" className="hover:text-amber-400 transition-colors uppercase">Inicio</Link>
                            <Link href="/acerca" className="hover:text-amber-400 transition-colors uppercase">Acerca</Link>
                            <Link href="/servicios" className="hover:text-amber-400 transition-colors uppercase">Servicios</Link>
                            <Link href="/masajistas" className="hover:text-amber-400 transition-colors uppercase">Masajistas</Link>
                            <Link href="/contacto" className="hover:text-amber-400 transition-colors uppercase">Contacto</Link>
                        </div>
                    </div>
                </nav>

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
                            aria-label="Cerrar menú"
                        >
                            <X className="w-8 h-8 text-amber-300 group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* Opciones de menú */}
                        <nav className="flex flex-col justify-center h-full px-8 space-y-8 mt-24">
                            <Link
                                href="/"
                                className="text-2xl tracking-widest tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Inicio
                            </Link>
                            <Link
                                href="/acerca"
                                className="text-2xl tracking-widest tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Acerca
                            </Link>
                            <Link
                                href="/servicios"
                                className="text-2xl tracking-widest tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Servicios
                            </Link>
                            <Link
                                href="/masajistas"
                                className="text-2xl tracking-widest tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Masajistas
                            </Link>
                            <Link
                                href="/contacto"
                                className="text-2xl tracking-widest tenali-ramakrishna text-white hover:text-amber-400 transition-colors uppercase border-b border-amber-400/20 pb-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contacto
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
    );
};

export default Header; 