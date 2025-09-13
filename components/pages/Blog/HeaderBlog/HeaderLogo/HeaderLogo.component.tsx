import s from './HeaderLogo.component.module.scss';
import { useLocale } from 'next-intl';

const HeaderLogo = ({ type }: { type?: string }) => {
  const locale = useLocale();

  return (
    <section data-testid="header-logo" className={s.logoSection}>
      <a href={`/${locale}/Blog`}>
        {type === 'Blog' ? (
          <span className={s.logoSection__text}>IT Blog</span>
        ) : (
          <span className={s.logoSection__text}>Portfolio</span>
        )}
      </a>
    </section>
  );
};

export default HeaderLogo;
