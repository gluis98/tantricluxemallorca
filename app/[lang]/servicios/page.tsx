import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import ServicesPageClient from '@/components/pages/ServicesPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://tantricluxemallorca.com';
  const paths = {
    es: '/servicios',
    en: '/services',
    de: '/leistungen',
  };
  const currentUrl = `${baseUrl}/${lang}${paths[lang]}`;
  
  const alternates: Record<string, string> = {
    'es': `${baseUrl}/es/servicios`,
    'en': `${baseUrl}/en/services`,
    'de': `${baseUrl}/de/leistungen`,
    'x-default': `${baseUrl}/es/servicios`,
  };

  return {
    title: dictionary.servicesPage.meta_title,
    description: dictionary.servicesPage.meta_description,
    keywords: dictionary.servicesPage.meta_keywords,
    alternates: {
      canonical: currentUrl,
      languages: alternates,
    },
    openGraph: {
      title: dictionary.servicesPage.meta_title,
      description: dictionary.servicesPage.meta_description,
      url: currentUrl,
      siteName: 'Tantric Luxe Mallorca',
      locale: lang === 'es' ? 'es_ES' : lang === 'en' ? 'en_US' : 'de_DE',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-services.jpg`,
          width: 1200,
          height: 630,
          alt: dictionary.servicesPage.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.servicesPage.meta_title,
      description: dictionary.servicesPage.meta_description,
      images: [`${baseUrl}/images/og-services.jpg`],
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

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://tantricluxemallorca.com';
  
  // JSON-LD para la página Services
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: dictionary.servicesPage.title,
    description: dictionary.servicesPage.meta_description,
    itemListElement: [
      ...(dictionary.servicesPage.services?.map((service: any, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          offers: {
            '@type': 'Offer',
            price: service.price,
            priceCurrency: 'EUR',
          },
        },
      })) || []),
      ...(Object.values(dictionary.goldenServices || {}).map((service: any, index: number) => ({
        '@type': 'ListItem',
        position: (dictionary.servicesPage.services?.length || 0) + index + 1,
        item: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          offers: {
            '@type': 'Offer',
            price: service.price,
            priceCurrency: 'EUR',
          },
        },
      })) || []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesPageClient
        services={dictionary.servicesPage.services}
        packages={dictionary.servicesPage.packages}
        faqs={dictionary.servicesPage.faqs}
        dictionary={dictionary.servicesPage}
      />
    </>
  );
}