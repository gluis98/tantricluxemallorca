

'use client';

import React from 'react';
import Image from 'next/image';

export const services = [
    {
        id: 1,
        title: "TANTRIC DELUXE",
        image: "/images/tantric_deluxe.webp",
        duration: "90 min",
        price: "€450",
        description: "Una experiencia sensorial completa que combina técnicas ancestrales tántricas con el lujo moderno. Incluye aromaterapia personalizada y ambientación exclusiva.",
        features: ["Aromaterapia premium", "Música personalizada", "Aceites esenciales importados", "Ambiente privado"]
    },
    {
        id: 2,
        title: "SENSUAL PREMIUM",
        image: "/images/sensual_premium.webp",
        duration: "120 min",
        price: "€650",
        description: "Nuestro servicio más exclusivo, diseñado para despertar todos los sentidos. Una experiencia transformadora en un ambiente de absoluta privacidad.",
        features: ["Champagne de bienvenida", "Jacuzzi privado", "Masaje cuatro manos", "Suite VIP"]
    },
    {
        id: 3,
        title: "EXOTIC PARADISE",
        image: "/images/exotic_paradise.webp",
        duration: "60 min",
        price: "€350",
        description: "Un viaje sensorial inspirado en las técnicas orientales más refinadas. Perfecto para una primera experiencia en nuestro exclusivo spa.",
        features: ["Técnicas orientales", "Velas aromáticas", "Música ambiental", "Toallas calientes"]
    },
    {
        id: 4,
        title: "COUPLES HARMONY",
        image: "/images/couples_harmony.webp",
        duration: "90 min",
        price: "€800",
        description: "Experiencia diseñada para parejas que buscan reconectar en un ambiente íntimo y lujoso. Incluye instrucción tántrica básica.",
        features: ["Sala para parejas", "Instructor especializado", "Ritual de conexión", "Aceites afrodisíacos"]
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
                                <div className="text-right">
                                    <p className="text-xl font-light text-amber-500">{service.price}</p>
                                    <p className="text-sm text-gray-400">{service.duration}</p>
                                </div>
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