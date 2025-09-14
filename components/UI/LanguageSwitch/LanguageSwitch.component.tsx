'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import s from './LanguageSwitch.component.module.scss';

const languages = [
  {
    code: 'pl',
    name: 'Pol',
    flag: 'https://flagcdn.com/w20/pl.png',
  },
  {
    code: 'en',
    name: 'Eng',
    flag: 'https://flagcdn.com/w20/us.png',
  },
  {
    code: 'de',
    name: 'Deu',
    flag: 'https://flagcdn.com/w20/de.png',
  },
];

interface LanguageSwitchProps {
  variant?: 'header' | 'mobile';
}

export default function LanguageSwitch({ variant = 'header' }: LanguageSwitchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const pathSegments = pathname.split('/');
  const pathLocale = pathSegments[1] || 'pl';

  const intlLocale = useLocale();
  const locale = intlLocale || pathLocale;

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (langCode: string, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    const segments = pathname.split('/');
    segments[1] = langCode;
    const newPath = segments.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  const containerClass = variant === 'mobile' ? s.languageSwitch__mobile : s.languageSwitch;

  return (
    <div className={containerClass} onClick={e => e.stopPropagation()}>
      <button
        className={s.languageSwitch__trigger}
        onClick={e => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-label="Wybierz język"
        aria-expanded={isOpen}
      >
        <Image
          src={currentLanguage.flag}
          alt={`${currentLanguage.name} flag`}
          width={20}
          height={15}
          className={s.languageSwitch__flag}
        />
        <span className={s.languageSwitch__code}>{currentLanguage.code.toUpperCase()}</span>
        <span className={`${s.languageSwitch__arrow} ${isOpen ? s.open : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className={s.languageSwitch__dropdown}>
          {languages.map(language => (
            <button
              key={language.code}
              className={`${s.languageSwitch__option} ${language.code === locale ? s.active : ''}`}
              onClick={e => handleLanguageChange(language.code, e)}
              disabled={language.code === locale}
            >
              <Image
                src={language.flag}
                alt={`${language.name} flag`}
                width={20}
                height={15}
                className={s.languageSwitch__flag}
              />
              <span className={s.languageSwitch__name}>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
