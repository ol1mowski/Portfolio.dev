import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { BenefitCard } from '../BenefitCard/BenefitCard.component';
import styles from '../../BusinessImpact.component.module.scss';
import type { BenefitCardData } from '../../types/BusinessImpact.types';

interface BenefitsGridProps {
  benefits: BenefitCardData[];
  containerVariants: any;
  cardVariants: any;
  numberVariants: (delay: number) => any;
  hoverEffects: any;
}

export const BenefitsGrid = memo<BenefitsGridProps>(
  ({ benefits, containerVariants, cardVariants, numberVariants, hoverEffects }) => {
    return (
      <motion.div className={styles.benefits} variants={containerVariants}>
        {benefits.map(benefit => (
          <BenefitCard
            key={benefit.id}
            data={benefit}
            cardVariants={cardVariants}
            numberVariants={numberVariants}
            hoverEffects={hoverEffects}
          />
        ))}
      </motion.div>
    );
  }
);

BenefitsGrid.displayName = 'BenefitsGrid';
