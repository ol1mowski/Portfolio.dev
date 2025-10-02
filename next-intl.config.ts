import { getRequestConfig } from 'next-intl/server';
import { routing } from './i18n/routing';
import { translationCache } from './lib/translationCache';

// Cache for loaded messages to avoid repeated imports
const messageCache = new Map<string, any>();

async function loadMessages(locale: string) {
  const cacheKey = `messages_${locale}`;

  // Check both caches
  if (messageCache.has(locale)) {
    return messageCache.get(locale);
  }

  if (translationCache.has(cacheKey)) {
    const cached = translationCache.get(cacheKey);
    messageCache.set(locale, cached);
    return cached;
  }

  try {
    // Load all message files for the locale
    const [
      common,
      hero,
      blog,
      contact,
      projects,
      ebook,
      services,
      about,
      opinions,
      collaboration,
      business,
      materials,
      chat,
      configurator,
      notFound,
      privacy,
    ] = await Promise.all([
      import(`./messages/${locale}/common.json`),
      import(`./messages/${locale}/hero.json`),
      import(`./messages/${locale}/blog.json`),
      import(`./messages/${locale}/contact.json`),
      import(`./messages/${locale}/projects.json`),
      import(`./messages/${locale}/ebook.json`),
      import(`./messages/${locale}/services.json`),
      import(`./messages/${locale}/about.json`),
      import(`./messages/${locale}/opinions.json`),
      import(`./messages/${locale}/collaboration.json`),
      import(`./messages/${locale}/business.json`),
      import(`./messages/${locale}/materials.json`),
      import(`./messages/${locale}/chat.json`),
      import(`./messages/${locale}/configurator.json`),
      import(`./messages/${locale}/notFound.json`),
      import(`./messages/${locale}/privacy.json`),
    ]);

    const messages = {
      ...common.default,
      ...hero.default,
      ...blog.default,
      ...contact.default,
      ...projects.default,
      ...ebook.default,
      ...services.default,
      ...about.default,
      ...opinions.default,
      ...collaboration.default,
      ...business.default,
      ...materials.default,
      ...chat.default,
      ...configurator.default,
      ...notFound.default,
      ...privacy.default,
    };

    // Store in both caches
    messageCache.set(locale, messages);
    translationCache.set(cacheKey, messages);
    return messages;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    // Fallback to default locale
    if (locale !== routing.defaultLocale) {
      return loadMessages(routing.defaultLocale);
    }
    throw error;
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = await loadMessages(locale);

  return {
    locale,
    messages,
  };
});
