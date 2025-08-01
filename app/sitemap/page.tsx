'use client'

import React from 'react';
import Header from '../../components/ui/sections/Header';
import Footer from '../../components/ui/sections/Footer';

const SitemapPage = () => {
  const pages = [
    {
      title: "Inicio - Masaje Tantrico Palma",
      url: "/",
      description: "Página principal con información sobre masaje tantrico en Mallorca, servicios exclusivos y reservas.",
      priority: "Alta"
    },
    {
      title: "Servicios - Masaje Tantrico Mallorca",
      url: "/servicios",
      description: "Catálogo completo de servicios de masaje tantrico, experiencias exclusivas y tratamientos premium.",
      priority: "Alta"
    },
    {
      title: "Masajistas - Especialistas Tantricas",
      url: "/masajistas",
      description: "Conoce a nuestras masajistas especialistas en masaje tantrico, sus perfiles y experiencia profesional.",
      priority: "Alta"
    },
    {
      title: "Acerca de Nosotros - Tantric Luxe",
      url: "/acerca",
      description: "Información sobre nuestro centro de masaje tantrico en Palma de Mallorca, historia y filosofía.",
      priority: "Media"
    },
    {
      title: "Contacto - Reserva Masaje Tantrico",
      url: "/contacto",
      description: "Información de contacto, ubicación y formulario para reservar tu sesión de masaje tantrico.",
      priority: "Media"
    },
    {
      title: "WhatsApp - Reserva Inmediata",
      url: "/whatsapp",
      description: "Contacta directamente por WhatsApp para reservas inmediatas de masaje tantrico en Mallorca.",
      priority: "Media"
    }
  ];

  return (
    <div className="min-h-screen text-white relative">
      {/* Fondos lujosos */}
      <div className="absolute inset-0 bg-gray-950"></div>
      <div className="absolute inset-0 bg-gradient-radial from-amber-900/30 via-transparent to-transparent"
        style={{ background: 'radial-gradient(circle at 20% 30%, rgba(120, 53, 15, 0.4) 0%, transparent 50%)' }}></div>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(92, 51, 23, 0.3) 0%, transparent 40%)' }}></div>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 60% 80%, rgba(69, 39, 17, 0.25) 0%, transparent 35%)' }}></div>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 10% 70%, rgba(53, 45, 40, 0.2) 0%, transparent 45%)' }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-amber-950/10 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-amber-950/10"></div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 px-4 md:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
              MAPA DEL SITIO
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">
              SITEMAP
            </h1>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">
              NAVEGACIÓN COMPLETA DEL SITIO
            </h2>
            <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 tenali-ramakrishna">
              Encuentra fácilmente todas las páginas de nuestro sitio web de masaje tantrico en Mallorca
            </p>
          </div>

          {/* Sitemap Content */}
          <div className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20">
            <div className="grid gap-8">
              {pages.map((page, index) => (
                <div key={index} className="border-b border-amber-900/30 pb-6 last:border-b-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-2 tenali-ramakrishna">
                        {page.title}
                      </h3>
                      <p className="text-gray-300 mb-3 leading-relaxed">
                        {page.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <a
                          href={page.url}
                          className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                        >
                          {page.url}
                        </a>
                        <span className="text-sm text-gray-400">
                          Prioridad: {page.priority}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={page.url}
                        className="tenali-ramakrishna border border-amber-400 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full hover:from-amber-600/30 hover:to-amber-800/30 text-amber-300 px-6 py-2 text-sm font-medium tracking-wider transition-all duration-300 hover:scale-105"
                      >
                        VISITAR
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SEO Information */}
            <div className="mt-12 pt-8 border-t border-amber-900/30">
              <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-4 tenali-ramakrishna">
                INFORMACIÓN SEO
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
                <div>
                  <h4 className="text-amber-300 font-medium mb-2">Sitemap XML</h4>
                  <p className="mb-2">Nuestro sitemap XML está disponible en:</p>
                  <a
                    href="/sitemap.xml"
                    className="text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    /sitemap.xml
                  </a>
                </div>
                <div>
                  <h4 className="text-amber-300 font-medium mb-2">Optimización SEO</h4>
                  <ul className="space-y-1">
                    <li>• URLs amigables para SEO</li>
                    <li>• Meta tags optimizados</li>
                    <li>• Contenido estructurado</li>
                    <li>• Navegación intuitiva</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20">
              <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-6 tenali-ramakrishna">
                ENLACES ÚTILES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="/"
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Página Principal
                </a>
                <a
                  href="/servicios"
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Servicios
                </a>
                <a
                  href="/contacto"
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SitemapPage; 