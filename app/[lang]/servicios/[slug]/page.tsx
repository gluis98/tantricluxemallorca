import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import ServiceDetailPageClient from '@/components/pages/ServiceDetailPageClient';
import { notFound } from 'next/navigation';

// Mapeo de slugs por idioma para los servicios reales
const serviceSlugsByLang: Record<string, string[]> = {
  es: [
    'paraiso-exotico-fantasia',
    'premium-sensual-4-manos',
    'tantric-deluxe',
    'armonia-tantra-pareja',
    'yacht-massage-experience'
  ],
  en: [
    'exotic-paradise-fantasy',
    'premium-sensual-4-hands',
    'tantric-deluxe',
    'couples-tantra-harmony',
    'yacht-massage-experience'
  ],
  de: [
    'exotisches-paradies-fantasie',
    'premium-sinnlich-4-handig',
    'tantra-deluxe',
    'tantra-harmonie-paare',
    'yacht-massage-erlebnis'
  ]
};

// Mapeo inverso: slug -> índice del servicio (independiente del idioma)
const slugToIndexMap: Record<string, number> = {
  // Español
  'paraiso-exotico-fantasia': 0,
  'premium-sensual-4-manos': 1,
  'armonia-tantra-pareja': 3,
  // Inglés
  'exotic-paradise-fantasy': 0,
  'premium-sensual-4-hands': 1,
  'couples-tantra-harmony': 3,
  // Alemán
  'exotisches-paradies-fantasie': 0,
  'premium-sinnlich-4-handig': 1,
  'tantra-deluxe': 2,
  'tantra-harmonie-paare': 3,
  'yacht-massage-erlebnis': 4,
  // Slugs compartidos entre idiomas
  'tantric-deluxe': 2,
  'yacht-massage-experience': 4,
};

// Función para generar metadata dinámica
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const dictionary = await getDictionary(lang);
  
  // Buscar el servicio por slug o por índice
  let service = dictionary.servicesPage?.services?.find((s: any) => s.slug === slug);
  
  // Si no se encuentra por slug directo, intentar por índice
  if (!service) {
    const serviceIndex = slugToIndexMap[slug];
    if (serviceIndex !== undefined && dictionary.servicesPage?.services?.[serviceIndex]) {
      service = dictionary.servicesPage.services[serviceIndex];
    }
  }
  
  if (!service) {
    return {
      title: 'Servicio no encontrado',
      description: 'El servicio solicitado no está disponible',
    };
  }

  const baseUrl = 'https://tantricluxemallorca.com';
  const paths = {
    es: '/servicios',
    en: '/services',
    de: '/leistungen',
  };
  const currentUrl = `${baseUrl}/${lang}${paths[lang]}/${service.slug}`;

  // Generar URLs alternativas para hreflang
  const alternates: Record<string, string> = {};
  
  // Obtener diccionarios para todos los idiomas
  const [esDict, enDict, deDict] = await Promise.all([
    getDictionary('es'),
    getDictionary('en'),
    getDictionary('de'),
  ]);
  
  const dictionaries = { es: esDict, en: enDict, de: deDict };
  
  // Obtener el índice del servicio actual
  let serviceIndex = dictionary.servicesPage.services.findIndex((s: any) => s.slug === slug);
  
  // Si no se encuentra por slug directo, usar el mapeo
  if (serviceIndex === -1) {
    serviceIndex = slugToIndexMap[slug] ?? -1;
  }
  
  if (serviceIndex !== -1) {
    ['es', 'en', 'de'].forEach((locale) => {
      const localeDict = dictionaries[locale as keyof typeof dictionaries];
      const altService = localeDict.servicesPage?.services?.[serviceIndex];
      if (altService && altService.slug) {
        alternates[locale] = `${baseUrl}/${locale}${paths[locale as keyof typeof paths]}/${altService.slug}`;
      }
    });
  }
  
  // x-default apunta al español
  const defaultService = esDict.servicesPage?.services?.[serviceIndex];
  if (defaultService) {
    alternates['x-default'] = `${baseUrl}/es/servicios/${defaultService.slug}`;
  }

  return {
    title: service.meta_title || `${service.title} | Tantric Luxe Mallorca`,
    description: service.meta_description || service.description,
    keywords: service.meta_keywords || `${service.title.toLowerCase()}, masaje erotico palma, masajes mallorca, spa palma, tantric luxe`,
    alternates: {
      canonical: currentUrl,
      languages: alternates,
    },
    openGraph: {
      title: service.meta_title || `${service.title} | Tantric Luxe Mallorca`,
      description: service.meta_description || service.description,
      url: currentUrl,
      siteName: 'Tantric Luxe Mallorca',
      locale: lang,
      type: 'website',
      images: [
        {
          url: service.image || `${baseUrl}/images/og-service.jpg`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.meta_title || `${service.title} | Tantric Luxe Mallorca`,
      description: service.meta_description || service.description,
      images: [service.image || `${baseUrl}/images/og-service.jpg`],
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

export async function generateStaticParams() {
  const slugs: { slug: string; lang: string }[] = [];
  
  Object.entries(serviceSlugsByLang).forEach(([lang, langSlugs]) => {
    langSlugs.forEach(slug => {
      slugs.push({ slug, lang });
    });
  });

  return slugs;
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  try {
    const { lang, slug } = await params;
    const dictionary = await getDictionary(lang);

    // Validar que servicesPage exista en el diccionario
    if (!dictionary || !dictionary.servicesPage || !dictionary.servicesPage.services) {
      console.error('servicesPage o services no encontrado en el diccionario');
      notFound();
    }

  // Buscar el servicio por slug o por índice
  let service = dictionary.servicesPage.services.find((s: any) => s.slug === slug);
  
  // Si no se encuentra por slug directo, intentar por índice
  if (!service) {
    const serviceIndex = slugToIndexMap[slug];
    if (serviceIndex !== undefined && dictionary.servicesPage.services[serviceIndex]) {
      service = dictionary.servicesPage.services[serviceIndex];
    }
  }
  
  if (!service) {
    console.error(`Servicio no encontrado: slug=${slug}, lang=${lang}`);
    notFound();
  }

    // Validar que el servicio tenga todas las propiedades necesarias
    if (!service.slug || !service.title || !service.description) {
      console.error('Servicio incompleto:', { slug: service?.slug, title: service?.title });
      notFound();
    }

    // Obtener servicios relacionados (excluyendo el actual)
    const relatedServices = dictionary.servicesPage.services
      .filter((s: any) => s && s.slug && s.slug !== service.slug)
      .slice(0, 3)
      .map((s: any) => ({
        slug: s.slug,
        title: s.title,
        description: (s.description || '').substring(0, 150) + '...',
      }));

    // Generar JSON-LD para SEO
    const baseUrl = 'https://tantricluxemallorca.com';
    const paths = {
      es: '/servicios',
      en: '/services',
      de: '/leistungen',
    };
    const currentUrl = `${baseUrl}/${lang}${paths[lang]}/${service.slug}`;
    const servicesPath = lang === 'es' ? 'servicios' : lang === 'en' ? 'services' : 'leistungen';
    const homeLabel = lang === 'es' ? 'Inicio' : lang === 'en' ? 'Home' : 'Startseite';
    const servicesLabel = lang === 'es' ? 'Servicios' : lang === 'en' ? 'Services' : 'Leistungen';
    
    // JSON-LD para el servicio
    const serviceJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Tantric Luxe Mallorca',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Carrer del Pare Bartomeu Pou, 44, Nord',
          addressLocality: 'Palma',
          addressRegion: 'Illes Balears',
          postalCode: '07003',
          addressCountry: 'ES',
        },
        telephone: '+34-602-560-426',
        url: baseUrl,
      },
      areaServed: {
        '@type': 'City',
        name: 'Palma de Mallorca',
      },
      offers: {
        '@type': 'Offer',
        price: service.price?.replace('€', '').replace('€', '').trim(),
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '250',
        bestRating: '5',
        worstRating: '5',
      },
    };

    // JSON-LD para Breadcrumbs
    const breadcrumbJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: homeLabel,
          item: `${baseUrl}/${lang}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: servicesLabel,
          item: `${baseUrl}/${lang}/${servicesPath}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.title,
          item: currentUrl,
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <ServiceDetailPageClient
          service={{
            slug: service.slug || '',
            title: service.title || '',
            meta_title: service.meta_title || service.title || '',
            meta_description: service.meta_description || service.description || '',
            meta_keywords: service.meta_keywords || '',
            description: service.description || '',
            full_description: service.fullDescription || service.description || '',
            features: service.features || [],
            duration: service.duration || '',
            price: service.price || '',
            image: service.image || '',
            faqs: [],
          }}
          dictionary={{
            reserve_button: dictionary.servicesPage?.reserve_button || 'RESERVAR',
            whatsapp_button: dictionary.contactPage?.whatsapp_button_text || 'WhatsApp',
            duration_label: lang === 'es' ? 'Duración' : lang === 'en' ? 'Duration' : 'Dauer',
            price_label: lang === 'es' ? 'Precio' : lang === 'en' ? 'Price' : 'Preis',
            features_title: lang === 'es' ? 'Características del Servicio' : lang === 'en' ? 'Service Features' : 'Leistungsmerkmale',
            description_title: lang === 'es' ? 'Sobre este Servicio' : lang === 'en' ? 'About this Service' : 'Über diesen Service',
            benefits_title: lang === 'es' ? 'Beneficios' : lang === 'en' ? 'Benefits' : 'Vorteile',
            book_now_title: lang === 'es' ? 'Reserva tu Experiencia' : lang === 'en' ? 'Book Your Experience' : 'Buchen Sie Ihr Erlebnis',
            related_services_title: lang === 'es' ? 'Otros Servicios que te Pueden Interesar' : lang === 'en' ? 'Other Services You May Like' : 'Andere Leistungen, die Sie interessieren könnten',
            faq_title: lang === 'es' ? 'Preguntas Frecuentes' : lang === 'en' ? 'Frequently Asked Questions' : 'Häufig gestellte Fragen',
          }}
          relatedServices={relatedServices}
          lang={lang}
          faqs={[]}
        />
      </>
    );
  } catch (error) {
    console.error('Error en ServiceDetailPage:', error);
    notFound();
  }
}
