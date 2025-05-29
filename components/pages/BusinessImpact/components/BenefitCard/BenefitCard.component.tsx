import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, ShieldIcon } from '../Icons/Icons.component';
import styles from '../../BusinessImpact.component.module.scss';
import type { BenefitCardData } from '../../types/BusinessImpact.types';

interface BenefitCardProps {
  data: BenefitCardData;
  cardVariants: any;
  numberVariants: (delay: number) => any;
  hoverEffects: any;
}

const iconMap = {
  clock: ClockIcon,
  shield: ShieldIcon,
};

const getDelayByIndex = (id: string): number => {
  const delays = {
    timeline: 0.5,
    express: 0.6,
    guarantee: 0.7,
    'zero-risk': 0.8,
  };
  return delays[id as keyof typeof delays] || 0.5;
};

export const BenefitCard = memo<BenefitCardProps>(
  ({ data, cardVariants, numberVariants, hoverEffects }) => {
    const IconComponent = iconMap[data.icon];
    const iconClassName = data.icon === 'clock' ? styles.clockIcon : styles.shieldIcon;

    const renderStatCard = () => (
      <>
        <div className={styles.benefitCard__icon}>
          <motion.div
            className={iconClassName}
            whileHover={hoverEffects.icon.hover}
            transition={hoverEffects.icon.transition}
          >
            <IconComponent />
          </motion.div>
        </div>
        <div className={styles.benefitCard__content}>
          <motion.div
            className={styles.benefitCard__number}
            {...numberVariants(getDelayByIndex(data.id))}
          >
            {data.number}
          </motion.div>
          <div className={styles.benefitCard__label}>{data.label}</div>
        </div>
      </>
    );

    const renderDescriptionCard = () => (
      <>
        <div className={styles.benefitCard__header}>
          <div className={styles.benefitCard__icon}>
            <motion.div
              className={iconClassName}
              whileHover={hoverEffects.icon.hover}
              transition={hoverEffects.icon.transition}
            >
              <IconComponent />
            </motion.div>
          </div>
          <div className={styles.benefitCard__title}>{data.title}</div>
        </div>
        <p className={styles.benefitCard__text}>
          {data.description?.includes('maksymalnie 2 tygodnie') ? (
            <>
              Podczas gdy inni obiecują &ldquo;za miesiąc&rdquo;, ja dostarczam gotową stronę w{' '}
              <span className={styles.importantText}>maksymalnie 2 tygodnie</span>. Bez uszczerbku
              na jakości.
            </>
          ) : data.description?.includes('6 miesięcy wsparcia') ? (
            <>
              <span className={styles.importantText}>6 miesięcy wsparcia</span> + 30 dni na zwrot
              pieniędzy. Płacisz dopiero gdy jesteś w 100% zadowolony.
            </>
          ) : (
            data.description
          )}
        </p>
      </>
    );

    return (
      <motion.div
        className={styles.benefitCard}
        variants={cardVariants}
        whileHover={hoverEffects.card.hover}
        transition={hoverEffects.card.transition}
      >
        {data.type === 'stat' ? renderStatCard() : renderDescriptionCard()}
      </motion.div>
    );
  }
);

BenefitCard.displayName = 'BenefitCard';
