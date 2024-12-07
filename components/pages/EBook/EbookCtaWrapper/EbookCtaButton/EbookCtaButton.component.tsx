import s from "./EbookCtaButton.component.module.scss";

import { memo } from 'react';
import Link from 'next/link';

import Button from "@/components/UI/Button/Button.component";

const EbookCtaButton = memo(() => {
  return (
    <section className={s.buttonWrapper}>
      <Link 
        href="/Ebooki/Praktyczne_Porady_Na_Co_Zwrocic_Uwage_Podczas_Projektowania_Strony_Internetowej" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Odbierz bezpłatny E-book"
      >
        <Button 
          type="normal" 
          value="Odbierz Bezpłatnie"
        />
      </Link>
    </section>
  );
});

EbookCtaButton.displayName = 'EbookCtaButton';

export default EbookCtaButton;
