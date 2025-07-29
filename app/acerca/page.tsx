'use client'

import React from 'react';
import Image from 'next/image';
import Header from '@/components/ui/sections/Header';
import Footer from '@/components/ui/sections/Footer';

const milestones = [
    {
        year: "2019",
        title: "FUNDACIÓN",
        description: "Tantric Luxe Mallorca abre sus puertas como el primer spa tántrico de lujo en Palma."
    },
    {
        year: "2020",
        title: "EXPANSIÓN",
        description: "Ampliación de instalaciones con nuevas suites VIP y jacuzzis privados."
    },
    {
        year: "2021",
        title: "RECONOCIMIENTO",
        description: "Premio al mejor spa de bienestar alternativo de las Islas Baleares."
    },
    {
        year: "2022",
        title: "CERTIFICACIÓN",
        description: "Certificación internacional en prácticas tántricas tradicionales y terapias de bienestar."
    },
    {
        year: "2023",
        title: "INNOVACIÓN",
        description: "Introducción de tecnología avanzada para experiencias inmersivas y personalizadas."
    },
    {
        year: "2024",
        title: "EXCELENCIA",
        description: "Más de 5000 clientes satisfechos y reconocimiento como referente en turismo de bienestar."
    }
];


const AboutPage = () => {

    return (
        <div className="min-h-screen text-white relative overflow-hidden">
            {/* Complex background with multiple gradients and radial effects */}
            <div className="absolute inset-0 bg-gray-950"></div>

            {/* Multiple radial gradients for depth */}
            <div className="absolute inset-0 bg-gradient-radial from-amber-900/30 via-transparent to-transparent"
                style={{
                    background: 'radial-gradient(circle at 20% 30%, rgba(120, 53, 15, 0.4) 0%, transparent 50%)'
                }}></div>

            <div className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 80% 20%, rgba(92, 51, 23, 0.3) 0%, transparent 40%)'
                }}></div>

            <div className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 60% 80%, rgba(69, 39, 17, 0.25) 0%, transparent 35%)'
                }}></div>

            <div className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 10% 70%, rgba(53, 45, 40, 0.2) 0%, transparent 45%)'
                }}></div>

            {/* Linear gradients for overall tone */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-amber-950/10 to-black/80"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-amber-950/10"></div>

            {/* Mandalas en las esquinas */}
            <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0">
                {/* Mandala izquierda */}
                <div className="absolute top-0 left-0 -translate-x-[60%] md:-translate-x-1/2 w-[600px] h-[600px]">
                    <span className="glow-mandala"></span>
                    <Image
                        src="/images/Mandala.webp"
                        alt="Left Mandala"
                        width={600}
                        height={600}
                        className="object-contain w-full h-full relative z-10"
                    />
                </div>
                {/* Mandala derecha */}
                <div className="absolute top-0 right-0 translate-x-[60%] md:translate-x-1/2 w-[600px] h-[600px]">
                    <span className="glow-mandala"></span>
                    <Image
                        src="/images/Mandala.webp"
                        alt="Right Mandala"
                        width={600}
                        height={600}
                        className="object-contain w-full h-full relative z-10"
                        style={{ transform: 'scaleX(-1)' }}
                    />
                </div>
            </div>

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="relative z-10 px-4 md:px-8 py-8">
                <div className="max-w-7xl mx-auto">

                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">ACERCA DE NOSOTROS</p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">NUESTRA HISTORIA</h1>
                        <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">SPA TANTRICO DE LUJO</h2>
                        <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 tenali-ramakrishna">Desde 2019, hemos sido pioneros en crear experiencias tántricas de lujo que transforman vidas y elevan la conciencia en el corazón de Mallorca</p>
                    </div>

                    {/* Our Story Section */}
                    <section className="mb-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                                    UN SANTUARIO DE LUJO Y SENSUALIDAD
                                </h2>
                                <div className="w-24 h-px bg-amber-400 mb-8"></div>
                                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                    En Tantric Luxe Mallorca, hemos creado más que un spa; hemos desarrollado un santuario donde el arte ancestral del tantra se encuentra con el lujo contemporáneo más refinado. Nuestra visión es proporcionar un espacio sagrado donde nuestros huéspedes puedan explorar, sanar y transformarse.
                                </p>
                                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                    Cada detalle de nuestras instalaciones ha sido meticulosamente diseñado para crear una atmósfera que despierte todos los sentidos. Desde los aceites esenciales importados directamente de sus lugares de origen hasta la música ambiental compuesta específicamente para cada tipo de experiencia.
                                </p>
                                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                    Nuestro equipo está formado por profesionales altamente capacitados y certificados internacionalmente, comprometidos con mantener los más altos estándares de excelencia, privacidad y respeto en cada interacción.
                                </p>

                                <div className="grid grid-cols-3 gap-8 text-center">
                                    <div className="bg-gradient-to-br from-amber-900/20 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
                                        <h4 className="text-3xl font-light text-amber-400 mb-2">5000+</h4>
                                        <p className="text-sm text-gray-400">Clientes satisfechos</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-amber-900/20 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
                                        <h4 className="text-3xl font-light text-amber-400 mb-2">6</h4>
                                        <p className="text-sm text-gray-400">Años de excelencia</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-amber-900/20 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
                                        <h4 className="text-3xl font-light text-amber-400 mb-2">100%</h4>
                                        <p className="text-sm text-gray-400">Privacidad garantizada</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent rounded-lg"></div>
                                <Image
                                    src="/images/espacio_exclusivo_tantrico.webp"
                                    alt="Luxury spa interior"
                                    width={600}
                                    height={800}
                                    className="rounded-lg shadow-2xl w-full h-auto"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Timeline Section */}
                    <section className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                                NUESTRO CAMINO
                            </h2>
                            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-600 to-amber-900"></div>

                            <div className="space-y-16">
                                {milestones.map((milestone, index) => (
                                    <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <div className="flex-1 px-8">
                                            <div className={`bg-gradient-to-br from-amber-900/20 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                                <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-2 tenali-ramakrishna">
                                                    {milestone.title}
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Timeline node */}
                                        <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center border-4 border-black">
                                            <span className="text-white font-light text-sm tenali-ramakrishna">
                                                {milestone.year}
                                            </span>
                                        </div>

                                        <div className="flex-1 px-8"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Philosophy Section */}
                    <section className="mb-24">
                        <div className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-lg p-12 border border-amber-600/30">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                                    NUESTRA FILOSOFÍA
                                </h2>
                                <div className="w-24 h-px bg-amber-400 mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <blockquote className="text-2xl font-light text-gray-300 italic leading-relaxed mb-8">
                                        &quot;El tantra no es solo una práctica, es un camino hacia la comprensión profunda de uno mismo y la conexión auténtica con otros. En cada experiencia que creamos, honramos esta sabiduría ancestral mientras abrazamos la belleza del momento presente.&quot;
                                    </blockquote>
                                    <div className="text-amber-400 text-lg tenali-ramakrishna">
                                        — Tantric Luxe Mallorca
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-3 h-3 bg-amber-400 rounded-full mr-4 mt-2"></div>
                                        <div>
                                            <h4 className="text-lg text-amber-400 mb-2 tenali-ramakrishna">CONEXIÓN AUTÉNTICA</h4>
                                            <p className="text-gray-300 text-sm">Facilitamos encuentros genuinos contigo mismo y con otros, libre de juicios y lleno de aceptación.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-3 h-3 bg-amber-400 rounded-full mr-4 mt-2"></div>
                                        <div>
                                            <h4 className="text-lg text-amber-400 mb-2 tenali-ramakrishna">SANACIÓN INTEGRAL</h4>
                                            <p className="text-gray-300 text-sm">Creemos en el poder sanador del tacto consciente y la presencia mindful para restaurar el equilibrio.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-3 h-3 bg-amber-400 rounded-full mr-4 mt-2"></div>
                                        <div>
                                            <h4 className="text-lg text-amber-400 mb-2 tenali-ramakrishna">TRANSFORMACIÓN CONSCIENTE</h4>
                                            <p className="text-gray-300 text-sm">Cada experiencia está diseñada para catalizar cambios positivos y duraderos en tu vida.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Footer */}
                <Footer />
            </main>
        </div>
    );
};

export default AboutPage;