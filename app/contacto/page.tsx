'use client'

import React from 'react';
import Image from 'next/image';
import Header from '@/components/ui/sections/Header';
import Footer from '@/components/ui/sections/Footer';


const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    "Tantric Deluxe",
    "Sensual Premium", 
    "Exotic Paradise",
    "Couples Harmony",
    "Mystical Journey",
    "Royal Treatment"
  ];

  const timeSlots = [
    "11:00", "12:00", "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00", "01:00"
  ];

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
          date: '',
          time: '',
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
            <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">CONTACTO</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">RESERVA TU</h1>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">EXPERIENCIA</h2>
            <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 tenali-ramakrishna">Estamos aquí para hacer realidad tu experiencia perfecta. Contáctanos para reservar o consultar cualquier duda sobre nuestros servicios exclusivos</p>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-light tracking-wider text-amber-400 mb-8">
                INFORMACIÓN DE CONTACTO
              </h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start group">
                  <div className="w-16 h-16 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-6 flex-shrink-0 group-hover:from-amber-600/30 group-hover:to-amber-900/30 transition-colors">
                    <span className="text-amber-400 text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-xl text-amber-400 mb-2 tenali-ramakrishna">UBICACIÓN</h4>
                    <p className="text-gray-300 text-lg">Palma de Mallorca</p>
                    <p className="text-sm text-gray-400 mt-1">Ubicación exacta proporcionada tras confirmación de reserva</p>
                    <p className="text-sm text-gray-400">Zona exclusiva y discreta del centro histórico</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-6 flex-shrink-0 group-hover:from-amber-600/30 group-hover:to-amber-900/30 transition-colors">
                    <span className="text-amber-400 text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="text-xl text-amber-400 mb-2 tenali-ramakrishna">WHATSAPP PREFERIDO</h4>
                    <p className="text-gray-300 text-lg">+34 691 53 61 35</p>
                    <p className="text-sm text-gray-400 mt-1">Respuesta garantizada en menos de 1 hora</p>
                    <p className="text-sm text-gray-400">Atención personalizada 24/7</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-6 flex-shrink-0 group-hover:from-amber-600/30 group-hover:to-amber-900/30 transition-colors">
                    <span className="text-amber-400 text-2xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="text-xl text-amber-400 mb-2 tenali-ramakrishna">HORARIOS</h4>
                    <p className="text-gray-300 text-lg">Lunes a Domingo</p>
                    <p className="text-sm text-gray-400 mt-1">09:00 - 23:00</p>
                    <p className="text-sm text-gray-400">Servicios con cita previa</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-6 flex-shrink-0 group-hover:from-amber-600/30 group-hover:to-amber-900/30 transition-colors">
                    <span className="text-amber-400 text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-xl text-amber-400 mb-2 tenali-ramakrishna">EMAIL</h4>
                    <p className="text-gray-300 text-lg">info@tantricluxemallorca.com</p>
                    <p className="text-sm text-gray-400 mt-1">Para consultas generales y reservas</p>
                    <p className="text-sm text-gray-400">Respuesta en 24 horas máximo</p>
                  </div>
                </div>
              </div>

              {/* Quick Access Buttons */}
              <div className="space-y-4">
                <a 
                  href="https://wa.me/34691536135" 
                  target="_blank"
                  className="w-full flex items-center justify-center tenali-ramakrishna border-1 border-green-400 bg-gradient-to-r from-green-900/30 to-green-800/30 rounded-3xl hover:from-green-600/40 hover:to-green-600/40 text-white px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300"
                >
                  <span className="mr-3 text-2xl">💬</span>
                  WHATSAPP DIRECTO
                </a>
                <a 
                  href="tel:+34691536135"
                  className="w-full flex items-center justify-center tenali-ramakrishna border-1 border-amber-400 bg-gradient-to-r from-amber-900/30 to-amber-800/30 rounded-3xl hover:from-amber-600/40 hover:to-amber-600/40 text-white px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300"
                >
                  <span className="mr-3 text-2xl">📞</span>
                  LLAMAR AHORA
                </a>
              </div>

              {/* Privacy Notice */}
              <div className="mt-12 bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
                <h4 className="text-lg font-light tracking-wider text-amber-400 mb-3 tenali-ramakrishna">
                  🔒 GARANTÍA DE PRIVACIDAD
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  En Tantric Luxe Mallorca, tu privacidad es nuestra prioridad absoluta. Toda la información personal es tratada con máxima confidencialidad y nunca se comparte con terceros. Nuestras instalaciones garantizan acceso discreto y completa privacidad durante tu visita.
                </p>
              </div>
            </div>

            {/* Reservation Form */}
            <div>
              <div className="bg-gradient-to-br from-amber-900/15 to-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-amber-600/30">
                <h3 className="text-3xl font-light tracking-wider text-amber-400 mb-8 tenali-ramakrishna">
                  FORMULARIO DE RESERVA
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">NOMBRE *</label>
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
                      <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">EMAIL *</label>
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
                  </div>

                  <div>
                    <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">TELÉFONO / WHATSAPP *</label>
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
                    <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">SERVICIO DESEADO *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white focus:border-amber-600/50 focus:outline-none transition-colors"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                      <option value="consulta">Consulta personalizada</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">FECHA PREFERIDA</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white focus:border-amber-600/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">HORA PREFERIDA</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white focus:border-amber-600/50 focus:outline-none transition-colors"
                      >
                        <option value="">Selecciona una hora</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">MENSAJE ADICIONAL</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors h-32 resize-none"
                      placeholder="¿Alguna petición especial o pregunta? (Opcional)"
                    ></textarea>
                  </div>

                  <div className="text-sm text-gray-400 bg-black/20 p-4 rounded-lg">
                    <p className="mb-2">• Los campos marcados con * son obligatorios</p>
                    <p className="mb-2">• Recibirás confirmación en un plazo máximo de 2 horas</p>
                    <p>• Para reservas del mismo día, contacta por WhatsApp</p>
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
                    className={`w-full tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-4 text-lg font-medium tracking-wider transition-colors ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'ENVIANDO...' : 'ENVIAR RESERVA'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          

          {/* Map Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                NUESTRA UBICACIÓN
              </h2>
              <div className="w-24 h-px bg-amber-400 mx-auto"></div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-6 tenali-ramakrishna">
                    EN EL CORAZÓN DE PALMA
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Nuestro exclusivo spa se encuentra estratégicamente ubicado en una zona discreta del centro histórico de Palma de Mallorca, ofreciendo fácil acceso desde cualquier punto de la ciudad mientras mantenemos la máxima privacidad.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      5 minutos del centro comercial
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      10 minutos de la catedral
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      15 minutos del aeropuerto
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      Acceso directo en vehículo
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border border-amber-900/20 shadow-2xl">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d384.42335882479!2d2.6414189753300223!3d39.573430493787484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sponle%20Paseo%20de%20Mallorca%2C%C2%A05B!5e0!3m2!1ses!2sve!4v1754062527548!5m2!1ses!2sve" 
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Tantric Luxe Mallorca - Centro de masaje tantrico en Palma"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default ContactPage;