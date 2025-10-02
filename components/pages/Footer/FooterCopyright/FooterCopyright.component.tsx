import s from './FooterCopyright,component.module.scss';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

function FooterCopyright() {
  const date = new Date();
  const t = useOptimizedTranslations('footer');

  return (
    <div className={s.header}>
      <h3 className={s.header__h3}>
        Copyright © {date.getFullYear()}. {t('copyright')}
      </h3>
    </div>
  );
}

export default FooterCopyright;
