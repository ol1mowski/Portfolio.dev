import { memo } from 'react';
import { useTranslations } from 'next-intl';
import s from './MaterialsHeader.component.module.scss';

interface MaterialsHeaderProps {
  subtitle?: string;
}

const MaterialsHeader = memo(({ subtitle }: MaterialsHeaderProps) => {
  const t = useTranslations('materials.header');

  return (
    <section className={s.materialsHeader}>
      <div className={s.materialsHeader__content}>
        <h1 className={s.materialsHeader__title}>
          {t('title')} <span className={s.materialsHeader__gradient}>{t('titleGradient')}</span>
        </h1>
        <p className={s.materialsHeader__subtitle}>{subtitle || t('subtitle')}</p>
      </div>
    </section>
  );
});

MaterialsHeader.displayName = 'MaterialsHeader';

export default MaterialsHeader;
