import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styles from '../../ProfitabilitySection.component.module.scss';
import type { StatCardData } from '../../types/ProfitabilitySection.types';

interface StatCardProps {
  data: StatCardData;
  statVariants: any;
  numberVariants: (delay: number) => any;
  hoverEffects: any;
}

const getDelayByIndex = (id: string): number => {
  const delays = {
    'roi-time': 0.8,
    'time-weekly': 1.0,
  };
  return delays[id as keyof typeof delays] || 0.8;
};

export const StatCard = memo<StatCardProps>(
  ({ data, statVariants, numberVariants, hoverEffects }) => {
    return (
      <motion.div
        className={`${styles.statCard} ${styles[`statCard--${data.color}`]}`}
        variants={statVariants}
        whileHover={hoverEffects.statCard.hover}
        transition={hoverEffects.statCard.transition}
      >
        <div className={styles.statCard__content}>
          <motion.div
            className={styles.statCard__number}
            {...numberVariants(getDelayByIndex(data.id))}
          >
            {data.number}
          </motion.div>
          <motion.div className={styles.statCard__label} variants={statVariants}>
            {data.label}
          </motion.div>
        </div>

        {data.icon && (
          <motion.div className={styles.statCard__icon} variants={statVariants}>
            {data.icon}
          </motion.div>
        )}
      </motion.div>
    );
  }
);

StatCard.displayName = 'StatCard';
