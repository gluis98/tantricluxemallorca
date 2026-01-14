'use client';

import React from 'react';
import Image from 'next/image';

export default function GallerySection({ dictionary }: {
  dictionary: {
    item1: string; item2: string; item3: string;
  }
}) {


    return (

    <section className="py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Galería de ambientes */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 mb-12">
          {/* Foto 1 */}
          <div className="flex-1 relative group">
            <div className="relative overflow-hidden rounded-xs border-1 border-yellow-200 bg-white">
              <Image
                src="/images/espacio_exclusivo_tantrico.webp"
                alt="Espacio Exclusivo Tantrico"
                width={400}
                height={500}
                className="w-full h-64 md:h-100 object-cover rounded-xs transition-transform duration-300 group-hover:scale-105"
              />

            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-light tracking-wider text-white tenali-ramakrishna">
                {dictionary.item1}
              </h3>
            </div>
          </div>

          {/* Foto 2 */}
          <div className="flex-1 relative group">
            <div className="relative overflow-hidden rounded-xs border-1 border-yellow-200 bg-white">
              <Image
                src="/images/ambiente_relante_en_palma.webp"
                alt="Ambiente Relajante En Palma"
                width={400}
                height={500}
                className="w-full h-64 md:h-100 object-cover rounded-xs transition-transform duration-300 group-hover:scale-105"
              />

            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-light tracking-wider text-white tenali-ramakrishna">
                {dictionary.item2}
              </h3>
            </div>
          </div>

          {/* Foto 3 */}
          <div className="flex-1 relative group">
            <div className="relative overflow-hidden rounded-xs border-1 border-yellow-200 bg-white">
              <Image
                src="/images/experiencias_eroticas_unicas.webp"
                alt="Experiencias Eroticas Unicas"
                width={400}
                height={500}
                className="w-full h-64 md:h-100 object-cover rounded-xs transition-transform duration-300 group-hover:scale-105"
              />

            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-light tracking-wider text-white tenali-ramakrishna">
                {dictionary.item3}
              </h3>
            </div>
          </div>
        </div>

        {/* Mensaje de nuevas masajistas en camino */}
        <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-900/30 shadow-2xl">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="text-5xl md:text-6xl">✨</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
              Nuevas Masajistas en Camino
            </h3>
            <div className="w-24 h-px bg-amber-400 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed max-w-3xl mx-auto tenali-ramakrishna">
              Estamos actualizando nuestros servicios para ofrecerte una experiencia aún más excepcional. 
              Pronto tendremos nuevas especialistas que se unirán a nuestro equipo, cada una con su toque único 
              y profesional. Mientras tanto, nuestras masajistas actuales están listas para brindarte el mejor 
              servicio de masaje tántrico en Mallorca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};