import s from './FooterPrivacy.component.module.scss';
import { useLocale } from 'next-intl';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

function FooterPrivacy() {
  const t = useOptimizedTranslations('footer');
  const locale = useLocale();

  return (
    <div className={s.links}>
      <a target="_blank" href={`/${locale}/prywatnosc`} rel="noopener noreferrer">
        <span className={s.links__span}>{t('privacy')}</span>
      </a>
    </div>
  );
}

export default FooterPrivacy;
