'use client'

import React from 'react';
import Image from 'next/image';
import Header from '../components/ui/sections/Header';
import Gallery from '@/components/ui/sections/Gallery';
import ServicesSection, { services } from '@/components/ui/sections/Services';

const TantricLuxeSpa = () => {
  const events = [
    {
      title: "FULL MOON RITUAL",
      date: "Próxima Luna Llena",
      description: "Ceremonia tántrica especial bajo la energía de la luna llena",
      spots: "8 plazas disponibles"
    },
    {
      title: "TANTRA WORKSHOP",
      date: "Todos los sábados",
      description: "Aprende las bases del tantra en un ambiente exclusivo y privado",
      spots: "6 plazas por sesión"
    },
    {
      title: "VIP SUNSET EXPERIENCE",
      date: "Jueves y Domingos",
      description: "Sesión especial al atardecer con vistas a la bahía de Palma",
      spots: "Solo 2 parejas"
    }
  ];

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

      {/* Hero Section */}
      <main className="relative z-10 px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-sm md:text-md mb-8 font-light tracking-widest text-amber-400 tenali-ramakrishna">
            EROTIC MASSAGES
          </p>
          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-light tracking-wider mb-4 gradiente-dorado">
            TANTRIC LUXE
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">
            MALLORCA
          </h2>

          {/* Subtitle 2*/}
          <p className="text-xl md:text-2xl font-light tracking-widest mb-8 text-gray-300 tenali-ramakrishna">
            EXCLUSIVE MASSAGE EXPERIENCE
          </p>

          {/* Decorative line */}
          <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>

          {/* Service options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-8xl mx-auto">
            {/* Left service */}
            <div className="space-y-6 col-span-1">
            <div className="w-22 h-22 rounded-full w-full m-0">
                  <Image
                    src="/images/MantraButton.png"
                    alt="Boton Mantra"
                    width={150}
                    height={150}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="text-center flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-light tracking-wider mb-4">
                  EXCLUSIVE<br />MASSAGE
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed w-[250px]">
                  Indulge in our signature treatments -
                  Experience ultimate relaxation
                </p>
                <div className='flex flex-col w-[200px] justify-self-center'>
                  <button className="tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 pb-1 pt-2 text-sm font-medium tracking-wider transition-colors">
                    BOOK NOW
                  </button>

                  {/* Decorative dots */}
                  <div className="flex justify-center mt-6 gap-3 space-x-2">
                    <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
                    <div className="w-2 h-2 bg-amber-200 rounded-full"></div>
                    <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center services */}
            <div className="flex justify-between self-center gap-6 space-y-8 col-span-1">
              {/* icon */}
              <div className="text-center flex flex-col gap-6 items-center">
                {/* Primer botón luxury */}
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center relative">
                  <span className="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                  <Image
                    src="/images/BotomLuxDark.webp"
                    alt="Boton Luxury"
                    width={150}
                    height={150}
                    className="object-contain w-full h-full relative z-10"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-2xl text-yellow-400 pointer-events-none z-20">
                    Ω
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-light tracking-wider tenali-ramakrishna">SPECIAL</h3>
                  <p className="text-lg text-amber-400/80 uppercase tenali-ramakrishna">services</p>
                </div>
              </div>

              {/* icon */}
              <div className="text-center flex flex-col gap-6 items-center">
                {/* Segundo botón luxury */}
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center relative">
                  <span className="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                  <Image
                    src="/images/BotomLuxDark.webp"
                    alt="Boton Luxury"
                    width={150}
                    height={150}
                    className="object-contain w-full h-full relative z-10"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-2xl text-yellow-400 pointer-events-none z-20">
                    Σ
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-light tracking-wider tenali-ramakrishna">DELUXE</h3>
                  <p className="text-lg text-amber-400/80 uppercase tenali-ramakrishna">massages</p>
                </div>
              </div>

              {/* icon */}
              <div className="text-center flex flex-col gap-6 items-center">
                {/* Tercer botón luxury */}
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center relative">
                  <span className="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                  <Image
                    src="/images/BotomLuxDark.webp"
                    alt="Boton Luxury"
                    width={150}
                    height={150}
                    className="object-contain w-full h-full relative z-10"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-2xl text-yellow-400 pointer-events-none z-20">
                    Φ
                  </span>
                </div>
                <div className="text-center ">
                  <h3 className="text-2xl font-light tracking-wider tenali-ramakrishna">UNIQUE</h3>
                  <p className="text-lg text-amber-400/80 uppercase tenali-ramakrishna">moments</p>
                </div>
              </div>
            </div>

            {/* Right service */}
            <div className="space-y-6 col-span-1">
            <div className="w-22 h-22 rounded-full w-full m-0">
                  <Image
                  src="/images/MantraButton.png"
                    alt="Boton Mantra"
                    width={150}
                    height={150}
                    className="object-contain w-full h-full"
                  />
                </div>
              <div className="text-center flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-light tracking-wider mb-4">
                  EXCLUSIVE<br />MASSAGE
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed w-[250px]">
                  Discover our exceptional treatments -
                  Pure relaxation experience
                </p>
                <div className='flex flex-col w-[200px] justify-self-center'>
                  <button className="tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 pb-1 pt-2 text-sm font-medium tracking-wider transition-colors">
                    BOOK NOW
                  </button>

                  {/* Decorative dots */}
                  <div className="flex justify-center mt-6 gap-3 space-x-2">
                    <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
                    <div className="w-2 h-2 bg-amber-200 rounded-full"></div>
                    <div className="w-2 h-2 bg-amber-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Gallery />

        {/* Services Section */}
        <ServicesSection />

        {/* About Us Section */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                SOBRE NOSOTROS
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 gradiente-dorado">
                UN SANTUARIO DE LUJO Y SENSUALIDAD
              </h2>
              <div className="w-24 h-px bg-amber-400 mb-8"></div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                En Tantric Luxe Mallorca, hemos creado un oasis exclusivo donde el arte ancestral del tantra 
                se encuentra con el lujo contemporáneo. Nuestro espacio está diseñado para ofrecer una 
                experiencia transformadora en completa privacidad.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Cada detalle ha sido cuidadosamente seleccionado para crear un ambiente que despierte todos 
                tus sentidos, desde los aceites esenciales importados hasta la música ambiental personalizada 
                para cada sesión.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="text-3xl font-light text-amber-400 mb-2">10+</h4>
                  <p className="text-sm text-gray-400">Años de experiencia</p>
                </div>
                <div>
                  <h4 className="text-3xl font-light text-amber-400 mb-2">500+</h4>
                  <p className="text-sm text-gray-400">Clientes satisfechos</p>
                </div>
                <div>
                  <h4 className="text-3xl font-light text-amber-400 mb-2">100%</h4>
                  <p className="text-sm text-gray-400">Privacidad garantizada</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent rounded-lg"></div>
              <Image
                src="/images/PlaceDeluxe_01.jpg"
                alt="Luxury spa interior"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="eventos" className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
              EVENTOS ESPECIALES
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
              EXPERIENCIAS ÚNICAS
            </h2>
            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20 hover:border-amber-600/40 transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-light tracking-wider text-amber-400 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-amber-500 mb-4">{event.date}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {event.description}
                </p>
                <p className="text-sm text-amber-400/80 tenali-ramakrishna">
                  {event.spots}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-12 py-3 text-sm font-medium tracking-wider transition-colors">
              VER TODOS LOS EVENTOS
            </button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
              TESTIMONIOS
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
              EXPERIENCIAS DE NUESTROS CLIENTES
            </h2>
            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Una experiencia transformadora. El ambiente, la atención al detalle y la profesionalidad 
                del equipo superaron todas mis expectativas.&quot;
              </p>
              <p className="text-amber-400 font-light">- Sofia M.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;El lujo y la discreción en su máxima expresión. Cada visita es un viaje sensorial único 
                que me reconecta conmigo mismo.&quot;
              </p>
              <p className="text-amber-400 font-light">- Carlos R.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Mi pareja y yo vivimos una experiencia inolvidable. El workshop de tantra para parejas 
                fortaleció nuestra conexión de manera extraordinaria.&quot;
              </p>
              <p className="text-amber-400 font-light">- Ana & David</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
              CONTACTO
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
              RESERVA TU EXPERIENCIA
            </h2>
            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-8">
                INFORMACIÓN DE CONTACTO
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-amber-400">📍</span>
                  </div>
                  <div>
                    <h4 className="text-amber-400 mb-1">Ubicación</h4>
                    <p className="text-gray-300">Palma de Mallorca</p>
                    <p className="text-sm text-gray-400">Ubicación exacta tras reserva confirmada</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-amber-400">📱</span>
                  </div>
                  <div>
                    <h4 className="text-amber-400 mb-1">WhatsApp</h4>
                    <p className="text-gray-300">+34 XXX XXX XXX</p>
                    <p className="text-sm text-gray-400">Respuesta en menos de 1 hora</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-amber-400">⏰</span>
                  </div>
                  <div>
                    <h4 className="text-amber-400 mb-1">Horario</h4>
                    <p className="text-gray-300">Lunes a Domingo</p>
                    <p className="text-sm text-gray-400">11:00 - 02:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-light tracking-wider text-amber-400 mb-4">
                  POLÍTICA DE PRIVACIDAD
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  En Tantric Luxe Mallorca valoramos y protegemos tu privacidad. Toda la información 
                  personal es tratada con la máxima confidencialidad. No compartimos datos con terceros 
                  y garantizamos discreción absoluta en cada visita.
                </p>
              </div>
            </div>

            <div>
              <form className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20">
                <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-8">
                  FORMULARIO DE RESERVA
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-amber-400 mb-2">Nombre</label>
                    <input
                      type="text"
                      className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-amber-400 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-amber-400 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors"
                      placeholder="+34 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-amber-400 mb-2">Servicio</label>
                    <select className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white focus:border-amber-600/50 focus:outline-none transition-colors">
                      <option value="">Selecciona un servicio</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title} - {service.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-amber-400 mb-2">Mensaje (Opcional)</label>
                    <textarea
                      className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors h-24 resize-none"
                      placeholder="¿Alguna petición especial?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors"
                  >
                    ENVIAR RESERVA
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

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

export default TantricLuxeSpa;