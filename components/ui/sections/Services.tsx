

'use client';

import React from 'react';
import Image from 'next/image';

export const services = [
    {
        id: 1,
        title: "PARAÍSO EXÓTICO & FANTASÍA",
        image: "/images/exotic_paradise.webp",
        duration: "75 min",
        price: "€180",
        description: "Déjate llevar a un mundo donde todo es posible. Cada detalle se adapta a tus deseos y fantasías más íntimas. Tu placer no tiene límites en tu propio Paraíso de Fantasías.",
        features: ["Fantasías personalizadas", "Accesorios especiales", "Disfraces provocadores", "Experiencia única"]
    },
    {
        id: 2,
        title: "PREMIUM SENSUAL 4 MANOS",
        image: "/images/sensual_premium.webp",
        duration: "90 min",
        price: "€280",
        description: "Show exclusivo de striptease con baile sensual de pole dance. Ducha erótica compartida y masaje tántrico erótico profesional a cuatro manos.",
        features: ["Show de striptease", "Pole dance sensual", "Ducha erótica compartida", "Masaje 4 manos"]
    },
    {
        id: 3,
        title: "TANTRIC DELUXE",
        image: "/images/tantric_deluxe.webp",
        duration: "85 min",
        price: "€220",
        description: "Ducha erótica compartida con tu masajista. Masaje sensual cuerpo a cuerpo por delante y por detrás con técnicas eróticas profesionales.",
        features: ["Ducha erótica compartida", "Masaje cuerpo a cuerpo", "Doble terminación", "Ambiente romántico"]
    },
    {
        id: 4,
        title: "ARMONÍA TANTRA EN PAREJA",
        image: "/images/couples_harmony.webp",
        duration: "90 min",
        price: "€320",
        description: "Un ritual íntimo diseñado para reconectar con tu pareja y despertar juntos el deseo. Una o dos masajistas os guiarán en esta experiencia compartida.",
        features: ["Masaje para parejas", "Vela caliente", "Botella de champán", "Terminación compartida"]
    },
    {
        id: 5,
        title: "YACHT MASSAGE EXPERIENCE",
        image: "/images/experiencias_eroticas_unicas.webp",
        duration: "80 min",
        price: "€350",
        description: "Sumérgete en una experiencia tántrica de lujo diseñada especialmente para ti, a bordo de tu yate privado. Conexión profunda entre cuerpo y deseo.",
        features: ["Experiencia en yate", "Aromas envolventes", "Música sensual", "Aceites cálidos"]
    }
];

export default function ServicesSection() {

    return (

        <section id="servicios" className="py-12 sm:py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                    NUESTROS SERVICIOS
                </p>
                <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                    EXPERIENCIAS EXCLUSIVAS
                </h2>
                <div className="w-24 h-px bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-amber-900/20 hover:border-amber-600/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/20 flex flex-col h-full"
                    >
                        <div className="flex-grow">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={400}
                                height={160}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-light tracking-wider text-amber-400">
                                    {service.title}
                                </h3>
                                {/* <div className="text-right">
                                    <p className="text-xl font-light text-amber-500">{service.price}</p>
                                    <p className="text-sm text-gray-400">{service.duration}</p>
                                </div> */}
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-sm text-gray-400">
                                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button 
                        onClick={() => window.location.href = '/whatsapp'}
                        className="w-full cursor-pointer tenali-ramakrishna border-1 border-yellow-400/50 bg-gradient-to-r from-amber-900/30 to-amber-800/30 rounded-3xl hover:from-yellow-600/40 hover:to-amber-600/40 text-white px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300 mt-4">
                            RESERVAR AHORA
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}