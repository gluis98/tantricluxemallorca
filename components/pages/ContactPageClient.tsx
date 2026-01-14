'use client';

import React from 'react';

type Service = {
  id: number;
  title: string;
};

type ContactInfo = {
  icon: string;
  title: string;
  line1: string;
  line2: string;
  line3: string;
};

interface ContactPageClientProps {
  dictionary: {
    pre_title: string;
    title: string;
    subtitle: string;
    description: string;
    info_title: string;
    contact_info: ContactInfo[];
    whatsapp_button_text: string;
    call_button_text: string;
    privacy_title: string;
    privacy_text: string;
    form_title: string;
    name_label: string;
    name_placeholder: string;
    email_label: string;
    email_placeholder: string;
    phone_label: string;
    phone_placeholder: string;
    service_label: string;
    service_default_option: string;
    service_consultation_option: string;
    date_label: string;
    time_label: string;
    time_default_option: string;
    timeSlots: string[];
    message_label: string;
    message_placeholder: string;
    form_notes: string[];
    success_message: string;
    error_message: string;
    submitting_button: string;
    submit_button: string;
    map_section_title: string;
    map_section_subtitle: string;
    map_section_p1: string;
    map_section_points: string[];
  };
  services: Service[];
}

const ContactPageClient: React.FC<ContactPageClientProps> = ({ dictionary, services }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
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
        throw new Error('Server error');
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
    <main className="relative z-10 px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">{dictionary.pre_title}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">{dictionary.title}</h1>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">{dictionary.subtitle}</h2>
          <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 tenali-ramakrishna">{dictionary.description}</p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-light tracking-wider text-amber-400 mb-8">
              {dictionary.info_title}
            </h3>

            <div className="space-y-8 mb-12">
              {dictionary.contact_info.map((info: ContactInfo, index: number) => (
                <div key={index} className="flex items-start group">
                  <div className="w-16 h-16 self-center rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center mr-6 flex-shrink-0 group-hover:from-amber-600/30 group-hover:to-amber-900/30 transition-colors">
                    <span className="text-amber-400 text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl text-amber-400 mb-2 tenali-ramakrishna">{info.title}</h4>
                    <p className="text-gray-300 text-lg">{info.line1}</p>
                    <p className="text-sm text-gray-400 mt-1">{info.line2}</p>
                    <p className="text-sm text-gray-400">{info.line3}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Access Buttons */}
            <div className="space-y-4">
              <a
                href="https://wa.me/34691536135"
                target="_blank"
                className="w-full flex items-center justify-center tenali-ramakrishna border-1 border-green-400 bg-gradient-to-r from-green-900/30 to-green-800/30 rounded-3xl hover:from-green-600/40 hover:to-green-600/40 text-white px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300"
              >
                <span className="mr-3 text-2xl">💬</span>
                {dictionary.whatsapp_button_text}
              </a>
              <a
                href="tel:+34691536135"
                className="w-full flex items-center justify-center tenali-ramakrishna border-1 border-amber-400 bg-gradient-to-r from-amber-900/30 to-amber-800/30 rounded-3xl hover:from-amber-600/40 hover:to-amber-600/40 text-white px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300"
              >
                <span className="mr-3 text-2xl">📞</span>
                {dictionary.call_button_text}
              </a>
            </div>

            {/* Privacy Notice */}
            <div className="mt-12 bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
              <h4 className="text-lg font-light tracking-wider text-amber-400 mb-3 tenali-ramakrishna">
                {dictionary.privacy_title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {dictionary.privacy_text}
              </p>
            </div>
          </div>

          {/* Reservation Form */}
          <div>
            <div className="bg-gradient-to-br from-amber-900/15 to-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-amber-600/30">
              <h3 className="text-3xl font-light tracking-wider text-amber-400 mb-8 tenali-ramakrishna">
                {dictionary.form_title}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">{dictionary.name_label}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors" placeholder={dictionary.name_placeholder} />
                  </div>
                  <div>
                    <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">{dictionary.email_label}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors" placeholder={dictionary.email_placeholder} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">{dictionary.phone_label}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors" placeholder={dictionary.phone_placeholder} />
                </div>

                <div>
                  <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">{dictionary.service_label}</label>
                  <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white focus:border-amber-600/50 focus:outline-none transition-colors">
                    <option value="">{dictionary.service_default_option}</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>{service.title}</option>
                    ))}
                    <option value="consulta">{dictionary.service_consultation_option}</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">{dictionary.date_label}</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white focus:border-amber-600/50 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">{dictionary.time_label}</label>
                    <select name="time" value={formData.time} onChange={handleChange} className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white focus:border-amber-600/50 focus:outline-none transition-colors">
                      <option value="">{dictionary.time_default_option}</option>
                      {dictionary.timeSlots.map((time: string) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-amber-400 mb-2 tenali-ramakrishna">{dictionary.message_label}</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors h-32 resize-none" placeholder={dictionary.message_placeholder}></textarea>
                </div>

                <div className="text-sm text-gray-400 bg-black/20 p-4 rounded-lg">
                  {dictionary.form_notes.map((note: string, index: number) => (
                    <p key={index} className="mb-2 last:mb-0">• {note}</p>
                  ))}
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-900/30 border border-green-600/30 rounded-lg p-4 text-green-300 text-center">
                    {dictionary.success_message}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-900/30 border border-red-600/30 rounded-lg p-4 text-red-300 text-center">
                    {dictionary.error_message}
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className={`w-full tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-4 text-lg font-medium tracking-wider transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? dictionary.submitting_button : dictionary.submit_button}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
              {dictionary.map_section_title}
            </h2>
            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-6 tenali-ramakrishna">
                  {dictionary.map_section_subtitle}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {dictionary.map_section_p1}
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {dictionary.map_section_points.map((point: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Carrer+del+Torrent+8+Ponent+07014+Palma+Illes+Balears"
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border border-amber-900/20 shadow-2xl block group cursor-pointer"
              >
                <iframe
                  src="https://www.google.com/maps?q=Carrer+del+Torrent+8+Ponent+07014+Palma+Illes+Balears&output=embed"
                  className="w-full h-full pointer-events-none"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Tantric Luxe Mallorca - Centro de masaje tantrico en Palma"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-amber-900/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-amber-400/50">
                    <p className="text-amber-300 text-sm font-medium tenali-ramakrishna">📍 Haz clic para abrir en Google Maps</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPageClient;