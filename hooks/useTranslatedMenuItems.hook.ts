import { useLocale } from 'next-intl';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import { type MenuItemType } from '@/types/MenuItemType.types';

export const useTranslatedMenuItems = (): MenuItemType[] => {
  const t = useOptimizedTranslations('navigation');
  const locale = useLocale();

  return [
    { to: '#home', label: t('home') },
    { to: '#about', label: t('about') },
    { to: '#projects', label: t('projects') },
    { to: `/${locale}/Blog`, label: t('blog') },
    { to: '#opinions', label: t('opinions') },
    { to: '#contact', label: t('contact') },
  ];
};
