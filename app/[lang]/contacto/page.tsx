import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import ContactPageClient from '@/components/pages/ContactPageClient';

type PageProps = {
  params: { lang: Locale };
};

export default async function ContactPage({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);

  return (
    <ContactPageClient
      dictionary={dictionary.contactPage}
      services={dictionary.servicesPage.services}
    />
  );
}