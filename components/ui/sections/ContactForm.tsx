'use client';

import React from 'react';

type Service = {
  id: number;
  title: string;
};

type Dictionary = {
  form_title: string;
  name_label: string;
  name_placeholder: string;
  email_label: string;
  email_placeholder: string;
  phone_label: string;
  phone_placeholder: string;
  service_label: string;
  service_placeholder: string;
  message_label: string;
  message_placeholder: string;
  success_message: string;
  error_message: string;
  submitting_button: string;
  submit_button: string;
};

export default function ContactForm({ services, dictionary }: { services: Service[], dictionary: Dictionary }) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
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
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
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
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-amber-900/20">
      <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-8">{dictionary.form_title}</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm text-amber-400 mb-2">{dictionary.name_label}</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors" placeholder={dictionary.name_placeholder} />
        </div>
        <div>
          <label className="block text-sm text-amber-400 mb-2">{dictionary.email_label}</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors" placeholder={dictionary.email_placeholder} />
        </div>
        <div>
          <label className="block text-sm text-amber-400 mb-2">{dictionary.phone_label}</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors" placeholder={dictionary.phone_placeholder} />
        </div>
        <div>
          <label className="block text-sm text-amber-400 mb-2">{dictionary.service_label}</label>
          <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white focus:border-amber-600/50 focus:outline-none transition-colors">
            <option value="">{dictionary.service_placeholder}</option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-amber-400 mb-2">{dictionary.message_label}</label>
          <textarea name="message" value={formData.message} onChange={handleChange} className="w-full bg-black/30 border border-amber-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-600/50 focus:outline-none transition-colors h-24 resize-none" placeholder={dictionary.message_placeholder}></textarea>
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

        <button type="submit" disabled={isSubmitting} className={`w-full tenali-ramakrishna border-1 cursor-pointer border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {isSubmitting ? dictionary.submitting_button : dictionary.submit_button}
        </button>
      </div>
    </form>
  );
}