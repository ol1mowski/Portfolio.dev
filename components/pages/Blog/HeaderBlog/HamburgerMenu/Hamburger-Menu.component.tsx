import s from './HamburgerMenu.module.scss';

import Image from 'next/image';

import { BlogITEMS, ITEMS } from '../StaticData';
import Item from '../Item/Item.component';
import { useLocale } from 'next-intl';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

function HamburgerMenuComponent({
  closeMenuHandler,
  type,
}: {
  closeMenuHandler: () => void;
  type?: string;
}) {
  const locale = useLocale();
  const t = useOptimizedTranslations('header');

  const getUpdatedHref = (href: string) => {
    if (href === '/Blog') return `/${locale}/Blog`;
    return href;
  };

  const getTranslatedValue = (value: string) => {
    if (value === 'aboutUs') return t('aboutUs');
    return value;
  };
  return (
    <menu data-testid="hamburger-menu-component" className={s.hamburgerMenu}>
      <section className={s.hamburgerMenu__close}>
        <Image
          onClick={closeMenuHandler}
          className={s.hamburgerMenu__close__icon}
          width="30"
          height="30"
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/close_bgh7rx.svg"
          alt="delete-sign"
        />
      </section>
      <nav className={s.hamburgerMenu__nav}>
        <ul className={s.hamburgerMenu__nav__items}>
          {type === 'Blog'
            ? BlogITEMS.map(({ id, value, href }) => (
                <Item
                  key={id}
                  hamburger
                  value={getTranslatedValue(value)}
                  href={getUpdatedHref(href)}
                />
              ))
            : ITEMS.map(({ id, value, href }) => (
                <Item key={id} hamburger value={value} href={getUpdatedHref(href)} />
              ))}
        </ul>
        {type === 'Blog' && (
          <div className={s.hamburgerMenu__nav__jobsButton}>
            <a
              href="https://justjoin.it/"
              target="_blank"
              rel="noopener noreferrer"
              className={s.hamburgerMenu__nav__jobsButton__link}
            >
              {t('jobOffers')}
            </a>
          </div>
        )}
      </nav>
      <section className={s.hamburgerMenu__logo}>
        <Image
          width={200}
          height={70}
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1730720445/Portfolio/Icons/logo_black_ev3ukd.svg"
          alt="blog-image"
        />
      </section>
    </menu>
  );
}

export default HamburgerMenuComponent;
