'use client';

import React from 'react';
import { Menu, X, Search, User } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (

        <header className="relative z-50 px-4 py-6 lg:px-8"
        >
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
                    <div className="flex items-center space-x-8">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        <div className="hidden md:flex space-x-8 text-xl tracking-wider tenali-ramakrishna">
                            <a href="/" className="hover:text-amber-400 transition-colors uppercase">Inicio</a>
                            <a href="/about" className="hover:text-amber-400 transition-colors uppercase">Acerca</a>
                            <a href="/services" className="hover:text-amber-400 transition-colors uppercase">Servicios</a>
                            <a href="/events" className="hover:text-amber-400 transition-colors uppercase">Eventos</a>
                            <a href="/contact" className="hover:text-amber-400 transition-colors uppercase">Contacto</a>
                        </div>
                    </div>
                </nav>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-blur-sm mt-4 py-6 px-4">
                        <div className="flex flex-col space-y-4 text-sm tracking-wider tenali-ramakrishna">
                            <a href="/" className="hover:text-amber-400 transition-colors py-2 uppercase">Inicio</a>
                            <a href="/about" className="hover:text-amber-400 transition-colors py-2 uppercase">Acerca</a>
                            <a href="/services" className="hover:text-amber-400 transition-colors py-2 uppercase">Servicios</a>
                            <a href="/events" className="hover:text-amber-400 transition-colors py-2 uppercase">Eventos</a>
                            <a href="/contact" className="hover:text-amber-400 transition-colors py-2 uppercase">Contacto</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header; 