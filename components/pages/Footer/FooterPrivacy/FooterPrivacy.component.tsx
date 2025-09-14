import s from './FooterPrivacy.component.module.scss';
import { useTranslations, useLocale } from 'next-intl';

function FooterPrivacy() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <div className={s.links}>
      <a target="_blank" href={`/${locale}/prywatnosc`} rel="noreferrer">
        <span className={s.links__span}>{t('privacy')}</span>
      </a>
    </div>
  );
}

export default FooterPrivacy;
