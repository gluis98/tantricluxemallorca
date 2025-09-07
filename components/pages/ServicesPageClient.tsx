'use client';

import React from 'react';
import Image from 'next/image';

type Service = {
  id: number;
  title: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  fullDescription: string;
  image: string;
};

type Package = {
  title: string;
  day: string;
  description: string;
  buttonText: string;
}

type Faq = {
  question: string;
  answer: string;
}

interface ServicesPageClientProps {
  services: Service[];
  packages: Package[];
  faqs: Faq[];
  dictionary: any;
}

const ServicesPageClient: React.FC<ServicesPageClientProps> = ({ services, packages, faqs, dictionary }) => {
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);

  return (
    <main className="relative z-10 px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">{dictionary.pre_title}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">{dictionary.title}</h1>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">{dictionary.subtitle}</h2>
          <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 tenali-ramakrishna">{dictionary.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg border border-amber-900/20 hover:border-amber-600/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/20 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-light tracking-wider text-amber-400 mb-1">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <button
                    onClick={() => window.location.href = '/whatsapp'}
                    className="flex-1 tenali-ramakrishna border-1 border-yellow-400/50 bg-gradient-to-r from-amber-900/30 to-amber-800/30 rounded-3xl hover:from-yellow-600/40 hover:to-amber-600/40 text-white px-4 py-2 text-sm font-medium tracking-wider transition-all duration-300"
                  >
                    {dictionary.reserve_button}
                  </button>
                  <button
                    className="px-4 py-2 border border-amber-600/30 rounded-3xl text-amber-400 text-sm hover:bg-amber-600/10 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                  >
                    {dictionary.see_more_button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Packages Section */}
        <section className="py-16 mb-16">
          <div className="text-center mb-12">
            <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">{dictionary.packages_pre_title}</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">{dictionary.packages_title}</h2>
            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-lg p-8 border border-amber-600/30">
                <div className="text-left flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-2">{pkg.title}</h3>
                    <p className="text-lg font-light text-white mb-4 tenali-ramakrishna">{pkg.day}</p>
                    <div className="w-16 h-px bg-amber-400 mb-6"></div>
                    <p className="text-gray-300 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: pkg.description }}></p>
                  </div>
                  <button onClick={() => window.location.href = '/whatsapp'} className="w-full cursor-pointer tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors mt-8">
                    {pkg.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">{dictionary.faq_pre_title}</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">{dictionary.faq_title}</h2>
            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
                <h3 className="text-lg font-light tracking-wider text-amber-400 mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
            <div className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-lg border border-amber-600/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-light tracking-wider text-amber-400 mb-2">{selectedService.title}</h2>
                  </div>
                  <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-white text-2xl">×</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image src={selectedService.image} alt={selectedService.title} width={500} height={400} className="w-full h-64 object-cover rounded-lg mb-6" />
                    <h3 className="text-xl font-light tracking-wider text-amber-400 mb-4">{dictionary.modal_includes}</h3>
                    <ul className="space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300"><span className="w-3 h-3 bg-amber-400 rounded-full mr-3"></span>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-light tracking-wider text-amber-400 mb-4">{dictionary.modal_description}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{selectedService.fullDescription}</p>
                    <div className="space-y-4">
                      <button onClick={() => window.location.href = '/whatsapp'} className="w-full tenali-ramakrishna border-1 cursor-pointer border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors">{dictionary.modal_reserve_button}</button>
                      <button className="w-full border border-amber-600/30 cursor-pointer rounded-3xl text-amber-400 px-8 py-3 text-sm hover:bg-amber-600/10 transition-colors">{dictionary.modal_more_info_button}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ServicesPageClient;