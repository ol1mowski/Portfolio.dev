import s from './HeroCta.component.module.scss';

import { memo } from 'react';
import { useTranslations } from 'next-intl';

import Text from '@/components/Utils/Text-component/Text.component';
import Button from '@/components/UI/Button/Button.component';

const HeroCta = memo(() => {
  const t = useTranslations('hero');

  return (
    <section className={s.cta}>
      <p className={s.cta__p}>
        <Text textValue={t('description')} />
      </p>
      <a href="#services">
        <Button type="normal" value={t('cta')} aria-label={t('ctaAriaLabel')} />
      </a>
    </section>
  );
});

HeroCta.displayName = 'HeroCta';

export default HeroCta;
