'use client';

import { memo } from 'react';
import s from './EmailGateForm.component.module.scss';
import { EmailGateHeader } from './components/EmailGateHeader/EmailGateHeader.component';
import { BenefitsSection } from './components/BenefitsSection/BenefitsSection.component';
import { EmailGateForm as EmailGateFormComponent } from './components/EmailGateForm/EmailGateForm.component';

interface EmailGateFormProps {
  onEmailSubmit: (email: string) => void;
}

const EmailGateForm = memo(({ onEmailSubmit }: EmailGateFormProps) => {
  return (
    <div className={s.emailGateContainer}>
      <div className={s.backgroundElements}>
        <div className={s.circle1}></div>
        <div className={s.circle2}></div>
        <div className={s.circle3}></div>
      </div>

      <div className={s.contentWrapper}>
        <EmailGateHeader />
        <BenefitsSection />
        <EmailGateFormComponent onEmailSubmit={onEmailSubmit} />
      </div>
    </div>
  );
});

EmailGateForm.displayName = 'EmailGateForm';

export default EmailGateForm;
