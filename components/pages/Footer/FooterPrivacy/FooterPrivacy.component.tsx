import s from './FooterPrivacy.component.module.scss';
import { useTranslations } from 'next-intl';

function FooterPrivacy() {
  const t = useTranslations('footer');

  return (
    <div className={s.links}>
      <a target="_blank" href="/prywatnosc">
        <span className={s.links__span}>{t('privacy')}</span>
      </a>
    </div>
  );
}

export default FooterPrivacy;
