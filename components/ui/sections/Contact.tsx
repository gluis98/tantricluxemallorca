'use client';

import React from 'react';
import ContactForm from './ContactForm';

type Service = {
    id: number;
    title: string;
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

export default function ContactSection({ dictionary, services }: { dictionary: Dictionary, services: Service[] }) {

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
                                href="https://www.google.com/maps?q=39.5736032,2.6386885"
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
        </section>
    )
}