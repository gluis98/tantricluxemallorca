import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import MasseusesPageClient from '@/components/pages/MasseusesPageClient';

type PageProps = {
  params: { lang: Locale };
};

export default async function MasajistasPage({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);

  return (
    <MasseusesPageClient
      dictionary={dictionary.masseusesPage}
      masseuses={dictionary.masseusesPage.masseuses}
    />
  );
}
