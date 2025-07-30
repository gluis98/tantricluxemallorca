'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../../components/ui/sections/Header';
import Footer from '../../components/ui/sections/Footer';

const masajistas = [
  {
    id: 1,
    name: "Aurora",
    age: 28,
    specialty: "Masaje Tantrico Deluxe",
    image: "/images/masseurs/Aurora/aurora01.jpg",
    images: [
      "/images/masseurs/Aurora/aurora01.jpg",
      "/images/masseurs/Aurora/aurora02.jpg",
      "/images/masseurs/Aurora/aurora03.jpg",
      "/images/masseurs/Aurora/aurora04.jpg",
      "/images/masseurs/Aurora/aurora05.jpg",
      "/images/masseurs/Aurora/aurora06.jpg",
      "/images/masseurs/Aurora/aurora07.jpg",
      "/images/masseurs/Aurora/aurora08.jpg",
      "/images/masseurs/Aurora/aurora09.jpg"
    ],
    description: "Especialista en masaje tantrico con técnicas ancestrales. Su toque suave y experto te transportará a un estado de relajación profunda y conexión espiritual.",
    skills: ["Masaje Tantrico", "Relajación Profunda", "Técnicas Ancestrales", "Conexión Espiritual"],
    rating: 5,
    reviews: 47
  },
  {
    id: 2,
    name: "Venus",
    age: 25,
    specialty: "Masaje Tantrico Premium",
    image: "/images/masseurs/Venus/venus01.jpg",
    images: [
      "/images/masseurs/Venus/venus01.jpg",
      "/images/masseurs/Venus/venus02.jpg",
      "/images/masseurs/Venus/venus03.jpg",
      "/images/masseurs/Venus/venus04.jpg",
      "/images/masseurs/Venus/venus05.jpg",
      "/images/masseurs/Venus/venus06.jpg",
      "/images/masseurs/Venus/venus07.jpg"
    ],
    description: "Maestra en el arte del masaje tantrico premium. Su experiencia y dedicación crean experiencias únicas de bienestar y armonía corporal.",
    skills: ["Masaje Premium", "Bienestar Integral", "Armonía Corporal", "Experiencia Única"],
    rating: 5,
    reviews: 52
  },
  {
    id: 3,
    name: "Selena",
    age: 27,
    specialty: "Experiencia Tantrica Parejas",
    image: "/images/masseurs/Selena/selena01.jpg",
    images: [
      "/images/masseurs/Selena/selena01.jpg",
      "/images/masseurs/Selena/selena02.jpg",
      "/images/masseurs/Selena/selena03.jpg",
      "/images/masseurs/Selena/selena04.jpg",
      "/images/masseurs/Selena/selena05.jpg",
      "/images/masseurs/Selena/selena06.jpg"
    ],
    description: "Especialista en experiencias tantricas para parejas. Su enfoque único fortalece la conexión emocional y física entre parejas.",
    skills: ["Parejas", "Conexión Emocional", "Armonía de Pareja", "Experiencia Compartida"],
    rating: 5,
    reviews: 38
  },
  {
    id: 4,
    name: "Luna",
    age: 26,
    specialty: "Ritual Tantrico Personalizado",
    image: "/images/masseurs/Luna/luna01.jpg",
    images: [
      "/images/masseurs/Luna/luna01.jpg",
      "/images/masseurs/Luna/luna02.jpg",
      "/images/masseurs/Luna/luna03.jpg",
      "/images/masseurs/Luna/luna04.jpg",
      "/images/masseurs/Luna/luna05.jpg",
      "/images/masseurs/Luna/luna06.jpg",
      "/images/masseurs/Luna/luna07.jpg"
    ],
    description: "Creadora de rituales tantricos personalizados. Cada sesión es una experiencia única adaptada a tus necesidades específicas.",
    skills: ["Rituales Personalizados", "Adaptación Individual", "Experiencia Única", "Bienestar Personal"],
    rating: 5,
    reviews: 41
  },
  {
    id: 5,
    name: "Valeria",
    age: 24,
    specialty: "Masaje Sensual Premium",
    image: "/images/masseurs/Valeria/valeria01.jpg",
    images: [
      "/images/masseurs/Valeria/valeria01.jpg",
      "/images/masseurs/Valeria/valeria02.jpg",
      "/images/masseurs/Valeria/valeria03.jpg",
      "/images/masseurs/Valeria/valeria04.jpg"
    ],
    description: "Especialista en masaje sensual premium. Su técnica refinada combina sensualidad y profesionalismo para una experiencia inolvidable.",
    skills: ["Masaje Sensual", "Técnica Refinada", "Profesionalismo", "Experiencia Inolvidable"],
    rating: 5,
    reviews: 35
  },
  {
    id: 6,
    name: "Natalia",
    age: 29,
    specialty: "Masaje Tantrico Exclusivo",
    image: "/images/masseurs/Natalia/natalia01.jpg",
    images: [
      "/images/masseurs/Natalia/natalia01.jpg",
      "/images/masseurs/Natalia/natalia02.jpg",
      "/images/masseurs/Natalia/natalia03.jpg",
      "/images/masseurs/Natalia/natalia04.jpg",
      "/images/masseurs/Natalia/natalia05.jpg",
      "/images/masseurs/Natalia/natalia06.jpg",
      "/images/masseurs/Natalia/natalia07.jpg",
      "/images/masseurs/Natalia/natalia08.jpg",
      "/images/masseurs/Natalia/natalia09.jpg"
    ],
    description: "Maestra en masaje tantrico exclusivo. Su experiencia y elegancia crean momentos de lujo y bienestar incomparables.",
    skills: ["Masaje Exclusivo", "Elegancia", "Lujo", "Bienestar Incomparable"],
    rating: 5,
    reviews: 44
  }
];

function MasajistaCard({ masajista }: { masajista: typeof masajistas[0] }) {
  // Usamos todas las fotos disponibles de la masajista
  const images = masajista.images || [masajista.image, masajista.image, masajista.image];
  const [current, setCurrent] = useState(0);

  // Autoplay carrusel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="group bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-3xl p-0 border border-amber-900/30 hover:border-amber-600/40 transition-all duration-500 shadow-2xl hover:shadow-amber-900/30 overflow-hidden relative">
      {/* Galería principal */}
      <div className="relative w-full h-96 overflow-hidden md:h-[500px] flex items-center justify-center bg-black">
        <Image
          src={images[current]}
          alt={masajista.name}
          fill
          className="object-cover object-center transition-all duration-700 scale-105 group-hover:scale-110"
          priority
        />
        {/* Overlay degradado para texto */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />
        {/* Indicadores de galería */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full border-2 border-amber-400 transition-all duration-300 ${current === idx ? 'bg-amber-400' : 'bg-black/40'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ver imagen ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Info de la masajista */}
      <div className="relative z-20 px-8 py-8 md:py-10 flex flex-col items-center text-center bg-gradient-to-t from-black/80 via-black/60 to-transparent">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-3xl md:text-4xl font-light tracking-wider text-amber-400 tenali-ramakrishna">
            {masajista.name}
          </h3>
          <span className="text-lg md:text-xl text-amber-200 font-light ml-2">({masajista.age} años)</span>
        </div>
        <div className="flex items-center justify-center mb-2">
          {[...Array(masajista.rating)].map((_, i) => (
            <span key={i} className="text-amber-400 text-xl">★</span>
          ))}
          <span className="text-gray-400 text-sm ml-2">({masajista.reviews} opiniones)</span>
        </div>
        <p className="text-lg font-light text-amber-300 mb-3 tenali-ramakrishna">
          {masajista.specialty}
        </p>
        <p className="text-gray-200 mb-4 leading-relaxed text-base">
          {masajista.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {masajista.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="text-xs bg-amber-900/30 text-amber-300 px-3 py-1 rounded-full border border-amber-600/30"
            >
              {skill}
            </span>
          ))}
        </div>
                 <button 
           onClick={() => window.location.href = '/whatsapp'}
           className="tenali-ramakrishna border border-amber-400 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-full hover:from-amber-600/30 hover:to-amber-800/30 text-amber-300 px-8 py-3 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105 mt-2 shadow-lg"
         >
           RESERVAR CON {masajista.name.toUpperCase()}
         </button>
      </div>
    </div>
  );
}

const MasajistasPage = () => {
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
      {/* Mandalas */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0">
        <div className="absolute top-0 left-0 -translate-x-[60%] md:-translate-x-1/2 w-[600px] h-[600px]">
          <span className="glow-mandala"></span>
          <Image src="/images/Mandala.webp" alt="Mandala sagrado masaje tantrico Mallorca" width={600} height={600} className="object-contain w-full h-full relative z-10" />
        </div>
        <div className="absolute top-0 right-0 translate-x-[60%] md:translate-x-1/2 w-[600px] h-[600px]">
          <span className="glow-mandala"></span>
          <Image src="/images/Mandala.webp" alt="Símbolo tantrico energético Palma Mallorca" width={600} height={600} className="object-contain w-full h-full relative z-10" style={{ transform: 'scaleX(-1)' }} />
        </div>
      </div>
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <main className="relative z-10 px-4 md:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">NUESTRAS ESPECIALISTAS</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 gradiente-dorado cormorant-garamond">MASAJISTAS TANTRICAS</h1>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">BELLEZA, ARTE Y ENERGÍA EN CADA SESIÓN</h2>
            <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 tenali-ramakrishna">Descubre la galería y el perfil de cada una de nuestras masajistas eróticas, conoce su experiencia y reserva tu cita</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {masajistas.map((masajista) => (
              <MasajistaCard key={masajista.id} masajista={masajista} />
            ))}
          </div>
        </div>
      </main>
            {/* Footer */}
      <Footer />
    </div>
  );
};

export default MasajistasPage;
