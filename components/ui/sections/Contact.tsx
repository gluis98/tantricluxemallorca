'use client';

import React from 'react';
import ContactForm from './ContactForm';

type Service = {
    id: number;
    title: string;
};

type MapLabels = {
    map_section_title: string;
    map_section_subtitle: string;
    map_section_p1: string;
    map_section_points: string[];
    open_maps_text?: string;
};

type Dictionary = {
    pre_title: string;
    title: string;
    info_title: string;
    location_title: string;
    location_address: string;
    location_note: string;
    whatsapp_title: string;
    whatsapp_number: string;
    whatsapp_note: string;
    schedule_title: string;
    schedule_days: string;
    schedule_hours: string;
    privacy_title: string;
    privacy_text: string;
    form_title: string;
    name_label: string;
    name_placeholder: string;
    email_label: string;
    email_placeholder: string;
    phone_label: string;
    phone_placeholder: string;
    service_label: string;
    service_placeholder: string;
    message_label: string;
    message_placeholder: string;
    success_message: string;
    error_message: string;
    submitting_button: string;
    submit_button: string;
};

const MAPS_PLACE_URL =
    'https://www.google.com/maps/place/Carrer+del+Pare+Bartomeu+Pou,+44,+Nord,+07003+Palma,+Illes+Balears';
const MAPS_EMBED_SRC =
    'https://www.google.com/maps?q=Carrer+del+Pare+Bartomeu+Pou,+44,+Nord,+07003+Palma,+Illes+Balears&output=embed';

export default function ContactSection({
    dictionary,
    services,
    mapLabels,
}: {
    dictionary: Dictionary;
    services: Service[];
    mapLabels: MapLabels;
}) {

    return (


        <section id="contacto" className="py-12 sm:py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">{dictionary.pre_title}</p>
                <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">{dictionary.title}</h2>
                <div className="w-24 h-px bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-8">
                        {dictionary.info_title}
                    </h3>
                    <div className="space-y-6">
                        <div className="flex items-start group cursor-pointer">
                            <div className="w-12 h-12 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0 group-hover:from-amber-600/30 group-hover:to-amber-900/30 transition-colors">
                                <span className="text-amber-400">📍</span>
                            </div>
                            <a 
                                href={MAPS_PLACE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-0 hover:text-amber-300 transition-colors"
                            >
                                <h4 className="text-amber-400 text-xl mb-1 tenali-ramakrishna group-hover:text-amber-300">{dictionary.location_title}</h4>
                                <p className="text-gray-300 break-words leading-relaxed text-sm sm:text-base group-hover:underline">
                                    <span className="block sm:inline">Carrer del Pare Bartomeu Pou, 44, Nord,</span>
                                    <span className="block sm:inline"> 07003 Palma, Illes Balears</span>
                                </p>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300">{dictionary.location_note}</p>
                            </a>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-amber-400">📱</span>
                            </div>
                            <div>
                                <h4 className="text-amber-400 text-xl mb-1 tenali-ramakrishna">{dictionary.whatsapp_title}</h4>
                                <p className="text-gray-300">{dictionary.whatsapp_number}</p>
                                <p className="text-sm text-gray-400">{dictionary.whatsapp_note}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-amber-400">⏰</span>
                            </div>
                            <div>
                                <h4 className="text-amber-400 text-xl mb-1 tenali-ramakrishna">{dictionary.schedule_title}</h4>
                                <p className="text-gray-300">{dictionary.schedule_days}</p>
                                <p className="text-sm text-gray-400">{dictionary.schedule_hours}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h4 className="text-xl font-light tracking-wider text-amber-400 mb-4">
                            {dictionary.privacy_title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {dictionary.privacy_text}
                        </p>
                    </div>
                </div>

                <div>
                    <ContactForm services={services} dictionary={dictionary} />
                </div>
            </div>

            <div className="mt-16 md:mt-20">
                <div className="text-center mb-10 md:mb-12">
                    <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                        {mapLabels.map_section_title}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-light tracking-wider mb-6 md:mb-8 gradiente-dorado cormorant-garamond">
                        {mapLabels.map_section_subtitle}
                    </h3>
                    <div className="w-24 h-px bg-amber-400 mx-auto mb-6" />
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed tenali-ramakrishna">
                        {mapLabels.map_section_p1}
                    </p>
                </div>

                <div className="bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-amber-900/30 shadow-2xl mb-8">
                    <a
                        href={MAPS_PLACE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block w-full h-96 md:h-[500px] rounded-2xl overflow-hidden bg-black group"
                    >
                        <iframe
                            src={MAPS_EMBED_SRC}
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter:
                                    'invert(92%) hue-rotate(185deg) saturate(140%) brightness(72%) contrast(102%)',
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-2xl scale-[1.02] pointer-events-none"
                            title={mapLabels.map_section_title}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm px-6 py-3 rounded-lg border border-amber-400/40">
                                <p className="text-amber-300 text-sm font-medium tenali-ramakrishna">
                                    {mapLabels.open_maps_text ?? 'Google Maps'}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {(mapLabels.map_section_points ?? []).map((point, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-xl p-6 border border-amber-900/20 text-center"
                        >
                            <div className="text-3xl mb-3">📍</div>
                            <p className="text-gray-300 text-sm tenali-ramakrishna">{point}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <a
                        href={MAPS_PLACE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block tenali-ramakrishna border-2 border-amber-400 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full hover:from-amber-600/30 hover:to-amber-800/30 text-amber-300 px-8 py-3 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105"
                    >
                        {mapLabels.open_maps_text ?? 'Abrir en Google Maps'}
                    </a>
                </div>
            </div>
        </section>
    )
}