import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import AboutPageClient from '@/components/pages/AboutPageClient';

export default async function AboutPage({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <AboutPageClient
      dictionary={dictionary.aboutPage}
      milestones={dictionary.aboutPage.milestones}
    />
  );
}