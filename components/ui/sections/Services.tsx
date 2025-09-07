'use client';

import React from 'react';
import { i18n } from '@/i18n-config';
import Image from 'next/image';

type Service = {
    id: number;
    title: string;
    image: string;
    duration: string;
    price: string;
    description: string;
    features: string[];
};

export default function ServicesSection({ lang, dictionary, services }: { lang: string, dictionary: any, services: Service[] }) {

    return (

        <section id="servicios" className="py-12 sm:py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                    {dictionary.pre_title}
                </p>
                <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                    {dictionary.title}
                </h2>
                <div className="w-24 h-px bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {services.slice(0, 2).map((service) => (
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
                            {dictionary.reserve_button}
                        </button>
                    </div>
                ))}
            </div>

            {/* Botón para ver todos los servicios */}
            <div className="text-center">
                <button 
                    onClick={() => window.location.href = (lang === i18n.defaultLocale ? '/servicios' : `/${lang}/servicios`)}
                    className="tenali-ramakrishna border-1 cursor-pointer border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors"
                >
                    {dictionary.see_all_button}
                </button>
            </div>
        </section>
    )
}