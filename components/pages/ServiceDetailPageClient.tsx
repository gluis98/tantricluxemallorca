'use client';

import React from 'react';
import Link from 'next/link';

type ServiceDetail = {
  slug: string;
  title: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  description: string;
  full_description?: string;
  features: string[];
  duration: string;
  price: string;
  image?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

interface ServiceDetailPageClientProps {
  service: ServiceDetail;
  dictionary: {
    reserve_button: string;
    whatsapp_button: string;
    duration_label: string;
    price_label: string;
    features_title: string;
    description_title: string;
    benefits_title: string;
    book_now_title: string;
    related_services_title: string;
    faq_title?: string;
  };
  relatedServices?: Array<{
    slug: string;
    title: string;
    description: string;
  }>;
  lang: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export default function ServiceDetailPageClient({
  service,
  dictionary,
  relatedServices = [],
  lang,
  faqs = []
}: ServiceDetailPageClientProps) {
  const handleReserve = () => {
    window.location.href = `/${lang}/whatsapp`;
  };

  return (
    <main className="relative z-10 px-4 md:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs para SEO */}
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-gray-400 flex-wrap">
            <li>
              <Link href={`/${lang}`} className="hover:text-amber-400 transition-colors">
                {lang === 'es' ? 'Inicio' : lang === 'en' ? 'Home' : 'Startseite'}
              </Link>
            </li>
            <li className="text-amber-400">/</li>
            <li>
              <Link href={`/${lang}/servicios`} className="hover:text-amber-400 transition-colors">
                {lang === 'es' ? 'Servicios' : lang === 'en' ? 'Services' : 'Leistungen'}
              </Link>
            </li>
            <li className="text-amber-400">/</li>
            <li className="text-amber-300" aria-current="page">
              {service.title}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
            {dictionary.description_title}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
            {service.title}
          </h1>
          <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 tenali-ramakrishna max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Service Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-8 border border-amber-900/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center">
                <span className="text-amber-400 text-2xl">⏱️</span>
              </div>
              <div>
                <h3 className="text-amber-400 text-xl tenali-ramakrishna">{dictionary.duration_label}</h3>
                <p className="text-gray-300 text-2xl font-light">{service.duration}</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-8 border border-amber-900/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center">
                <span className="text-amber-400 text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-amber-400 text-xl tenali-ramakrishna">{dictionary.price_label}</h3>
                <p className="text-gray-300 text-2xl font-light">{service.price}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 text-amber-400 cormorant-garamond text-center">
            {dictionary.features_title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/30 hover:border-amber-600/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-amber-400 text-2xl">✨</span>
                  <p className="text-gray-300 text-lg font-light leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-16 bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-900/30">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 text-amber-400 cormorant-garamond text-center">
            {dictionary.description_title}
          </h2>
          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 text-lg md:text-xl font-light leading-relaxed text-center max-w-4xl mx-auto mb-8 space-y-4">
              <p>{service.description}</p>
              {service.full_description && (
                <p className="text-base md:text-lg">{service.full_description}</p>
              )}
            </div>
            {/* Beneficios adicionales */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-2xl flex-shrink-0">🌿</span>
                <div>
                  <h3 className="text-amber-300 text-lg font-light mb-2 tenali-ramakrishna">
                    {lang === 'es' ? 'Relajación Profunda' : lang === 'en' ? 'Deep Relaxation' : 'Tiefe Entspannung'}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {lang === 'es' 
                      ? 'Libera tensiones acumuladas y alcanza un estado de calma y bienestar integral.'
                      : lang === 'en'
                      ? 'Release accumulated tensions and reach a state of calm and integral well-being.'
                      : 'Lösen Sie angesammelte Spannungen und erreichen Sie einen Zustand der Ruhe und des ganzheitlichen Wohlbefindens.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-2xl flex-shrink-0">💆</span>
                <div>
                  <h3 className="text-amber-300 text-lg font-light mb-2 tenali-ramakrishna">
                    {lang === 'es' ? 'Técnicas Especializadas' : lang === 'en' ? 'Specialized Techniques' : 'Spezialisierte Techniken'}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {lang === 'es'
                      ? 'Aplicadas por profesionales certificados con años de experiencia.'
                      : lang === 'en'
                      ? 'Applied by certified professionals with years of experience.'
                      : 'Angewendet von zertifizierten Fachkräften mit jahrelanger Erfahrung.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-2xl flex-shrink-0">✨</span>
                <div>
                  <h3 className="text-amber-300 text-lg font-light mb-2 tenali-ramakrishna">
                    {lang === 'es' ? 'Ambiente Exclusivo' : lang === 'en' ? 'Exclusive Environment' : 'Exklusive Umgebung'}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {lang === 'es'
                      ? 'Espacios diseñados para tu comodidad y privacidad total.'
                      : lang === 'en'
                      ? 'Spaces designed for your comfort and total privacy.'
                      : 'Räume, die für Ihren Komfort und völlige Privatsphäre gestaltet sind.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-2xl flex-shrink-0">🔒</span>
                <div>
                  <h3 className="text-amber-300 text-lg font-light mb-2 tenali-ramakrishna">
                    {lang === 'es' ? 'Máxima Privacidad' : lang === 'en' ? 'Maximum Privacy' : 'Maximale Privatsphäre'}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {lang === 'es'
                      ? 'Discreción absoluta garantizada en cada sesión.'
                      : lang === 'en'
                      ? 'Absolute discretion guaranteed in every session.'
                      : 'Absolute Diskretion in jeder Sitzung garantiert.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 text-amber-400 cormorant-garamond">
            {dictionary.book_now_title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleReserve}
              className="tenali-ramakrishna border border-amber-400 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full hover:from-amber-600/30 hover:to-amber-800/30 text-amber-300 px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {dictionary.reserve_button}
            </button>
            <Link
              href={`/${lang}/whatsapp`}
              className="tenali-ramakrishna border border-green-400 bg-gradient-to-r from-green-900/30 to-green-800/30 rounded-full hover:from-green-600/40 hover:to-green-600/40 text-white px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <span>💬</span>
              {dictionary.whatsapp_button}
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 text-amber-400 cormorant-garamond text-center">
              {dictionary.faq_title || (lang === 'es' ? 'Preguntas Frecuentes' : lang === 'en' ? 'Frequently Asked Questions' : 'Häufig gestellte Fragen')}
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/30"
                >
                  <h3 className="text-amber-400 text-xl font-light mb-3 tenali-ramakrishna">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 text-amber-400 cormorant-garamond text-center">
              {dictionary.related_services_title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${lang}/servicios/${related.slug}`}
                  className="bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/30 hover:border-amber-600/40 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-light tracking-wider text-amber-400 mb-3 tenali-ramakrishna group-hover:text-amber-300 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
