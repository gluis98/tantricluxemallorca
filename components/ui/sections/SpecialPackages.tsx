'use client';

import React from 'react';
import { i18n } from '@/i18n-config';

type Package = {
  title: string;
  day: string;
  description: string;
  buttonText: string;
};

export default function SpecialPackagesSection({ 
  lang, 
  dictionary, 
  packages 
}: {
  lang: string;
  dictionary: {
    pre_title: string;
    title: string;
  };
  packages: Package[];
}) {
  return (
    <section className="py-16 px-4 lg:px-8 bg-gradient-to-b from-transparent to-amber-900/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
            {dictionary.pre_title}
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado cormorant-garamond">
            {dictionary.title}
          </h2>
          <div className="w-24 h-px bg-amber-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-900/30 hover:border-amber-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/30 group"
            >
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-amber-600/30 to-amber-800/30 rounded-full px-4 py-2 mb-4">
                  <span className="text-amber-300 text-sm font-medium tenali-ramakrishna tracking-wider">
                    {pkg.day}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light tracking-wider text-amber-400 mb-4 cormorant-garamond">
                  {pkg.title}
                </h3>
              </div>
              
              <p 
                className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base tenali-ramakrishna"
                dangerouslySetInnerHTML={{ __html: pkg.description }}
              />

              <button
                onClick={() => window.location.href = '/whatsapp'}
                className="w-full tenali-ramakrishna border border-amber-400/50 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full hover:from-amber-600/30 hover:to-amber-800/30 text-amber-300 px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300 hover:scale-105"
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
