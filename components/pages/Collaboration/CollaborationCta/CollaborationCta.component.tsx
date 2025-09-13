import s from './CollaborationCta.component.module.scss';

import { memo } from 'react';
import Button from '@/components/UI/Button/Button.component';
import { useTranslations } from 'next-intl';

const CollaborationCta = memo(() => {
  const t = useTranslations('collaboration.cta');

  return (
    <section className={s.cta} aria-label="Sekcja kontaktowa">
      <h2 className={s.cta__header}>{t('title')}</h2>
      <a href="tel:+48693851878" aria-label="Zadzwoń teraz: 693 851 878">
        <Button type="normal" value={t('button')} />
      </a>
    </section>
  );
});

CollaborationCta.displayName = 'CollaborationCta';

export default CollaborationCta;
