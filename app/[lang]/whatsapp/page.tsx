'use client';

import { useEffect } from 'react';

export default function WhatsAppRedirect() {
  useEffect(() => {
    // Mensaje personalizado para WhatsApp
    const message = encodeURIComponent("Hola, me gustaría información sobre los servicios TL Mallorca.");
    const phoneNumber = "34602560426";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirigir automáticamente a WhatsApp
    window.location.href = whatsappUrl;
  }, []);

  return (

    <main className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h1 className="text-2xl md:text-3xl font-light tracking-wider text-amber-400 tenali-ramakrishna mb-4">
          REDIRIGIENDO A WHATSAPP
        </h1>
        <p className="text-gray-300 text-lg">
          Te estamos conectando con nuestro equipo...
        </p>
        <p className="text-gray-400 text-sm mt-4">
          Si no se abre automáticamente, haz clic en el botón de abajo
        </p>
        <button
          onClick={() => {
            const message = encodeURIComponent("Hola, me gustaría información sobre los servicios TL Mallorca.");
            const phoneNumber = "34602560426";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
          }}
          className="mt-6 tenali-ramakrishna border border-amber-400 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full hover:from-amber-600/30 hover:to-amber-800/30 text-amber-300 px-8 py-3 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105 shadow-lg"
        >
          ABRIR WHATSAPP
        </button>
      </div>
    </main>

  );
} 