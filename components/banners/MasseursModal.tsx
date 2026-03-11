'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface MasajistasModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: string;
}

const MasajistasModal = ({ isOpen, onClose, lang = 'es' }: MasajistasModalProps) => {
  const [animateCards, setAnimateCards] = useState(false);

  const masajistas = [
    {
      id: 1,
      name: "Erika",
      image: "/images/masseurs/Erika/IMG_0843.jpeg",
      specialty: lang === 'en' 
        ? "Specialist in Deluxe Sensual Tantric Massage" 
        : lang === 'de' 
        ? "Spezialistin für Deluxe Sinnliche Tantra-Massage"
        : "Especialista en Masaje Tantrico Sensual Deluxe"
    }
  ];

  const translations = {
    es: {
      title: "Conoce a Nuestra Especialista",
      subtitle: "Belleza, elegancia y experiencia exclusiva",
      available: "Disponible Ahora",
      reserve: "RESERVAR CON",
      premium: "PREMIUM"
    },
    en: {
      title: "Meet Our Specialist",
      subtitle: "Beauty, elegance and exclusive experience",
      available: "Available Now",
      reserve: "BOOK WITH",
      premium: "PREMIUM"
    },
    de: {
      title: "Lernen Sie Unsere Spezialistin Kennen",
      subtitle: "Schönheit, Eleganz und exklusives Erlebnis",
      available: "Jetzt Verfügbar",
      reserve: "BUCHEN MIT",
      premium: "PREMIUM"
    }
  };

  const t = translations[lang as keyof typeof translations] || translations.es;

  useEffect(() => {
    if (isOpen) {
      // Animación de las tarjetas después de que aparece el modal
      setTimeout(() => {
        setAnimateCards(true);
      }, 200);
    } else {
      setAnimateCards(false);
    }
  }, [isOpen]);

  const closeModal = () => {
    setAnimateCards(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop con blur mejorado */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={closeModal}
        style={{
          animation: isOpen ? 'fadeIn 0.5s ease-out' : 'fadeOut 0.3s ease-in'
        }}
      />

                {/* Botón cerrar */}
                <button 
            onClick={closeModal}
            className="absolute top-1 right-1 w-7 h-7 rounded-full bg-amber-900/60 hover:bg-amber-900/40 flex items-center justify-center transition-colors group"
          >
            <span className="text-amber-400 text-xl group-hover:rotate-90 transition-transform duration-300">×</span>
          </button>
      
             {/* Modal Container */}
       <div className="relative z-10 w-full max-w-3xl mx-4 h-auto overflow-hidden">
                 <div 
           className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border border-amber-900/30 p-6 md:p-8 h-full flex flex-col relative"
          style={{
           animation: isOpen ? 'modalSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'modalSlideOut 0.3s ease-in'
          }}
        >

                     {/* Título del Modal */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-light tracking-wider gradiente-dorado cormorant-garamond mb-2">
              {t.title}
            </h2>
            <div className="w-24 h-px bg-amber-400 mx-auto mb-4"></div>
            <p className="text-base md:text-lg font-light text-gray-300 tenali-ramakrishna">
              {t.subtitle}
              </p>
          </div>

                     {/* Card de Erika - Centrada */}
          <div className="flex justify-center">
            {masajistas.map((masajista, index) => {
              return (
                <div
                  key={masajista.id}
                  className={`transform transition-all duration-700 ease-out w-full max-w-md ${
                    animateCards 
                      ? 'scale-100 opacity-100' 
                      : 'scale-90 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                    
                    <div className="relative h-full">
                      <Link
                        href="/whatsapp" 
                        className="block w-full h-[400px] md:h-[500px] rounded-2xl bg-gradient-to-br from-amber-900/30 to-gray-800/50 overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl border border-amber-900/20"
                      >
                        <div className="relative w-full h-full">
                        <Image
                          src={masajista.image}
                          alt={masajista.name}
                            fill
                            className="object-cover"
                            priority
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          
                          {/* Información sobre la imagen */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                            <h3 className="text-3xl md:text-4xl font-light tracking-wider text-amber-400 cormorant-garamond mb-2">
                              {masajista.name}
                            </h3>
                            <p className="text-sm md:text-base text-gray-200 font-light tenali-ramakrishna mb-4">
                              {masajista.specialty}
                            </p>
                            
                            {/* Badge disponible */}
                            <div className="flex items-center justify-center space-x-2 text-sm text-green-400 mb-3">
                              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="font-medium tenali-ramakrishna">{t.available}</span>
                            </div>

                            {/* Botón de reserva */}
                            <div className="inline-block">
                              <span className="tenali-ramakrishna border border-amber-400 bg-gradient-to-r from-amber-600/30 to-amber-800/30 rounded-full hover:from-amber-600/40 hover:to-amber-800/40 text-amber-300 px-6 py-2.5 text-sm font-medium tracking-wider transition-all duration-300 inline-block shadow-lg">
                                {t.reserve} {masajista.name.toUpperCase()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      
                      {/* Badge de Premium */}
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs px-4 py-2 rounded-full font-semibold shadow-xl z-10">
                        ⭐ {t.premium}
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes modalSlideIn {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(-20px);
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes modalSlideOut {
          from { 
            opacity: 1; 
            transform: scale(1) translateY(0);
          }
          to { 
            opacity: 0; 
            transform: scale(0.9) translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default MasajistasModal;