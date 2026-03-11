'use client';

import React from 'react';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const getFeatures = (lang: string): Feature[] => {
  if (lang === 'en') {
    return [
      {
        icon: '🔒',
        title: 'ABSOLUTE PRIVACY',
        description: 'We guarantee total discretion and confidentiality in every session. Private entrances and intimate atmosphere.'
      },
      {
        icon: '⭐',
        title: 'CERTIFIED PROFESSIONALS',
        description: 'Highly trained masseuses with international certification in advanced tantric techniques.'
      },
      {
        icon: '💎',
        title: 'LUXURY ENVIRONMENT',
        description: 'Premium facilities with premium essential oils, ambient music and climate-controlled environment.'
      },
      {
        icon: '🌿',
        title: 'ANCESTRAL TECHNIQUES',
        description: 'We combine traditional tantra wisdom with modern techniques for a unique experience.'
      },
      {
        icon: '✨',
        title: 'PERSONALIZED EXPERIENCES',
        description: 'Each session adapts to your needs and desires to create the perfect experience for you.'
      },
      {
        icon: '🎯',
        title: 'GUARANTEED RESULTS',
        description: 'More than 5000 satisfied clients. Transformative experiences that awaken your senses.'
      }
    ];
  } else if (lang === 'de') {
    return [
      {
        icon: '🔒',
        title: 'ABSOLUTE PRIVATSPHÄRE',
        description: 'Wir garantieren absolute Diskretion und Vertraulichkeit bei jeder Sitzung. Private Eingänge und intime Atmosphäre.'
      },
      {
        icon: '⭐',
        title: 'ZERTIFIZIERTE PROFIS',
        description: 'Hochqualifizierte Masseurinnen mit internationaler Zertifizierung in fortgeschrittenen Tantra-Techniken.'
      },
      {
        icon: '💎',
        title: 'LUXUS-UMGEBUNG',
        description: 'Premium-Einrichtungen mit Premium-Ätherischen Ölen, Ambient-Musik und klimatisierter Umgebung.'
      },
      {
        icon: '🌿',
        title: 'TRADITIONELLE TECHNIKEN',
        description: 'Wir kombinieren traditionelle Tantra-Weisheit mit modernen Techniken für ein einzigartiges Erlebnis.'
      },
      {
        icon: '✨',
        title: 'PERSONALISIERTE ERLEBNISSE',
        description: 'Jede Sitzung passt sich Ihren Bedürfnissen und Wünschen an, um das perfekte Erlebnis für Sie zu schaffen.'
      },
      {
        icon: '🎯',
        title: 'GARANTIERTE ERGEBNISSE',
        description: 'Mehr als 5000 zufriedene Kunden. Transformative Erlebnisse, die Ihre Sinne wecken.'
      }
    ];
  } else {
    return [
      {
        icon: '🔒',
        title: 'PRIVACIDAD ABSOLUTA',
        description: 'Garantizamos discreción total y confidencialidad en cada sesión. Entradas privadas y ambiente íntimo.'
      },
      {
        icon: '⭐',
        title: 'PROFESIONALES CERTIFICADAS',
        description: 'Masajistas altamente capacitadas con certificación internacional en técnicas tántricas avanzadas.'
      },
      {
        icon: '💎',
        title: 'AMBIENTE DE LUJO',
        description: 'Instalaciones premium con aceites esenciales premium, música ambiental y ambiente climatizado.'
      },
      {
        icon: '🌿',
        title: 'TÉCNICAS ANCESTRALES',
        description: 'Combinamos sabiduría tradicional del tantra con técnicas modernas para una experiencia única.'
      },
      {
        icon: '✨',
        title: 'EXPERIENCIAS PERSONALIZADAS',
        description: 'Cada sesión se adapta a tus necesidades y deseos para crear la experiencia perfecta para ti.'
      },
      {
        icon: '🎯',
        title: 'RESULTADOS GARANTIZADOS',
        description: 'Más de 5000 clientes satisfechos. Experiencias transformadoras que despiertan tus sentidos.'
      }
    ];
  }
};

export default function FeaturesSection({ lang, dictionary }: {
  lang: string;
  dictionary: {
    pre_title: string;
    title: string;
  };
}) {
  const features = getFeatures(lang);
  return (
    <section className="py-16 px-4 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-xl p-6 border border-amber-900/20 hover:border-amber-600/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 group"
            >
              <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-light tracking-wider text-amber-400 mb-3 text-center cormorant-garamond">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed text-center tenali-ramakrishna">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
