'use client'

import React from 'react';
import Image from 'next/image';
import Header from '@/components/ui/sections/Header';

// Define el tipo para un servicio
type Service = {
  id: number;
  title: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  fullDescription: string;
};

const services = [
  {
    id: 1,
    title: "TANTRIC DELUXE",
    duration: "90 min",
    price: "€450",
    description: "Una experiencia sensorial completa que combina técnicas ancestrales tántricas con el lujo moderno. Incluye aromaterapia personalizada y ambientación exclusiva.",
    features: ["Aromaterapia premium", "Música personalizada", "Aceites esenciales importados", "Ambiente privado"],
    fullDescription: "Sumérgete en una experiencia transformadora donde el arte ancestral del tantra se encuentra con el lujo contemporáneo. Nuestro servicio Tantric Deluxe está diseñado para despertar todos tus sentidos a través de técnicas milenarias adaptadas al mundo moderno. Cada sesión comienza con una consulta personalizada para adaptar la experiencia a tus necesidades específicas."
  },
  {
    id: 2,
    title: "SENSUAL PREMIUM",
    duration: "120 min",
    price: "€650",
    description: "Nuestro servicio más exclusivo, diseñado para despertar todos los sentidos. Una experiencia transformadora en un ambiente de absoluta privacidad.",
    features: ["Champagne de bienvenida", "Jacuzzi privado", "Masaje cuatro manos", "Suite VIP"],
    fullDescription: "La experiencia más lujosa y exclusiva de Tantric Luxe Mallorca. El Sensual Premium representa la cumbre de nuestros servicios, ofreciendo una experiencia inmersiva de dos horas en nuestra suite VIP. Esta experiencia única incluye rituales de preparación, técnicas avanzadas de masaje tántrico y un ambiente diseñado específicamente para el máximo placer y relajación."
  },
  {
    id: 3,
    title: "EXOTIC PARADISE",
    duration: "60 min",
    price: "€350",
    description: "Un viaje sensorial inspirado en las técnicas orientales más refinadas. Perfecto para una primera experiencia en nuestro exclusivo spa.",
    features: ["Técnicas orientales", "Velas aromáticas", "Música ambiental", "Toallas calientes"],
    fullDescription: "Descubre el paraíso exótico con este servicio inspirado en las tradiciones más refinadas de Oriente. Exotic Paradise es perfecto para quienes se inician en el mundo del masaje tántrico, ofreciendo una introducción suave pero profundamente satisfactoria a nuestros servicios. Cada elemento ha sido cuidadosamente seleccionado para crear una atmósfera de serenidad y despertar sensorial."
  },
  {
    id: 4,
    title: "COUPLES HARMONY",
    duration: "90 min",
    price: "€800",
    description: "Experiencia diseñada para parejas que buscan reconectar en un ambiente íntimo y lujoso. Incluye instrucción tántrica básica.",
    features: ["Sala para parejas", "Instructor especializado", "Ritual de conexión", "Aceites afrodisíacos"],
    fullDescription: "Fortalece la conexión con tu pareja a través de esta experiencia única diseñada específicamente para dos. Couples Harmony combina técnicas tántricas tradicionales con enfoques modernos de terapia de pareja, creando un espacio sagrado donde explorar la intimidad y profundizar la conexión emocional y física. Incluye instrucción personalizada y rituales de conexión."
  },
  {
    id: 5,
    title: "MYSTICAL JOURNEY",
    duration: "150 min",
    price: "€850",
    description: "Un viaje espiritual y sensorial de 2.5 horas que combina meditación, tantra y rituales ancestrales en un ambiente místico único.",
    features: ["Ritual de purificación", "Meditación guiada", "Ceremonias ancestrales", "Ambiente místico"],
    fullDescription: "Embárcate en un viaje profundo hacia el autodescubrimiento y la expansión de conciencia. Mystical Journey es nuestra experiencia más transformadora, diseñada para aquellos que buscan algo más que relajación física. Esta experiencia incluye rituales de purificación, meditación guiada, trabajo energético avanzado y técnicas tántricas que han sido transmitidas a través de generaciones."
  },
  {
    id: 6,
    title: "ROYAL TREATMENT",
    duration: "180 min",
    price: "€1200",
    description: "El summum del lujo y la exclusividad. Una experiencia de 3 horas en nuestras instalaciones más privadas con servicios premium únicos.",
    features: ["Chef privado", "Mayordomo personal", "Limousine incluida", "Suite presidencial"],
    fullDescription: "Vive como la realeza con nuestro servicio más exclusivo y lujoso. El Royal Treatment es una experiencia completa de tres horas que incluye servicios de mayordomo personal, chef privado, transporte en limousina y acceso a nuestra suite presidencial. Esta experiencia está limitada a solo dos reservas por mes, garantizando la máxima exclusividad y personalización."
  }
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
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
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <p className="text-sm md:text-md mb-8 font-light tracking-widest text-amber-400 tenali-ramakrishna">
              NUESTROS SERVICIOS
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-light tracking-wider mb-4 gradiente-dorado">
              EXPERIENCIAS
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">
              EXCLUSIVAS
            </h2>
            <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light tracking-widest mb-8 text-gray-300 max-w-4xl mx-auto">
              Descubre nuestro catálogo completo de servicios diseñados para despertar todos tus sentidos y ofrecerte experiencias transformadoras en un ambiente de máximo lujo y privacidad.
            </p>
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
                    src="/images/PlaceDeluxe_01.jpg"
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-amber-900/80 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-amber-400 text-sm font-light">{service.duration}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-light tracking-wider text-amber-400 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-2xl font-light text-white">{service.price}</p>
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
                    <button className="flex-1 tenali-ramakrishna border-1 border-yellow-400/50 bg-gradient-to-r from-amber-900/30 to-amber-800/30 rounded-3xl hover:from-yellow-600/40 hover:to-amber-600/40 text-white px-4 py-2 text-sm font-medium tracking-wider transition-all duration-300">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-lg p-8 border border-amber-600/30">
                <div className="text-center">
                  <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-4">
                    PAQUETE LUNA DE MIEL
                  </h3>
                  <p className="text-4xl font-light text-white mb-2">€1,200</p>
                  <p className="text-sm text-gray-400 mb-6">3 sesiones • Válido por 6 meses</p>
                  <ul className="space-y-2 mb-8 text-left">
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      2x Couples Harmony (90 min cada una)
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      1x Sensual Premium (120 min)
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      Champagne premium incluido
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      Descuento del 25%
                    </li>
                  </ul>
                  <button className="w-full tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors">
                    RESERVAR PAQUETE
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-lg p-8 border border-amber-600/30">
                <div className="text-center">
                  <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-4">
                    MEMBRESÍA VIP
                  </h3>
                  <p className="text-4xl font-light text-white mb-2">€2,500</p>
                  <p className="text-sm text-gray-400 mb-6">Acceso ilimitado • 12 meses</p>
                  <ul className="space-y-2 mb-8 text-left">
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      Servicios ilimitados (excepto Royal Treatment)
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      Prioridad en reservas
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      Acceso a eventos exclusivos
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      Concierge personal
                    </li>
                  </ul>
                  <button className="w-full tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors">
                    SOLICITAR VIP
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
                },
                {
                  question: "¿Cuál es la política de cancelación?",
                  answer: "Las cancelaciones con más de 24 horas de anticipación no tienen costo. Cancelaciones con menos tiempo pueden estar sujetas a una tarifa del 50%. Para servicios premium, se requiere 48 horas de anticipación para cancelación sin costo."
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
                      <span className="text-2xl font-light text-white">{selectedService.price}</span>
                      <span className="text-amber-500">{selectedService.duration}</span>
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
                      src="/images/PlaceDeluxe_01.jpg"
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
                      <button className="w-full tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors">
                        RESERVAR AHORA
                      </button>
                      <button className="w-full border border-amber-600/30 rounded-3xl text-amber-400 px-8 py-3 text-sm hover:bg-amber-600/10 transition-colors">
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
        <footer className="border-t border-amber-900/20 py-12 px-4 mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-light tracking-wider gradiente-dorado mb-4">
                  TANTRIC LUXE
                </h3>
                <p className="text-sm text-gray-400">
                  Un santuario exclusivo de lujo y sensualidad en el corazón de Mallorca.
                </p>
              </div>
              <div>
                <h4 className="text-amber-400 mb-4 tenali-ramakrishna">ENLACES RÁPIDOS</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a></li>
                  <li><a href="#servicios" className="hover:text-amber-400 transition-colors">Servicios</a></li>
                  <li><a href="#eventos" className="hover:text-amber-400 transition-colors">Eventos</a></li>
                  <li><a href="#contacto" className="hover:text-amber-400 transition-colors">Contacto</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-amber-400 mb-4 tenali-ramakrishna">SERVICIOS</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Tantric Deluxe</li>
                  <li>Sensual Premium</li>
                  <li>Exotic Paradise</li>
                  <li>Couples Harmony</li>
                </ul>
              </div>
              <div>
                <h4 className="text-amber-400 mb-4 tenali-ramakrishna">SÍGUENOS</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center hover:from-amber-600/30 hover:to-amber-900/30 transition-colors">
                    <span className="text-amber-400">📷</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center hover:from-amber-600/30 hover:to-amber-900/30 transition-colors">
                    <span className="text-amber-400">💬</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-amber-900/20 pt-8 text-center">
              <p className="text-sm text-gray-400">
                © 2024 Tantric Luxe Mallorca. Todos los derechos reservados. | 
                <a href="#" className="text-amber-400 hover:text-amber-300 ml-2">Política de Privacidad</a> | 
                <a href="#" className="text-amber-400 hover:text-amber-300 ml-2">Términos y Condiciones</a>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ServicesPage;