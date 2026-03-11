import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import MasseusesPageClient from '@/components/pages/MasseusesPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://tantricluxemallorca.com';
  const paths = {
    es: '/masajistas',
    en: '/masseuses',
    de: '/masseurinnen',
  };
  const currentUrl = `${baseUrl}/${lang}${paths[lang]}`;
  
  const alternates: Record<string, string> = {
    'es': `${baseUrl}/es/masajistas`,
    'en': `${baseUrl}/en/masseuses`,
    'de': `${baseUrl}/de/masseurinnen`,
    'x-default': `${baseUrl}/es/masajistas`,
  };

  return {
    title: dictionary.masseusesPage.meta_title,
    description: dictionary.masseusesPage.meta_description,
    keywords: dictionary.masseusesPage.meta_keywords,
    alternates: {
      canonical: currentUrl,
      languages: alternates,
    },
    openGraph: {
      title: dictionary.masseusesPage.meta_title,
      description: dictionary.masseusesPage.meta_description,
      url: currentUrl,
      siteName: 'Tantric Luxe Mallorca',
      locale: lang === 'es' ? 'es_ES' : lang === 'en' ? 'en_US' : 'de_DE',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-masseuses.jpg`,
          width: 1200,
          height: 630,
          alt: dictionary.masseusesPage.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.masseusesPage.meta_title,
      description: dictionary.masseusesPage.meta_description,
      images: [`${baseUrl}/images/og-masseuses.jpg`],
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

export default async function MasajistasPage({
  params,
}: {
  params: Promise<{ lang: Locale }>; 
}) {
  const { lang } = await params; 
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://tantricluxemallorca.com';
  
  // JSON-LD para la página Masseuses
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: dictionary.masseusesPage.title,
    description: dictionary.masseusesPage.meta_description,
    itemListElement: dictionary.masseusesPage.masseuses?.map((masseuse: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: masseuse.name,
        jobTitle: 'Tantric Masseuse',
        description: masseuse.description,
        aggregateRating: masseuse.rating ? {
          '@type': 'AggregateRating',
          ratingValue: masseuse.rating.toString(),
          reviewCount: masseuse.reviews?.toString() || '0',
          bestRating: '5',
          worstRating: '5',
        } : undefined,
      },
    })) || [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MasseusesPageClient
        dictionary={dictionary.masseusesPage}
        masseuses={dictionary.masseusesPage.masseuses}
      />
    </>
  );
}
