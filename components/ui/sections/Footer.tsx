import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-t relative text-center md:text-left border-amber-900/20 py-12 px-4 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="justify-self-center md:justify-self-start">
            <div className="flex flex-col w-[200px] sm:w-[300px] md:w-[80%] items-center">
              <Image
                src="/images/LogoFull.png"
                alt="Logo Tantric Luxe"
                width={150}
                height={150}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div>
            <h4 className="text-amber-400 mb-4 tenali-ramakrishna">NAVEGACIÓN</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-amber-400 transition-colors">Masaje Tantrico Mallorca</a></li>
              <li><a href="/servicios" className="hover:text-amber-400 transition-colors">Servicios Tantricos</a></li>
              <li><a href="/masajistas" className="hover:text-amber-400 transition-colors">Masajistas Eróticas</a></li>
              <li><a href="/contacto" className="hover:text-amber-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-400 mb-4 tenali-ramakrishna">MASAJES TANTRICOS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Masaje Tantrico Deluxe Mallorca</li>
              <li>Masaje Tantrico Premium Palma</li>
              <li>Experiencia Tantrica Parejas</li>
              <li>Ritual Tantrico Personalizado</li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-400 mb-4 tenali-ramakrishna">SÍGUENOS</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center hover:from-amber-600/30 hover:to-amber-900/30 transition-colors"
                aria-label="Instagram masaje tantrico Mallorca"
              >
                <span className="text-amber-400">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center hover:from-amber-600/30 hover:to-amber-900/30 transition-colors"
                aria-label="WhatsApp masaje tantrico Palma"
              >
                <span className="text-amber-400">💬</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-900/20 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Tantric Luxe Mallorca - Centro Especializado en Masaje Tantrico Palma. Todos los derechos reservados. |
            <a href="#" className="text-amber-400 hover:text-amber-300 mx-1">Política de Privacidad</a>|
            <a href="#" className="text-amber-400 hover:text-amber-300 mx-1">Términos y Condiciones</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 