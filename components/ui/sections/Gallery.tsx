'use client';

import React from 'react';
import Image from 'next/image';

export default function GallerySection({ dictionary }: {
  dictionary: {
    item1: string; item2: string; item3: string;
  }
}) {

    // Aurora images
    const auroraImages = [
      { src: '/images/masseurs/Aurora/aurora1.webp', alt: 'Aurora - Masajista Tantrica Mallorca 1' },
      { src: '/images/masseurs/Aurora/aurora2.webp', alt: 'Aurora - Masajista Tantrica Mallorca 2' },
      { src: '/images/masseurs/Aurora/aurora3.webp', alt: 'Aurora - Masajista Tantrica Mallorca 3' },
      { src: '/images/masseurs/Aurora/aurora4.webp', alt: 'Aurora - Masajista Tantrica Mallorca 4' },
      { src: '/images/masseurs/Aurora/aurora5.webp', alt: 'Aurora - Masajista Tantrica Mallorca 5' },
      { src: '/images/masseurs/Aurora/aurora6.webp', alt: 'Aurora - Masajista Tantrica Mallorca 6' },
    ];

    // Angela images
    const angelaImages = [
      { src: '/images/masseurs/Angela/angela1.webp', alt: 'Angela - Masajista Tantrica Palma 1' },
      { src: '/images/masseurs/Angela/angela2.webp', alt: 'Angela - Masajista Tantrica Palma 2' },
      { src: '/images/masseurs/Angela/angela3.webp', alt: 'Angela - Masajista Tantrica Palma 3' },
      { src: '/images/masseurs/Angela/angela4.webp', alt: 'Angela - Masajista Tantrica Palma 4' },
      { src: '/images/masseurs/Angela/angela5.webp', alt: 'Angela - Masajista Tantrica Palma 5' },
      { src: '/images/masseurs/Angela/angela6.webp', alt: 'Angela - Masajista Tantrica Palma 6' },
    ];

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

        {/* Aurora Gallery Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-amber-400 cormorant-garamond">
              Aurora
            </h2>
            <div className="w-24 h-px bg-amber-400 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {auroraImages.map((image, index) => (
              <div key={`aurora-${index}`} className="relative group">
                <div className="relative overflow-hidden rounded-xs border-1 border-yellow-200 bg-white aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-xs transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Angela Gallery Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-amber-400 cormorant-garamond">
              Angela
            </h2>
            <div className="w-24 h-px bg-amber-400 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {angelaImages.map((image, index) => (
              <div key={`angela-${index}`} className="relative group">
                <div className="relative overflow-hidden rounded-xs border-1 border-yellow-200 bg-white aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-xs transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};