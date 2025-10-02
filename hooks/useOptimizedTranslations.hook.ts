import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

export function useOptimizedTranslations(section?: string) {
  const t = useTranslations(section);

  return useMemo(() => t, [t]);
}

export function useMultipleTranslations(sections: string[]) {
  const blogT = useTranslations('blog');
  const commonT = useTranslations('common');
  const heroT = useTranslations('hero');
  const contactT = useTranslations('contact');
  const projectsT = useTranslations('projects');
  const aboutT = useTranslations('about');
  const servicesT = useTranslations('services');
  const ebookT = useTranslations('ebook');
  const opinionsT = useTranslations('opinions');

  return useMemo(() => {
    const translations: Record<string, ReturnType<typeof useTranslations>> = {};

    if (sections.includes('blog')) translations.blog = blogT;
    if (sections.includes('common')) translations.common = commonT;
    if (sections.includes('hero')) translations.hero = heroT;
    if (sections.includes('contact')) translations.contact = contactT;
    if (sections.includes('projects')) translations.projects = projectsT;
    if (sections.includes('about')) translations.about = aboutT;
    if (sections.includes('services')) translations.services = servicesT;
    if (sections.includes('ebook')) translations.ebook = ebookT;
    if (sections.includes('opinions')) translations.opinions = opinionsT;

    return translations;
  }, [sections, blogT, commonT, heroT, contactT, projectsT, aboutT, servicesT, ebookT, opinionsT]);
}

export function useConditionalTranslations(section: string, condition: boolean) {
  const t = useTranslations(condition ? section : undefined);

  return useMemo(() => {
    if (!condition) {
      return () => '';
    }
    return t;
  }, [t, condition]);
}
