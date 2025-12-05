import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';

import HeroSection from '@/components/ui/sections/Hero';
import Gallery from '@/components/ui/sections/Gallery';
import ServicesSection from '@/components/ui/sections/Services';
import AboutSection from '@/components/ui/sections/About';
// import TestimonialsSection from '@/components/ui/sections/Testimonials';
import ContactSection from '@/components/ui/sections/Contact';
import MasajistasModal from '@/components/banners/MasseursModal';
import MaintenanceModal from '@/components/modals/MaintenanceModal';

export default async function TantricLuxeSpa({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  // MODO MANTENIMIENTO ACTIVADO
  const maintenanceMode = true;

  if (maintenanceMode) {
    return (
      <>
        {/* Modal de Mantenimiento - No puede cerrarse */}
        <MaintenanceModal />
      </>
    );
  }

  return (
    <>
      <main className="relative z-10 px-0 md:px-8 py-8">

        {/* Hero Section */}
        <HeroSection dictionary={dictionary.homepage} />

        {/* Gallery Section */}
        <Gallery dictionary={dictionary.homepage.gallery_section} />

        {/* Services Section */}
        <ServicesSection lang={lang} dictionary={dictionary.homepage.services_section} services={dictionary.servicesPage.services} />

        {/* About Us Section */}
        <AboutSection dictionary={dictionary.homepage.about_us_section} />

        {/* Testimonials Section */}
        {/* <TestimonialsSection dictionary={dictionary.homepage.testimonials_section} /> */}

        {/* Contact Section */}
        <ContactSection dictionary={dictionary.homepage.contact_section} services={dictionary.servicesPage.services} />

      </main>

      {/* Masseuses Modal */}
      <MasajistasModal />
    </>
  );
}