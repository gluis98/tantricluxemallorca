import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import ContactPageClient from '@/components/pages/ContactPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://tantricluxemallorca.com';
  const paths = {
    es: '/contacto',
    en: '/contact',
    de: '/kontakt',
  };
  const currentUrl = `${baseUrl}/${lang}${paths[lang]}`;
  
  const alternates: Record<string, string> = {
    'es': `${baseUrl}/es/contacto`,
    'en': `${baseUrl}/en/contact`,
    'de': `${baseUrl}/de/kontakt`,
    'x-default': `${baseUrl}/es/contacto`,
  };

  return {
    title: dictionary.contactPage.meta_title,
    description: dictionary.contactPage.meta_description,
    keywords: dictionary.contactPage.meta_keywords,
    alternates: {
      canonical: currentUrl,
      languages: alternates,
    },
    openGraph: {
      title: dictionary.contactPage.meta_title,
      description: dictionary.contactPage.meta_description,
      url: currentUrl,
      siteName: 'Tantric Luxe Mallorca',
      locale: lang === 'es' ? 'es_ES' : lang === 'en' ? 'en_US' : 'de_DE',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-contact.jpg`,
          width: 1200,
          height: 630,
          alt: dictionary.contactPage.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.contactPage.meta_title,
      description: dictionary.contactPage.meta_description,
      images: [`${baseUrl}/images/og-contact.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>; 
}) {
  const { lang } = await params; 
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://tantricluxemallorca.com';
  
  // JSON-LD para la página Contact
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Tantric Luxe Mallorca',
      telephone: '+34-602-560-426',
      email: 'info@tantricluxemallorca.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plaça de Santa Magdalena, 3A, Centre',
        addressLocality: 'Palma',
        addressRegion: 'Illes Balears',
        postalCode: '07012',
        addressCountry: 'ES',
      },
      openingHours: 'Mo-Su 09:00-23:00',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '39.5736032',
        longitude: '2.6386885',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPageClient
        dictionary={dictionary.contactPage}
        services={dictionary.servicesPage.services}
      />
    </>
  );
}