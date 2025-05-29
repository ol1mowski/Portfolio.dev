import { FC, memo } from 'react';
import s from './ServicesCta.component.module.scss';
import Button from '@/components/UI/Button/Button.component';
import {
  SERVICES_CTA_ARIA_LABEL,
  SERVICES_BUTTON_HREF,
  SERVICES_BUTTON_ARIA_LABEL,
  SERVICES_BUTTON_TEXT,
} from '../constants/services.constants';

interface ServicesCtaProps {
  des: React.ReactNode;
}

export const ServicesCta: FC<ServicesCtaProps> = memo(({ des }) => {
  return (
    <section
      className={s.ctaWrapper}
      data-testid="cta-wrapper"
      aria-label={SERVICES_CTA_ARIA_LABEL}
    >
      <div className={s.ctaWrapper__desWrapper} data-testid="des-wrapper">
        <p className={s.ctaWrapper__desWrapper__des}>{des}</p>
      </div>
      <div className={s.ctaWrapper__buttonWrapper} data-testid="button-wrapper">
        <a href={SERVICES_BUTTON_HREF} aria-label={SERVICES_BUTTON_ARIA_LABEL}>
          <Button type="normal" value={SERVICES_BUTTON_TEXT} />
        </a>
      </div>
    </section>
  );
});

ServicesCta.displayName = 'ServicesCta';

export default ServicesCta;
