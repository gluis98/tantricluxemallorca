'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/ui/sections/Hero';
import Gallery from '@/components/ui/sections/Gallery';
import ServicesSection from '@/components/ui/sections/Services';
import AboutSection from '@/components/ui/sections/About';
import ContactSection from '@/components/ui/sections/Contact';
import MasajistasModal from '@/components/banners/MasseursModal';
import { Locale } from '@/i18n-config';

export default function HomePageClient({ lang, dictionary }: {
  lang: Locale;
  dictionary: any;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const erikaImages = [
    "/images/masseurs/Erika/IMG_0843.jpeg",
    "/images/masseurs/Erika/IMG_0844.jpeg",
    "/images/masseurs/Erika/IMG_0865.jpeg",
    "/images/masseurs/Erika/IMG_0866.jpeg",
    "/images/masseurs/Erika/IMG_0872.jpeg",
    "/images/masseurs/Erika/IMG_0878.jpeg",
    "/images/masseurs/Erika/IMG_0880.jpeg"
  ];

  return (
    <>
      <main className="relative z-10 px-0 md:px-8 py-8">
        {/* Hero Section */}
        <HeroSection dictionary={dictionary.homepage} />

        {/* Gallery Section */}
        <Gallery dictionary={dictionary.homepage.gallery_section} />

        {/* Sección de Erika con Galería de Fotos */}
        <section className="py-16 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-900/30 shadow-2xl">
              
              {/* Título de la sección */}
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <span className="text-5xl md:text-6xl">✨</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
                  {dictionary.homepage.masseuse_section.title}
                </h2>
                <div className="w-24 h-px bg-amber-400 mx-auto mb-6"></div>
                <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed max-w-3xl mx-auto tenali-ramakrishna">
                  {dictionary.homepage.masseuse_section.description}
                </p>
              </div>

              {/* Grid de fotos de Erika */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {erikaImages.slice(0, 4).map((image, index) => (
                  <div 
                    key={index}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-amber-900/40 hover:border-amber-600/60 transition-all duration-300"
                    onClick={() => {
                      setCurrentImage(index);
                      setIsModalOpen(true);
                    }}
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={image}
                        alt={`Erika - Masajista Profesional ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      {/* Overlay oscuro en hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium tenali-ramakrishna">
                          Ver más
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nombre ERIKA prominente */}
              <div className="text-center mb-8">
                <h3 className="text-5xl md:text-7xl font-light tracking-[0.3em] gradiente-dorado cormorant-garamond mb-4">
                  ERIKA
                </h3>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px w-16 bg-amber-400"></div>
                  <p className="text-xl md:text-2xl font-light text-amber-300 tenali-ramakrishna">
                    {lang === 'en' 
                      ? "Specialist in Deluxe Sensual Tantric Massage" 
                      : lang === 'de' 
                      ? "Spezialistin für Deluxe Sinnliche Tantra-Massage"
                      : "Especialista en Masaje Tantrico Sensual Deluxe"}
                  </p>
                  <div className="h-px w-16 bg-amber-400"></div>
                </div>
                
                {/* Badge de estrellas y reviews */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-2xl">★</span>
                    ))}
                  </div>
                  <span className="text-gray-400 text-lg tenali-ramakrishna">(89 {lang === 'en' ? 'reviews' : lang === 'de' ? 'Bewertungen' : 'opiniones'})</span>
                </div>

                {/* Badge disponible */}
                <div className="inline-flex items-center gap-2 bg-green-900/30 border border-green-600/40 rounded-full px-6 py-2 mb-8">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium tenali-ramakrishna">
                    {lang === 'en' ? 'Available Now' : lang === 'de' ? 'Jetzt Verfügbar' : 'Disponible Ahora'}
                  </span>
                </div>
              </div>

              {/* Botón de más información */}
              <div className="text-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="tenali-ramakrishna border-2 border-amber-400 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full hover:from-amber-600/30 hover:to-amber-800/30 text-amber-300 px-10 md:px-16 py-4 md:py-5 text-xl md:text-2xl font-medium tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-900/50"
                >
                  {dictionary.homepage.masseuse_section.button_text}
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection lang={lang} dictionary={dictionary.homepage.services_section} services={dictionary.servicesPage.services} />

        {/* About Us Section */}
        <AboutSection dictionary={dictionary.homepage.about_us_section} />

        {/* Contact Section */}
        <ContactSection dictionary={dictionary.homepage.contact_section} services={dictionary.servicesPage.services} />
      </main>

      {/* Masseuses Modal */}
      <MasajistasModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} lang={lang} />
    </>
  );
}
