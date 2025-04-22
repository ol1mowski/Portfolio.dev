import s from './CollaborationCta.component.module.scss';

import { memo } from 'react';
import Button from '@/components/UI/Button/Button.component';

const CollaborationCta = memo(() => {
  return (
    <section className={s.cta} aria-label="Sekcja kontaktowa">
      <h2 className={s.cta__header}>
        Umów Się na <span className={s.cta__header__mark}>Darmową</span> Konsultację
      </h2>
      <a href="tel:+48693851878" aria-label="Zadzwoń teraz: 693 851 878">
        <Button type="normal" value="Zadzwoń: 693 851 878" />
      </a>
    </section>
  );
});

CollaborationCta.displayName = 'CollaborationCta';

export default CollaborationCta;
