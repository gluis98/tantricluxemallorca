import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import ServicesPageClient from '@/components/pages/ServicesPageClient';

type PageProps = {
  params: { lang: Locale };
};

export default async function ServicesPage({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);

  return (
    <ServicesPageClient
      services={dictionary.servicesPage.services}
      packages={dictionary.servicesPage.packages}
      faqs={dictionary.servicesPage.faqs}
      dictionary={dictionary.servicesPage}
    />
  );
}