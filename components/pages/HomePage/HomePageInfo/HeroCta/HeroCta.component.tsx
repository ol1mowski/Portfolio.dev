import s from './HeroCta.component.module.scss';

import { memo } from 'react';
import Link from 'next/link';

import Text from '@/components/Utils/Text-component/Text.component';
import Button from '@/components/UI/Button/Button.component';

const HeroCta = memo(() => {
  return (
    <section className={s.cta}>
      <p className={s.cta__p}>
        <Text textValue="Cześć! Nazywam się Oliwier Markiewicz, pomagam lokalnym firmom zwiększyć sprzedaż poprzez tworzenie nowoczesnych stron internetowych, które wyróżniają się na tle konkurencji 🏆" />
      </p>
      <Link href="#services">
        <Button type="normal" value="Zwiększ Swoją Sprzedaż" aria-label="Przejdź do sekcji usług" />
      </Link>
    </section>
  );
});

HeroCta.displayName = 'HeroCta';

export default HeroCta;
