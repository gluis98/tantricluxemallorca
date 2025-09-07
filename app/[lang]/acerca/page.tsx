import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';
import AboutPageClient from '@/components/pages/AboutPageClient';

type PageProps = {
  params: { lang: Locale };
};

export default async function AboutPage({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);

  return (
    <AboutPageClient
      dictionary={dictionary.aboutPage}
      milestones={dictionary.aboutPage.milestones}
    />
  );
}