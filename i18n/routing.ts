import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pl', 'en', 'de'],

  defaultLocale: 'pl',
});
