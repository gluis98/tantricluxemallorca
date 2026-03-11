'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection({ dictionary }: {
    dictionary: {
        pre_title: string;
        title: string;
        p1: string;
        p2: string;
        stat1_title: string;
        stat1_text: string;
        stat2_title: string;
        stat2_text: string;
        stat3_title: string;
        stat3_text: string;
    }
}) {

    return (

        <section className="py-12 sm:py-24 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-16 items-center">
                <div>
                    <div className="flex flex-col mb-10 items-center text-center md:text-left md:items-start">
                        <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">{dictionary.pre_title}</p>
                        <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 gradiente-dorado">
                            {dictionary.title}
                        </h2>
                        <div className="w-24 h-px bg-amber-400"></div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        {dictionary.p1}
                    </p>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        {dictionary.p2}
                    </p>
                    <div className="grid grid-cols-3 gap-8 text-center">
                        <div>
                            <h4 className="text-3xl font-light text-amber-400 mb-2">{dictionary.stat1_title}</h4>
                            <p className="text-sm text-gray-400">{dictionary.stat1_text}</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-light text-amber-400 mb-2">{dictionary.stat2_title}</h4>
                            <p className="text-sm text-gray-400">{dictionary.stat2_text}</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-light text-amber-400 mb-2">{dictionary.stat3_title}</h4>
                            <p className="text-sm text-gray-400">{dictionary.stat3_text}</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-full">
                    <Image
                        src="/images/especialistas_en_masajese_eroticos.webp"
                        alt="Centro de masaje tantrico exclusivo en Palma Mallorca"
                        className="rounded-lg shadow-2xl object-cover"
                        fill
                    />
                </div>
            </div>
        </section>
    )
}