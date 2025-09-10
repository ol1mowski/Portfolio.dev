import { useTranslations } from 'next-intl';
import { type MenuItemType } from '@/types/MenuItemType.types';

export const useTranslatedMenuItems = (): MenuItemType[] => {
  const t = useTranslations('navigation');

  return [
    { to: '#home', label: t('home') },
    { to: '#about', label: t('about') },
    { to: '#projects', label: t('projects') },
    { to: '/Blog', label: t('blog') },
    { to: '#opinions', label: t('opinions') },
    { to: '#contact', label: t('contact') },
  ];
};
