import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import AboutPageClient from '@/components/pages/AboutPageClient';
import { i18n } from '@/i18n-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://tantricluxemallorca.com';
  const paths = {
    es: '/acerca',
    en: '/about',
    de: '/uber-uns',
  };
  const currentUrl = `${baseUrl}/${lang}${paths[lang]}`;
  
  const alternates: Record<string, string> = {
    'es': `${baseUrl}/es/acerca`,
    'en': `${baseUrl}/en/about`,
    'de': `${baseUrl}/de/uber-uns`,
    'x-default': `${baseUrl}/es/acerca`,
  };

  return {
    title: dictionary.aboutPage.meta_title,
    description: dictionary.aboutPage.meta_description,
    keywords: dictionary.aboutPage.meta_keywords,
    alternates: {
      canonical: currentUrl,
      languages: alternates,
    },
    openGraph: {
      title: dictionary.aboutPage.meta_title,
      description: dictionary.aboutPage.meta_description,
      url: currentUrl,
      siteName: 'Tantric Luxe Mallorca',
      locale: lang === 'es' ? 'es_ES' : lang === 'en' ? 'en_US' : 'de_DE',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-about.jpg`,
          width: 1200,
          height: 630,
          alt: dictionary.aboutPage.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.aboutPage.meta_title,
      description: dictionary.aboutPage.meta_description,
      images: [`${baseUrl}/images/og-about.jpg`],
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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://tantricluxemallorca.com';
  
  // JSON-LD para la página About
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Tantric Luxe Mallorca',
      description: dictionary.aboutPage.meta_description,
      foundingDate: '2019',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Carrer del Pare Bartomeu Pou, 44, Nord',
        addressLocality: 'Palma',
        addressRegion: 'Illes Balears',
        postalCode: '07003',
        addressCountry: 'ES',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '5000',
        bestRating: '5',
        worstRating: '5',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPageClient
        dictionary={dictionary.aboutPage}
        milestones={dictionary.aboutPage.milestones}
      />
    </>
  );
}