'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type Masseuse = {
  id: number;
  name: string;
  age: number;
  specialty: string;
  image: string;
  images: string[];
  description: string;
  skills: string[];
  rating: number;
  reviews: number;
};

interface MasseuseCardProps {
  masseuse: Masseuse;
  dictionary: any;
}

function MasajistaCard({ masseuse, dictionary }: MasseuseCardProps) {
  const images = masseuse.images || [masseuse.image];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="group bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-0 border border-amber-900/30 hover:border-amber-600/40 transition-all duration-500 shadow-2xl hover:shadow-amber-900/30 overflow-hidden relative">
      <div className="relative w-full h-96 overflow-hidden md:h-[500px] flex items-center justify-center bg-black">
        <Image
          src={images[current]}
          alt={masseuse.name}
          fill
          className="object-cover object-center transition-all duration-700 scale-105 group-hover:scale-110"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full border-2 border-amber-400 transition-all duration-300 ${current === idx ? 'bg-amber-400' : 'bg-black/40'}`}
                onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
                aria-label={`Ver imagen ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="relative z-20 px-8 py-8 md:py-10 flex flex-col items-center text-center bg-gradient-to-t from-black/80 via-black/60 to-transparent">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-3xl md:text-4xl font-light tracking-wider text-amber-400 tenali-ramakrishna">
            {masseuse.name}
          </h3>
          <span className="text-lg md:text-xl text-amber-200 font-light ml-2">({masseuse.age} {dictionary.age_text})</span>
        </div>
        <div className="flex items-center justify-center mb-2">
          {[...Array(masseuse.rating)].map((_, i) => (
            <span key={i} className="text-amber-400 text-xl">★</span>
          ))}
          <span className="text-gray-400 text-sm ml-2">({masseuse.reviews} {dictionary.reviews_text})</span>
        </div>
        <p className="text-lg font-light text-amber-300 mb-3 tenali-ramakrishna">
          {masseuse.specialty}
        </p>
        <p className="text-gray-200 mb-4 leading-relaxed text-base">
          {masseuse.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {masseuse.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="text-xs bg-amber-900/30 text-amber-300 px-3 py-1 rounded-full border border-amber-600/30"
            >
              {skill}
            </span>
          ))}
        </div>
        <button
          onClick={() => window.location.href = '/whatsapp'}
          className="tenali-ramakrishna border border-amber-400 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full hover:from-amber-600/30 hover:to-amber-800/30 text-amber-300 px-8 py-3 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105 mt-2 shadow-lg"
        >
          {dictionary.reserve_button_text} {masseuse.name.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default function MasseusesPageClient({ dictionary, masseuses }: { dictionary: any, masseuses: Masseuse[] }) {
  return (
    <main className="relative z-10 px-4 md:px-8 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">{dictionary.pre_title}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">{dictionary.title}</h1>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">{dictionary.subtitle}</h2>
          <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 tenali-ramakrishna">{dictionary.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {masseuses.sort((a, b) => a.id - b.id).map((masseuse) => (
            <MasajistaCard key={masseuse.id} masseuse={masseuse} dictionary={dictionary} />
          ))}
        </div>
      </div>
    </main>
  );
};