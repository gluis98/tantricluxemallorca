'use client'

import React from 'react';
import Image from 'next/image';
import Header from '../components/ui/sections/Header';
import Gallery from '@/components/ui/sections/Gallery';
import ServicesSection, { services } from '@/components/ui/sections/Services';
import MasajistasModal from '@/components/banners/MasseursModal';
import Footer from '@/components/ui/sections/Footer';

const TantricLuxeSpa = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Enviar email usando la API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Error en el servidor');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const events = [
  //   {
  //     title: "RITUAL LUNA LLENA TANTRICO",
  //     date: "Próxima Luna Llena",
  //     description: "Ceremonia de masaje tantrico Mallorca especial bajo la energía lunar transformadora",
  //     spots: "8 plazas disponibles"
  //   },
  //   {
  //     title: "TALLER MASAJE TANTRICO PALMA",
  //     date: "Todos los sábados",
  //     description: "Aprende las técnicas ancestrales del masaje tantrico en Palma de Mallorca",
  //     spots: "6 plazas por sesión"
  //   },
  //   {
  //     title: "EXPERIENCIA TANTRICA SUNSET",
  //     date: "Jueves y Domingos",
  //     description: "Sesión exclusiva de masaje tantrico Mallorca al atardecer con vistas a la bahía de Palma",
  //     spots: "Solo 2 parejas"
  //   }
  // ];

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
            alt="Mandala sagrado masaje tantrico Mallorca"
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
            alt="Símbolo tantrico energético Palma Mallorca"
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
      <main className="relative z-10 px-0 md:px-8 py-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-sm md:text-md mb-8 font-light tracking-widest text-amber-400 tenali-ramakrishna">
            EROTIC MASSAGE
          </p>
          {/* Main title */}
          <p className="text-4xl md:text-6xl lg:text-8xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
            TANTRIC LUXE
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">
            MASAJE TANTRICO PALMA
          </h1>

          {/* Subtitle 2*/}
          <p className="text-xl md:text-2xl font-light tracking-widest mb-8 text-gray-300 tenali-ramakrishna">
            EXPERIENCIA EXCLUSIVA DE MASAJE TANTRICO EN MALLORCA
          </p>

          {/* Decorative line */}
          <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>

          {/* Service options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-8xl mx-auto">
            {/* Left service */}
            <div className="hidden lg:block space-y-6 col-span-1">
              <div className="w-20 h-20 rounded-full w-full m-0">
                <Image
                  src="/images/MantraButton.png"
                  alt="Botón masaje tantrico exclusivo Mallorca"
                  width={150}
                  height={150}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-center flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-light tracking-wider mb-4">
                  MASAJE TANTRICO<br />EXCLUSIVO
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed w-[250px]">
                  Experimenta nuestro masaje tantrico Palma premium -
                  Relajación y conexión espiritual absoluta
                </p>
                <div className='flex flex-col w-[200px] justify-self-center'>
                  <button 
                    onClick={() => window.location.href = '/whatsapp'}
                    className="tenali-ramakrishna border-1 cursor-pointer border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 pb-1 pt-2 text-sm font-medium tracking-wider transition-colors"
                  >
                    RESERVAR AHORA
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
            <div className="flex justify-evenly lg:justify-between self-center gap-6 space-y-8 col-span-3 lg:col-span-1">
              {/* icon */}
              <div className="text-center flex flex-col gap-6 items-center">
                {/* Primer botón luxury */}
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center relative">
                  <span className="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                  <Image
                    src="/images/BotomLuxDark.webp"
                    alt="Servicios especiales masaje tantrico Mallorca"
                    width={150}
                    height={150}
                    className="object-contain w-full h-full relative z-10"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-2xl text-yellow-400 pointer-events-none z-20">
                    Ω
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-light tracking-wider tenali-ramakrishna">TANTRICO</h3>
                  <p className="text-lg text-amber-400/80 uppercase tenali-ramakrishna">especial</p>
                </div>
              </div>

              {/* icon */}
              <div className="text-center flex flex-col gap-6 items-center">
                {/* Segundo botón luxury */}
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center relative">
                  <span className="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                  <Image
                    src="/images/BotomLuxDark.webp"
                    alt="Masaje tantrico deluxe Palma Mallorca"
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
                  <p className="text-lg text-amber-400/80 uppercase tenali-ramakrishna">masajes</p>
                </div>
              </div>

              {/* icon */}
              <div className="text-center flex flex-col gap-6 items-center">
                {/* Tercer botón luxury */}
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center relative">
                  <span className="absolute inset-0 z-0 rounded-full pointer-events-none glow-fire"></span>
                  <Image
                    src="/images/BotomLuxDark.webp"
                    alt="Experiencia tantrica única Mallorca"
                    width={150}
                    height={150}
                    className="object-contain w-full h-full relative z-10"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-2xl text-yellow-400 pointer-events-none z-20">
                    Φ
                  </span>
                </div>
                <div className="text-center ">
                  <h3 className="text-2xl font-light tracking-wider tenali-ramakrishna">ÚNICO</h3>
                  <p className="text-lg text-amber-400/80 uppercase tenali-ramakrishna">momentos</p>
                </div>
              </div>
            </div>

            {/* Right service */}
            <div className="hidden lg:block space-y-6 col-span-1">
              <div className="w-20 h-20 rounded-full w-full m-0">
                <Image
                  src="/images/MantraButton.png"
                  alt="Masaje tantrico premium Palma de Mallorca"
                  width={150}
                  height={150}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-center flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-light tracking-wider mb-4">
                  MASAJE EROTICO<br />PREMIUM
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed w-[250px]">
                  Descubre el verdadero masaje tantrico Mallorca -
                  Conexión sagrada y relajación profunda
                </p>
                <div className='flex flex-col w-[200px] justify-self-center'>
                  <button 
                  onClick={() => window.location.href = '/whatsapp'}
                  className="tenali-ramakrishna border-1 cursor-pointer border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 pb-1 pt-2 text-sm font-medium tracking-wider transition-colors">
                    RESERVAR AHORA
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
        <section className="py-12 sm:py-24 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-16 items-center">
            <div>
              <div className="flex flex-col mb-10 items-center text-center md:text-left md:items-start">
                <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                  SOBRE NOSOTROS
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8 gradiente-dorado">
                  ESPECIALISTAS EN MASAJE TANTRICO MALLORCA
                </h2>
                <div className="w-24 h-px bg-amber-400"></div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                En Tantric Luxe somos pioneros del masaje tantrico en Palma de Mallorca. Nuestro centro
                especializado combina las técnicas ancestrales del masaje tantrico con el lujo y la
                privacidad que mereces en el corazón de Mallorca.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Cada sesión de masaje tantrico Mallorca está diseñada para despertar tus sentidos y
                conectarte con tu energía interior. Utilizamos aceites esenciales premium y técnicas
                tradicionales del masaje tantrico Palma para una experiencia transformadora única.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="text-3xl font-light text-amber-400 mb-2">10+</h4>
                  <p className="text-sm text-gray-400">Años en masaje tantrico</p>
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
            <div className="relative w-full h-full">
              <Image
                src="/images/especialistas_en_masajese_eroticos.webp"
                alt="Centro de masaje tantrico exclusivo en Palma Mallorca"
                className="rounded-lg shadow-2xl object-cover"
                fill
              />
            </div>
          </div>
        </section>

        {/* Events Section */}
        {/* <section id="eventos" className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
              EVENTOS ESPECIALES
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
              EXPERIENCIAS MASAJE TANTRICO MALLORCA
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
        </section> */}

        {/* Testimonials Section */}
        <section className="py-12 sm:py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
              TESTIMONIOS
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
              OPINIONES DE TANTRIC LUXE
            </h2>
            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-amber-900/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;El mejor masaje tantrico Mallorca que he experimentado. La técnica y el ambiente
                crean una experiencia transformadora única. Altamente recomendado.&quot;
              </p>
              <p className="text-amber-400 font-light">- Sofia M.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-amber-900/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Profesionalidad excepcional en masaje tantrico Palma. El lujo y la discreción
                hacen de cada sesión una experiencia sagrada inolvidable.&quot;
              </p>
              <p className="text-amber-400 font-light">- Carlos R.</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-amber-900/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;El taller de masaje tantrico Mallorca para parejas fortaleció nuestra conexión.
                Una experiencia de crecimiento personal y espiritual extraordinaria.&quot;
              </p>
              <p className="text-amber-400 font-light">- Ana & David</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-12 sm:py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
              CONTACTO
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
              RESERVA TU MASAJE TANTRICO MALLORCA
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
                  <div className="w-12 h-12 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-amber-400">📍</span>
                  </div>
                  <div>
                    <h4 className="text-amber-400 text-xl mb-1 tenali-ramakrishna">Centro Masaje Tantrico</h4>
                    <p className="text-gray-300">Palma de Mallorca, Islas Baleares</p>
                    <p className="text-sm text-gray-400">Ubicación exacta tras reserva confirmada</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-amber-400">📱</span>
                  </div>
                  <div>
                    <h4 className="text-amber-400 text-xl mb-1 tenali-ramakrishna">WhatsApp</h4>
                    <p className="text-gray-300">+34 691536135</p>
                    <p className="text-sm text-gray-400">Respuesta inmediata para reservas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-amber-400">⏰</span>
                  </div>
                  <div>
                    <h4 className="text-amber-400 text-xl mb-1 tenali-ramakrishna">Horario</h4>
                    <p className="text-gray-300">Lunes a Domingo</p>
                    <p className="text-sm text-gray-400">09:00 - 23:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-light tracking-wider text-amber-400 mb-4">
                  POLÍTICA DE PRIVACIDAD
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  En nuestro centro de masaje tantrico Palma valoramos tu privacidad. Mantenemos
                  confidencialidad absoluta en cada sesión de masaje tantrico Mallorca. No compartimos
                  información personal y garantizamos discreción total en tu experiencia tantrica.
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-amber-900/20">
                <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-8">
                  RESERVA MASAJE TANTRICO PALMA
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-amber-400 mb-2">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-amber-400 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-amber-400 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors"
                      placeholder="+34 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-amber-400 mb-2">Tipo de Masaje Tantrico</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white focus:border-amber-600/50 focus:outline-none transition-colors"
                    >
                      <option value="">Selecciona tu masaje tantrico</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title} - {service.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-amber-400 mb-2">Mensaje (Opcional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors h-24 resize-none"
                      placeholder="Cuéntanos sobre tu experiencia ideal de masaje tantrico"
                    ></textarea>
                  </div>
                  {/* Status Messages */}
                                     {submitStatus === 'success' && (
                     <div className="bg-green-900/30 border border-green-600/30 rounded-lg p-4 text-green-300 text-center">
                       ✅ ¡Reserva enviada con éxito! Te contactaremos pronto.
                       <p className="text-sm mt-2 text-amber-300">
                         📧 Email temporalmente en configuración - Revisa la consola del servidor
                       </p>
                     </div>
                   )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-900/30 border border-red-600/30 rounded-lg p-4 text-red-300 text-center">
                      ❌ Error al enviar la reserva. Por favor, intenta de nuevo o contacta por WhatsApp.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full tenali-ramakrishna border-1 cursor-pointer border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'ENVIANDO...' : 'RESERVAR MASAJE TANTRICO'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
      <MasajistasModal />
    </div>
  );
};

export default TantricLuxeSpa;