'use client';

import React from 'react';

type Step = {
  number: string;
  title: string;
  description: string;
};

const getSteps = (lang: string): Step[] => {
  if (lang === 'en') {
    return [
      {
        number: '01',
        title: 'BOOK YOUR APPOINTMENT',
        description: 'Contact via WhatsApp or complete our form. Guaranteed response in less than 1 hour.'
      },
      {
        number: '02',
        title: 'PERSONALIZED CONSULTATION',
        description: 'We guide you to choose the perfect service according to your preferences and desires.'
      },
      {
        number: '03',
        title: 'ENJOY THE EXPERIENCE',
        description: 'Relax and let yourself go in our luxury environment with certified professionals.'
      },
      {
        number: '04',
        title: 'TRANSFORMATION',
        description: 'Live a transformative experience that awakens your senses and connects with your inner energy.'
      }
    ];
  } else if (lang === 'de') {
    return [
      {
        number: '01',
        title: 'TERMIN BUCHEN',
        description: 'Kontaktieren Sie uns über WhatsApp oder füllen Sie unser Formular aus. Garantierte Antwort in weniger als 1 Stunde.'
      },
      {
        number: '02',
        title: 'PERSONALISIERTE BERATUNG',
        description: 'Wir führen Sie bei der Auswahl des perfekten Service nach Ihren Vorlieben und Wünschen.'
      },
      {
        number: '03',
        title: 'ERLEBNIS GENIEßEN',
        description: 'Entspannen Sie sich und lassen Sie sich in unserer Luxusumgebung von zertifizierten Profis verwöhnen.'
      },
      {
        number: '04',
        title: 'TRANSFORMATION',
        description: 'Erleben Sie eine transformative Erfahrung, die Ihre Sinne weckt und sich mit Ihrer inneren Energie verbindet.'
      }
    ];
  } else {
    return [
      {
        number: '01',
        title: 'RESERVA TU CITA',
        description: 'Contacta por WhatsApp o completa nuestro formulario. Respuesta garantizada en menos de 1 hora.'
      },
      {
        number: '02',
        title: 'CONSULTA PERSONALIZADA',
        description: 'Te guiamos para elegir el servicio perfecto según tus preferencias y deseos.'
      },
      {
        number: '03',
        title: 'DISFRUTA LA EXPERIENCIA',
        description: 'Relájate y déjate llevar en nuestro ambiente de lujo con profesionales certificadas.'
      },
      {
        number: '04',
        title: 'TRANSFORMACIÓN',
        description: 'Vive una experiencia transformadora que despierta tus sentidos y conecta con tu energía interior.'
      }
    ];
  }
};

export default function ProcessSection({ lang, dictionary }: {
  lang: string;
  dictionary: {
    pre_title: string;
    title: string;
  };
}) {
  const steps = getSteps(lang);
  return (
    <section className="py-16 px-4 lg:px-8 bg-gradient-to-b from-amber-900/5 to-transparent">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/30 hover:border-amber-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 h-full flex flex-col">
                <div className="text-6xl md:text-7xl font-light text-amber-400/20 mb-4 cormorant-garamond">
                  {step.number}
                </div>
                <h3 className="text-xl md:text-2xl font-light tracking-wider text-amber-400 mb-4 cormorant-garamond">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow tenali-ramakrishna">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-amber-400/30 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
