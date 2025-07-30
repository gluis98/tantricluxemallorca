'use client'

import React from 'react';
import Image from 'next/image';
import Header from '@/components/ui/sections/Header';
import Footer from '@/components/ui/sections/Footer';

// Define el tipo para un servicio
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

const services = [
  {
    id: 1,
    title: "PARAÍSO EXÓTICO & FANTASÍA",
    duration: "75 min",
    price: "€180",
    description: "Déjate llevar a un mundo donde todo es posible. Cada detalle se adapta a tus deseos y fantasías más íntimas. Tu placer no tiene límites en tu propio Paraíso de Fantasías.",
    features: ["Fantasías personalizadas", "Accesorios especiales", "Disfraces provocadores", "Experiencia única"],
    fullDescription: "En este masaje exclusivo, cada detalle se adapta a tus deseos y fantasías más íntimas. Si sueñas con una caricia distinta, un disfraz provocador, una mirada dominante o incluso una experiencia con accesorios (como vendas, esposas, grilletes, látigos suaves, arnés, disfraz y mucho más), este es tu espacio. Aquí, tu fantasía es la protagonista. Solo tienes que contarnos qué enciende tus sentidos... y lo haremos realidad.",
    image: "/images/exotic_paradise.webp"
  },
  {
    id: 2,
    title: "PREMIUM SENSUAL 4 MANOS",
    duration: "90 min",
    price: "€280",
    description: "Show exclusivo de striptease con baile sensual de pole dance. Ducha erótica compartida y masaje tántrico erótico profesional a cuatro manos.",
    features: ["Show de striptease", "Pole dance sensual", "Ducha erótica compartida", "Masaje 4 manos"],
    fullDescription: "Una experiencia única que incluye show exclusivo de striptease, baile sensual con pole dance, ducha erótica compartida con las dos masajistas, masaje tántrico erótico profesional a cuatro manos, momentos de complicidad y juego en el diván. Las masajistas visten lencería fina y exclusiva, elegida solo para ti. Sesión creada a tu ritmo y a tu deseo.",
    image: "/images/sensual_premium.webp"
  },
  {
    id: 3,
    title: "TANTRIC DELUXE",
    duration: "85 min",
    price: "€220",
    description: "Ducha erótica compartida con tu masajista. Masaje sensual cuerpo a cuerpo por delante y por detrás con técnicas eróticas profesionales.",
    features: ["Ducha erótica compartida", "Masaje cuerpo a cuerpo", "Doble terminación", "Ambiente romántico"],
    fullDescription: "En tu experiencia Tantric Deluxe disfrutarás de ducha erótica compartida con tu masajista, masaje sensual cuerpo a cuerpo por delante y por detrás, técnicas eróticas profesionales y seductoras, doble terminación manual (doble placer garantizado). Habitación ambientada con pétalos de rosa, velas y aromas delicados. Incluye copa de champán, vino o cerveza para acompañar el momento.",
    image: "/images/tantric_deluxe.webp"
  },
  {
    id: 4,
    title: "ARMONÍA TANTRA EN PAREJA",
    duration: "90 min",
    price: "€320",
    description: "Un ritual íntimo diseñado para reconectar con tu pareja y despertar juntos el deseo. Una o dos masajistas os guiarán en esta experiencia compartida.",
    features: ["Masaje para parejas", "Vela caliente", "Botella de champán", "Terminación compartida"],
    fullDescription: "Un ritual íntimo diseñado para reconectar con tu pareja y despertar juntos el deseo. Una o dos masajistas os guiarán en un masaje sensual cuerpo a cuerpo, donde ambos participaréis activamente con caricias, toques y juegos compartidos, recuperando la complicidad perdida. La sesión incluye masaje con vela caliente sobre el cuerpo, ambiente romántico con velas y pétalos, y una botella de champán para brindar mientras el placer fluye entre vosotros. El final será el momento más esperado: una terminación manual para ambos, sellando la experiencia en total armonía.",
    image: "/images/couples_harmony.webp"
  },
  {
    id: 5,
    title: "YACHT MASSAGE EXPERIENCE",
    duration: "80 min",
    price: "€350",
    description: "Sumérgete en una experiencia tántrica de lujo diseñada especialmente para ti, a bordo de tu yate privado. Conexión profunda entre cuerpo y deseo.",
    features: ["Experiencia en yate", "Aromas envolventes", "Música sensual", "Aceites cálidos"],
    fullDescription: "Sumérgete en una experiencia tántrica de lujo diseñada especialmente para ti, a bordo de tu yate privado. Cuidamos cada detalle: aromas envolventes, música sensual, aceites cálidos y una ambientación que transforma tu embarcación en un oasis de placer flotante. Este masaje es más que una sesión: es una conexión profunda entre cuerpo y deseo, guiada por manos expertas en un entorno íntimo y exclusivo. Ideal para quienes buscan desconectar del mundo y entregarse al arte del placer con total privacidad, entre el vaivén del mar y la magia del tacto.",
    image: "/images/experiencias_eroticas_unicas.webp"
  }
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);

  return (
    <div className="min-h-screen text-white relative">
      {/* Complex background with multiple gradients and radial effects */}
      <div className="absolute inset-0 bg-gray-950"></div>

      {/* Multiple radial gradients for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-900/30 via-transparent to-transparent"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(120, 53, 15, 0.4) 0%, transparent 50%)'
        }}></div>

      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(92, 51, 23, 0.3) 0%, transparent 40%)'
        }}></div>

      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 60% 80%, rgba(69, 39, 17, 0.25) 0%, transparent 35%)'
        }}></div>

      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 10% 70%, rgba(53, 45, 40, 0.2) 0%, transparent 45%)'
        }}></div>

      {/* Linear gradients for overall tone */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-amber-950/10 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-amber-950/10"></div>

      {/* Mandalas en las esquinas */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0">
        {/* Mandala izquierda */}
        <div className="absolute top-0 left-0 -translate-x-[60%] md:-translate-x-1/2 w-[600px] h-[600px]">
          <span className="glow-mandala"></span>
          <Image
            src="/images/Mandala.webp"
            alt="Left Mandala"
            width={600}
            height={600}
            className="object-contain w-full h-full relative z-10"
          />
        </div>
        {/* Mandala derecha */}
        <div className="absolute top-0 right-0 translate-x-[60%] md:translate-x-1/2 w-[600px] h-[600px]">
          <span className="glow-mandala"></span>
          <Image
            src="/images/Mandala.webp"
            alt="Right Mandala"
            width={600}
            height={600}
            className="object-contain w-full h-full relative z-10"
            style={{ transform: 'scaleX(-1)' }}
          />
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section - Actualizado para ser consistente con masajistas */}
          <div className="text-center mb-16">
            <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">OFRECEMOS EXPERIENCIAS</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">SERVICIOS ERÓTICOS</h1>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">EXCLUSIVIDAD Y PRIVACIDAD</h2>
            <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 tenali-ramakrishna">Descubre nuestro catálogo completo de servicios diseñados para despertar todos tus sentidos y ofrecerte experiencias transformadoras en un ambiente de máximo lujo</p>
          </div>

          {/* Services Grid */}
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
                  {/* <div className="absolute top-4 right-4 bg-amber-900/80 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-amber-400 text-sm font-light">{service.duration}</span>
                  </div> */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-light tracking-wider text-amber-400 mb-1">
                      {service.title}
                    </h3>
                    {/* <p className="text-2xl font-light text-white">{service.price}</p> */}
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
                      RESERVAR
                    </button>
                    <button 
                      className="px-4 py-2 border border-amber-600/30 rounded-3xl text-amber-400 text-sm hover:bg-amber-600/10 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                    >
                      VER MÁS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Packages Section */}
          <section className="py-16 mb-16">
            <div className="text-center mb-12">
              <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                PAQUETES ESPECIALES
              </p>
              <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                OFERTAS EXCLUSIVAS
              </h2>
              <div className="w-24 h-px bg-amber-400 mx-auto"></div>
            </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-lg p-8 border border-amber-600/30">
                 <div className="text-left flex flex-col h-full">
                   <div className="flex-1">
                     <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-2">
                       DESCUENTO PARA CLIENTES FIELES
                     </h3>
                     <p className="text-lg font-light text-white mb-4 tenali-ramakrishna">
                       TODOS LOS JUEVES
                     </p>
                     <div className="w-16 h-px bg-amber-400 mb-6"></div>
                     <p className="text-gray-300 leading-relaxed text-sm">
                       Los fieles merecen premio. Si ya has disfrutado de nuestros masajes antes, este jueves obtén un cupón de <span className="text-amber-400 font-semibold">20€ de descuento</span> en tu sesión de masaje. Una forma especial de agradecer tu confianza y lealtad.
                     </p>
                   </div>
                   <button 
                     onClick={() => window.location.href = '/whatsapp'}
                     className="w-full cursor-pointer tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors mt-8"
                   >
                     RESERVAR JUEVES
                   </button>
                 </div>
               </div>

               <div className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-lg p-8 border border-amber-600/30">
                 <div className="text-left flex flex-col h-full">
                   <div className="flex-1">
                     <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-2">
                       PLACER COMPARTIDO
                     </h3>
                     <p className="text-lg font-light text-white mb-4 tenali-ramakrishna">
                       TODOS LOS SÁBADOS
                     </p>
                     <div className="w-16 h-px bg-amber-400 mb-6"></div>
                     <p className="text-gray-300 leading-relaxed text-sm">
                       Cada sábado, ven acompañado... Si compartes el momento con un amigo, ambos disfrutaréis de un <span className="text-amber-400 font-semibold">10% de descuento</span> en vuestra experiencia. Porque el placer... se disfruta más entre dos.
                     </p>
                   </div>
                   <button 
                     onClick={() => window.location.href = '/whatsapp'}
                     className="w-full cursor-pointer tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors mt-8"
                   >
                     RESERVAR SÁBADO
                   </button>
                 </div>
               </div>

               <div className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-lg p-8 border border-amber-600/30">
                 <div className="text-left flex flex-col h-full">
                   <div className="flex-1">
                     <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-2">
                       DOMINGOS PARA PECAR
                     </h3>
                     <p className="text-lg font-light text-white mb-4 tenali-ramakrishna">
                       TODOS LOS DOMINGOS
                     </p>
                     <div className="w-16 h-px bg-amber-400 mb-6"></div>
                     <p className="text-gray-300 leading-relaxed text-sm">
                       Elige un masaje a cuatro manos con un precio exclusivo. Más manos... más placer. Una experiencia intensificada que multiplica las sensaciones y el éxtasis. Perfecto para quienes buscan una experiencia más profunda y envolvente.
                     </p>
                   </div>
                   <button 
                     onClick={() => window.location.href = '/whatsapp'}
                     className="w-full cursor-pointer tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors mt-8"
                   >
                     RESERVAR DOMINGO
                   </button>
                 </div>
               </div>
             </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                PREGUNTAS FRECUENTES
              </p>
              <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                TODO LO QUE NECESITAS SABER
              </h2>
              <div className="w-24 h-px bg-amber-400 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "¿Qué incluyen los servicios?",
                  answer: "Todos nuestros servicios incluyen consulta personalizada, ambiente climatizado, música ambiental, aceites premium y toallas calientes. Los servicios premium incluyen amenidades adicionales como champagne, jacuzzi privado y otros lujos especificados."
                },
                {
                  question: "¿Cómo puedo hacer una reserva?",
                  answer: "Puedes reservar a través de WhatsApp, nuestro formulario online o llamando directamente. Recomendamos reservar con al menos 24 horas de anticipación. Para servicios premium, se requiere reserva con 48 horas de antelación."
                },
                {
                  question: "¿Qué medidas de privacidad tienen?",
                  answer: "Garantizamos absoluta discreción y privacidad. Nuestras instalaciones cuentan con entradas privadas, no compartimos información de clientes y todo nuestro personal firma acuerdos de confidencialidad."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
                  <h3 className="text-lg font-light tracking-wider text-amber-400 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-lg border border-amber-600/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-light tracking-wider text-amber-400 mb-2">
                      {selectedService.title}
                    </h2>
                    <div className="flex items-center gap-4">
                      {/* <span className="text-2xl font-light text-white">{selectedService.price}</span> */}
                      {/* <span className="text-amber-500">{selectedService.duration}</span> */}
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src={selectedService.image}
                      alt={selectedService.title}
                      width={500}
                      height={400}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    
                    <h3 className="text-xl font-light tracking-wider text-amber-400 mb-4">
                      INCLUYE:
                    </h3>
                    <ul className="space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <span className="w-3 h-3 bg-amber-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-light tracking-wider text-amber-400 mb-4">
                      DESCRIPCIÓN COMPLETA:
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedService.fullDescription}
                    </p>
                    
                    <div className="space-y-4">
                      <button 
                        onClick={() => window.location.href = '/whatsapp'}
                        className="w-full tenali-ramakrishna border-1 cursor-pointer border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors"
                      >
                        RESERVAR AHORA
                      </button>
                      <button className="w-full border border-amber-600/30 cursor-pointer rounded-3xl text-amber-400 px-8 py-3 text-sm hover:bg-amber-600/10 transition-colors">
                        MÁS INFORMACIÓN
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default ServicesPage;