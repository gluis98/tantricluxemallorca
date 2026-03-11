'use client';

import React from 'react';
import ReserveNowButton from '@/components/ui/buttons/ReserveNowButton';

export default function CTASection({ dictionary }: {
  dictionary: {
    title: string;
    subtitle: string;
    button_text: string;
  };
}) {
  return (
    <section className="py-20 px-4 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black/40 to-amber-900/20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-8">
          <span className="text-6xl md:text-7xl">✨</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 gradiente-dorado cormorant-garamond">
          {dictionary.title}
        </h2>
        
        <div className="w-32 h-px bg-amber-400 mx-auto mb-8"></div>
        
        <p className="text-xl md:text-2xl font-light text-gray-300 mb-10 leading-relaxed tenali-ramakrishna max-w-2xl mx-auto">
          {dictionary.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <ReserveNowButton text={dictionary.button_text} />
          
          <a
            href="/whatsapp"
            className="tenali-ramakrishna border-2 border-amber-400/50 bg-transparent rounded-full hover:bg-amber-400/10 text-amber-300 px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105"
          >
            WhatsApp Directo
          </a>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-12 gap-3">
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
