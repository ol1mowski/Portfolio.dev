import { FC } from 'react';
import { useTranslations } from 'next-intl';
import s from './BenefitsSection.component.module.scss';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export const BenefitsSection: FC = () => {
  const t = useTranslations('materials.benefits');

  return (
    <>
      <div className={s.leftBenefits}>
        {(t('left') as unknown as Benefit[]).map((benefit, index) => (
          <div key={`left-benefit-${benefit.title}-${index}`} className={s.sideBenefitCard}>
            <div className={s.sideBenefitIcon}>{benefit.icon}</div>
            <h3 className={s.sideBenefitTitle}>{benefit.title}</h3>
            <p className={s.sideBenefitDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className={s.rightBenefits}>
        {(t('right') as unknown as Benefit[]).map((benefit, index) => (
          <div key={`right-benefit-${benefit.title}-${index}`} className={s.sideBenefitCard}>
            <div className={s.sideBenefitIcon}>{benefit.icon}</div>
            <h3 className={s.sideBenefitTitle}>{benefit.title}</h3>
            <p className={s.sideBenefitDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
