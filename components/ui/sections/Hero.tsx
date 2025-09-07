'use client';

import React from 'react';
import Image from 'next/image';
import ReserveNowButton from '@/components/ui/buttons/ReserveNowButton';

export default function HeroSection({ dictionary }: {
    dictionary: {
        subtitle: string;
        title: string;
        main_heading: string;
        secondary_heading: string;
        reserve_button_text: string;
        hero_section: {
            card1_title: string;
            card1_text: string;
            icon1_title: string;
            icon1_text: string;
            icon2_title: string;
            icon2_text: string;
            icon3_title: string;
            icon3_text: string;
            card2_title: string;
            card2_text: string;
        };
    }
}) {

    return (

        <div className="max-w-7xl mx-auto text-center">
            {/* Subtitle */}
            <p className="text-sm md:text-md mb-8 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                {dictionary.subtitle}
            </p>
            {/* Main title */}
            <p className="text-4xl md:text-6xl lg:text-8xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                {dictionary.title}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">
                {dictionary.main_heading}
            </h1>

            {/* Subtitle 2*/}
            <p className="text-xl md:text-2xl font-light tracking-widest mb-8 text-gray-300 tenali-ramakrishna">
                {dictionary.secondary_heading}
            </p>

            {/* Decorative line */}
            <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>

            {/* Service options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-8xl mx-auto">
                {/* Left service */}
                <div className="hidden lg:block space-y-6 col-span-1">
                    <div className="w-20 h-20 rounded-full w-full m-0">
                        <Image
                            src="/images/MantraButton.png"
                            alt="Botón masaje tantrico exclusivo Mallorca"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="text-center flex flex-col items-center">
                        <h3 className="text-xl md:text-2xl font-light tracking-wider mb-4" dangerouslySetInnerHTML={{ __html: dictionary.hero_section.card1_title }}>
                        </h3>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed w-[250px]">
                            {dictionary.hero_section.card1_text}
                        </p>
                        <div className='flex flex-col w-[200px] justify-self-center'>
                            <ReserveNowButton text={dictionary.reserve_button_text} />

                            {/* Decorative dots */}
                            <div className="flex justify-center mt-6 gap-3 space-x-2">
                                <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
                                <div className="w-2 h-2 bg-amber-200 rounded-full"></div>
                                <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center services */}
                <div className="flex justify-evenly lg:justify-between self-center gap-6 space-y-8 col-span-3 lg:col-span-1">
                    {/* icon */}
                    <div className="text-center flex flex-col gap-6 items-center">
                        {/* Primer botón luxury */}
                        <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center relative">
                            <span className="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                            <Image
                                src="/images/BotomLuxDark.webp"
                                alt="Servicios especiales masaje tantrico Mallorca"
                                width={150}
                                height={150}
                                className="object-contain w-full h-full relative z-10"
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-2xl text-yellow-400 pointer-events-none z-20">
                                Ω
                            </span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-light tracking-wider tenali-ramakrishna">{dictionary.hero_section.icon1_title}</h3>
                            <p className="text-lg text-amber-400/80 uppercase tenali-ramakrishna">{dictionary.hero_section.icon1_text}</p>
                        </div>
                    </div>

                    {/* icon */}
                    <div className="text-center flex flex-col gap-6 items-center">
                        {/* Segundo botón luxury */}
                        <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center relative">
                            <span className="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                            <Image
                                src="/images/BotomLuxDark.webp"
                                alt="Masaje tantrico deluxe Palma Mallorca"
                                width={150}
                                height={150}
                                className="object-contain w-full h-full relative z-10"
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-2xl text-yellow-400 pointer-events-none z-20">
                                Σ
                            </span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-light tracking-wider tenali-ramakrishna">{dictionary.hero_section.icon2_title}</h3>
                            <p className="text-lg text-amber-400/80 uppercase tenali-ramakrishna">{dictionary.hero_section.icon2_text}</p>
                        </div>
                    </div>

                    {/* icon */}
                    <div className="text-center flex flex-col gap-6 items-center">
                        {/* Tercer botón luxury */}
                        <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center relative">
                            <span className="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                            <Image
                                src="/images/BotomLuxDark.webp"
                                alt="Experiencia tantrica única Mallorca"
                                width={150}
                                height={150}
                                className="object-contain w-full h-full relative z-10"
                            />
                            <span className="absolute inset-0 flex items-center justify-center text-2xl text-yellow-400 pointer-events-none z-20">
                                Φ
                            </span>
                        </div>
                        <div className="text-center ">
                            <h3 className="text-2xl font-light tracking-wider tenali-ramakrishna">{dictionary.hero_section.icon3_title}</h3>
                            <p className="text-lg text-amber-400/80 uppercase tenali-ramakrishna">{dictionary.hero_section.icon3_text}</p>
                        </div>
                    </div>
                </div>

                {/* Right service */}
                <div className="hidden lg:block space-y-6 col-span-1">
                    <div className="w-20 h-20 rounded-full w-full m-0">
                        <Image
                            src="/images/MantraButton.png"
                            alt="Masaje tantrico premium Palma de Mallorca"
                            width={150}
                            height={150}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="text-center flex flex-col items-center">
                        <h3 className="text-xl md:text-2xl font-light tracking-wider mb-4" dangerouslySetInnerHTML={{ __html: dictionary.hero_section.card2_title }}>
                        </h3>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed w-[250px]">
                            {dictionary.hero_section.card2_text}
                        </p>
                        <div className='flex flex-col w-[200px] justify-self-center'>
                            <ReserveNowButton text={dictionary.reserve_button_text} />

                            {/* Decorative dots */}
                            <div className="flex justify-center mt-6 gap-3 space-x-2">
                                <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
                                <div className="w-2 h-2 bg-amber-200 rounded-full"></div>
                                <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}