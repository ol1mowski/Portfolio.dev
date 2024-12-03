import s from "./ServicesCta.component.module.scss";

import { memo } from 'react';
import Link from 'next/link';

import { type ReactNode } from "react";

import Button from "@/components/UI/Button/Button.component";

interface ServicesCtaProps {
  des: ReactNode;
}

const ServicesCta = memo(({ des }: ServicesCtaProps) => {
  return (
    <section 
      className={s.ctaWrapper} 
      data-testid="cta-wrapper"
      aria-label="Opis usługi i przycisk kontaktowy"
    >
      <div 
        className={s.ctaWrapper__desWrapper} 
        data-testid="des-wrapper"
      >
        <p className={s.ctaWrapper__desWrapper__des}>{des}</p>
      </div>
      <div 
        className={s.ctaWrapper__buttonWrapper} 
        data-testid="button-wrapper"
      >
        <Link 
          href="#contact" 
          aria-label="Przejdź do formularza kontaktowego"
        >
          <Button 
            type="normal" 
            value="Skontaktuj Się" 
          />
        </Link>
      </div>
    </section>
  );
});

ServicesCta.displayName = 'ServicesCta';

export default ServicesCta;
