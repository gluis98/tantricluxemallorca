import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';

import HomePageClient from '@/components/pages/HomePageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://tantricluxemallorca.com';
  const currentUrl = `${baseUrl}/${lang === 'es' ? '' : `${lang}/`}`;
  
  const alternates: Record<string, string> = {
    'es': `${baseUrl}/es`,
    'en': `${baseUrl}/en`,
    'de': `${baseUrl}/de`,
    'x-default': `${baseUrl}/es`,
  };

  return {
    title: dictionary.homepage.meta_title,
    description: dictionary.homepage.meta_description,
    keywords: dictionary.homepage.meta_keywords,
    alternates: {
      canonical: currentUrl,
      languages: alternates,
    },
    openGraph: {
      title: dictionary.homepage.meta_title,
      description: dictionary.homepage.meta_description,
      url: currentUrl,
      siteName: 'Tantric Luxe Mallorca',
      locale: lang === 'es' ? 'es_ES' : lang === 'en' ? 'en_US' : 'de_DE',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-home.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tantric Luxe Mallorca - Masaje Tantrico Palma',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.homepage.meta_title,
      description: dictionary.homepage.meta_description,
      images: [`${baseUrl}/images/og-home.jpg`],
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

export default async function TantricLuxeSpa({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://tantricluxemallorca.com';
  
  // JSON-LD para la página home
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/${lang === 'es' ? '' : `${lang}/`}`,
    name: 'Tantric Luxe Mallorca',
    alternateName: 'Tantric Luxe',
    description: dictionary.homepage.meta_description,
    url: baseUrl,
    telephone: '+34-602-560-426',
    email: 'info@tantricluxemallorca.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer del Pare Bartomeu Pou, 44, Nord',
      addressLocality: 'Palma',
      addressRegion: 'Illes Balears',
      postalCode: '07003',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '39.5736032',
      longitude: '2.6386885',
    },
    openingHours: [
      'Mo-Su 09:00-23:00',
    ],
    priceRange: '€120-€499',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card',
    areaServed: {
      '@type': 'City',
      name: 'Palma de Mallorca',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '39.5736032',
        longitude: '2.6386885',
      },
      geoRadius: {
        '@type': 'Distance',
        value: '50',
        unitCode: 'KMT',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '5000',
      bestRating: '5',
      worstRating: '5',
    },
    sameAs: [
      'https://instagram.com/tantricluxemallorca',
      'https://facebook.com/tantricluxemallorca',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient lang={lang} dictionary={dictionary} />
    </>
  );
}