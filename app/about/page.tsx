'use client'

import React from 'react';
import Image from 'next/image';
import Header from '@/components/ui/sections/Header';

type TeamMember = {
    id: number;
    name: string;
    role: string;
    experience: string;
    specialties: string[];
    description: string;
    image: string;
};

const teamMembers = [
    {
        id: 1,
        name: "MAYA SERENITY",
        role: "Directora & Maestra Tántrica Principal",
        experience: "15+ años",
        specialties: ["Tantra Tradicional", "Rituales Sagrados", "Sanación Energética"],
        description: "Maya es una maestra tántrica certificada con más de 15 años de experiencia en prácticas sagradas. Formada en India y Tailandia, combina sabiduría ancestral con enfoques modernos de bienestar.",
        image: "/images/PlaceDeluxe_01.jpg"
    },
    {
        id: 2,
        name: "LUNA CELESTIAL",
        role: "Especialista en Parejas",
        experience: "10+ años",
        specialties: ["Terapia de Parejas", "Conexión Íntima", "Talleres Educativos"],
        description: "Luna se especializa en ayudar a las parejas a redescubrir su conexión íntima. Su enfoque compasivo y profesional ha transformado cientos de relaciones.",
        image: "/images/PlaceDeluxe_02.jpg"
    },
    {
        id: 3,
        name: "ARIA MYSTIQUE",
        role: "Terapeuta Sensorial",
        experience: "8+ años",
        specialties: ["Experiencias Sensoriales", "Meditación", "Aromaterapia"],
        description: "Aria crea experiencias sensoriales únicas que despiertan todos los sentidos. Su trabajo se centra en la conexión mente-cuerpo a través del tacto consciente.",
        image: "/images/PlaceDeluxe_01.jpg"
    }
];

const milestones = [
    {
        year: "2019",
        title: "FUNDACIÓN",
        description: "Tantric Luxe Mallorca abre sus puertas como el primer spa tántrico de lujo en Palma."
    },
    {
        year: "2020",
        title: "EXPANSIÓN",
        description: "Ampliación de instalaciones con nuevas suites VIP y jacuzzis privados."
    },
    {
        year: "2021",
        title: "RECONOCIMIENTO",
        description: "Premio al mejor spa de bienestar alternativo de las Islas Baleares."
    },
    {
        year: "2022",
        title: "CERTIFICACIÓN",
        description: "Certificación internacional en prácticas tántricas tradicionales y terapias de bienestar."
    },
    {
        year: "2023",
        title: "INNOVACIÓN",
        description: "Introducción de tecnología avanzada para experiencias inmersivas y personalizadas."
    },
    {
        year: "2024",
        title: "EXCELENCIA",
        description: "Más de 5000 clientes satisfechos y reconocimiento como referente en turismo de bienestar."
    }
];

const values = [
    {
        icon: "🔒",
        title: "PRIVACIDAD ABSOLUTA",
        description: "Garantizamos confidencialidad total en cada aspecto de tu experiencia con nosotros."
    },
    {
        icon: "🌟",
        title: "EXCELENCIA",
        description: "Nos comprometemos con los más altos estándares de calidad en todos nuestros servicios."
    },
    {
        icon: "🤝",
        title: "RESPETO",
        description: "Tratamos a cada cliente con dignidad, respeto y comprensión total de sus necesidades."
    },
    {
        icon: "🌱",
        title: "BIENESTAR INTEGRAL",
        description: "Enfocamos nuestro trabajo en el bienestar completo: físico, mental y espiritual."
    },
    {
        icon: "🎯",
        title: "PERSONALIZACIÓN",
        description: "Cada experiencia es única y adaptada específicamente a tus deseos y necesidades."
    },
    {
        icon: "✨",
        title: "TRANSFORMACIÓN",
        description: "Creamos experiencias que generan cambios positivos y duraderos en tu vida."
    }
];

const AboutPage = () => {
    const [selectedMember, setSelectedMember] = React.useState<TeamMember | null>(null);

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
                            ACERCA DE NOSOTROS
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-light tracking-wider mb-4 gradiente-dorado">
                            NUESTRA
                        </h1>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest mb-6 text-gray-300 tenali-ramakrishna">
                            HISTORIA
                        </h2>
                        <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl font-light tracking-widest mb-8 text-gray-300 max-w-4xl mx-auto">
                            Desde 2019, hemos sido pioneros en crear experiencias tántricas de lujo que transforman vidas y elevan la conciencia en el corazón de Mallorca.
                        </p>
                    </div>

                    {/* Our Story Section */}
                    <section className="mb-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                                    UN SANTUARIO DE LUJO Y SENSUALIDAD
                                </h2>
                                <div className="w-24 h-px bg-amber-400 mb-8"></div>
                                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                    En Tantric Luxe Mallorca, hemos creado más que un spa; hemos desarrollado un santuario donde el arte ancestral del tantra se encuentra con el lujo contemporáneo más refinado. Nuestra visión es proporcionar un espacio sagrado donde nuestros huéspedes puedan explorar, sanar y transformarse.
                                </p>
                                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                    Cada detalle de nuestras instalaciones ha sido meticulosamente diseñado para crear una atmósfera que despierte todos los sentidos. Desde los aceites esenciales importados directamente de sus lugares de origen hasta la música ambiental compuesta específicamente para cada tipo de experiencia.
                                </p>
                                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                    Nuestro equipo está formado por profesionales altamente capacitados y certificados internacionalmente, comprometidos con mantener los más altos estándares de excelencia, privacidad y respeto en cada interacción.
                                </p>

                                <div className="grid grid-cols-3 gap-8 text-center">
                                    <div className="bg-gradient-to-br from-amber-900/20 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
                                        <h4 className="text-3xl font-light text-amber-400 mb-2">5000+</h4>
                                        <p className="text-sm text-gray-400">Clientes satisfechos</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-amber-900/20 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
                                        <h4 className="text-3xl font-light text-amber-400 mb-2">6</h4>
                                        <p className="text-sm text-gray-400">Años de excelencia</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-amber-900/20 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20">
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
                                    width={600}
                                    height={800}
                                    className="rounded-lg shadow-2xl w-full h-auto"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Timeline Section */}
                    <section className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                                NUESTRO CAMINO
                            </h2>
                            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-600 to-amber-900"></div>

                            <div className="space-y-16">
                                {milestones.map((milestone, index) => (
                                    <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <div className="flex-1 px-8">
                                            <div className={`bg-gradient-to-br from-amber-900/20 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                                <h3 className="text-2xl font-light tracking-wider text-amber-400 mb-2 tenali-ramakrishna">
                                                    {milestone.title}
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Timeline node */}
                                        <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center border-4 border-black">
                                            <span className="text-white font-light text-sm tenali-ramakrishna">
                                                {milestone.year}
                                            </span>
                                        </div>

                                        <div className="flex-1 px-8"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                                NUESTRO EQUIPO
                            </h2>
                            <div className="w-24 h-px bg-amber-400 mx-auto mb-8"></div>
                            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                                Conoce a los profesionales dedicados que hacen posible cada experiencia transformadora en Tantric Luxe Mallorca.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg border border-amber-900/20 hover:border-amber-600/40 transition-all duration-300 overflow-hidden group cursor-pointer"
                                    onClick={() => setSelectedMember(member)}
                                >
                                    <div className="relative h-80 overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={400}
                                            height={500}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-xl font-light tracking-wider text-amber-400 mb-1 tenali-ramakrishna">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm text-gray-300">{member.role}</p>
                                            <p className="text-xs text-amber-500 mt-1">{member.experience}</p>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                            {member.description.substring(0, 120)}...
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {member.specialties.slice(0, 2).map((specialty, index) => (
                                                <span key={index} className="bg-amber-900/30 text-amber-400 text-xs px-2 py-1 rounded-full">
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                        <button
                                            className="text-amber-400 text-sm hover:text-amber-300 transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedMember(member);
                                            }}
                                        >
                                            CONOCER MÁS →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                                NUESTROS VALORES
                            </h2>
                            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-8 border border-amber-900/20 hover:border-amber-600/40 transition-all duration-300 text-center group"
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center group-hover:from-amber-600/30 group-hover:to-amber-900/30 transition-colors">
                                        <span className="text-3xl">{value.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-light tracking-wider text-amber-400 mb-4 tenali-ramakrishna">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Philosophy Section */}
                    <section className="mb-24">
                        <div className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-lg p-12 border border-amber-600/30">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                                    NUESTRA FILOSOFÍA
                                </h2>
                                <div className="w-24 h-px bg-amber-400 mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <blockquote className="text-2xl font-light text-gray-300 italic leading-relaxed mb-8">
                                        &quot;El tantra no es solo una práctica, es un camino hacia la comprensión profunda de uno mismo y la conexión auténtica con otros. En cada experiencia que creamos, honramos esta sabiduría ancestral mientras abrazamos la belleza del momento presente.&quot;
                                    </blockquote>
                                    <div className="text-amber-400 text-lg tenali-ramakrishna">
                                        — Filosofía Tantric Luxe
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-3 h-3 bg-amber-400 rounded-full mr-4 mt-2"></div>
                                        <div>
                                            <h4 className="text-lg text-amber-400 mb-2 tenali-ramakrishna">CONEXIÓN AUTÉNTICA</h4>
                                            <p className="text-gray-300 text-sm">Facilitamos encuentros genuinos contigo mismo y con otros, libre de juicios y lleno de aceptación.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-3 h-3 bg-amber-400 rounded-full mr-4 mt-2"></div>
                                        <div>
                                            <h4 className="text-lg text-amber-400 mb-2 tenali-ramakrishna">SANACIÓN INTEGRAL</h4>
                                            <p className="text-gray-300 text-sm">Creemos en el poder sanador del tacto consciente y la presencia mindful para restaurar el equilibrio.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-3 h-3 bg-amber-400 rounded-full mr-4 mt-2"></div>
                                        <div>
                                            <h4 className="text-lg text-amber-400 mb-2 tenali-ramakrishna">TRANSFORMACIÓN CONSCIENTE</h4>
                                            <p className="text-gray-300 text-sm">Cada experiencia está diseñada para catalizar cambios positivos y duraderos en tu vida.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Certifications Section */}
                    <section className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                                CERTIFICACIONES Y RECONOCIMIENTOS
                            </h2>
                            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "CERTIFICACIÓN INTERNACIONAL",
                                    subtitle: "Tantra Tradicional",
                                    year: "2022"
                                },
                                {
                                    title: "PREMIO EXCELENCIA",
                                    subtitle: "Turismo de Bienestar",
                                    year: "2023"
                                },
                                {
                                    title: "CERTIFICACIÓN ISO",
                                    subtitle: "Calidad y Seguridad",
                                    year: "2023"
                                },
                                {
                                    title: "RECONOCIMIENTO",
                                    subtitle: "Mejor Spa Alternativo",
                                    year: "2024"
                                }
                            ].map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-900/20 text-center"
                                >
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center">
                                        <span className="text-2xl">🏆</span>
                                    </div>
                                    <h3 className="text-amber-400 font-light tracking-wider mb-2 tenali-ramakrishna">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-2">{cert.subtitle}</p>
                                    <p className="text-amber-500 text-xs">{cert.year}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Team Member Detail Modal */}
                {selectedMember && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-gradient-to-br from-amber-900/20 to-black/40 backdrop-blur-sm rounded-lg border border-amber-600/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-3xl font-light tracking-wider text-amber-400 mb-2 tenali-ramakrishna">
                                            {selectedMember.name}
                                        </h2>
                                        <p className="text-gray-300 text-lg">{selectedMember.role}</p>
                                        <p className="text-amber-500">{selectedMember.experience}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedMember(null)}
                                        className="text-gray-400 hover:text-white text-3xl"
                                    >
                                        ×
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <Image
                                            src={selectedMember.image}
                                            alt={selectedMember.name}
                                            width={400}
                                            height={500}
                                            className="w-full h-80 object-cover rounded-lg mb-6"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-light tracking-wider text-amber-400 mb-4 tenali-ramakrishna">
                                            ACERCA DE {selectedMember.name.split(' ')[0]}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {selectedMember.description}
                                        </p>

                                        <h3 className="text-lg font-light tracking-wider text-amber-400 mb-4 tenali-ramakrishna">
                                            ESPECIALIDADES:
                                        </h3>
                                        <div className="space-y-2 mb-6">
                                            {selectedMember.specialties.map((specialty, index) => (
                                                <div key={index} className="flex items-center">
                                                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                                                    <span className="text-gray-300">{specialty}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button className="w-full tenali-ramakrishna border-1 border-yellow-400 bg-gradient-carnemarron rounded-3xl hover:from-yellow-500 hover:to-amber-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors">
                                            SOLICITAR SESIÓN
                                        </button>
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

export default AboutPage;