'use client';

import React, { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQSection({ dictionary, faqs }: {
  dictionary: {
    pre_title: string;
    title: string;
  };
  faqs: FAQ[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
            {dictionary.pre_title}
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado cormorant-garamond">
            {dictionary.title}
          </h2>
          <div className="w-24 h-px bg-amber-400 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-xl border border-amber-900/20 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-amber-900/10 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-light tracking-wider text-amber-400 pr-4 tenali-ramakrishna">
                  {faq.question}
                </h3>
                <span className={`text-amber-400 text-2xl transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 pt-0">
                  <p className="text-gray-300 leading-relaxed tenali-ramakrishna">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm tenali-ramakrishna">
            ¿Tienes más preguntas?{' '}
            <a 
              href="/whatsapp" 
              className="text-amber-400 hover:text-amber-300 underline transition-colors"
            >
              Contáctanos por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
