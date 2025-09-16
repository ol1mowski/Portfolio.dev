'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimations } from './hooks/useAnimations';
import { useBusinessImpactData } from './hooks/useBusinessImpactData';
import { BusinessImpactHeader } from './components/BusinessImpactHeader/BusinessImpactHeader.component';
import { MainOffer } from './components/MainOffer/MainOffer.component';
import styles from './BusinessImpact.component.module.scss';

const BusinessImpact: React.FC = () => {
  const animations = useAnimations();
  const data = useBusinessImpactData();

  const { containerVariants, itemVariants, cardVariants, badgeVariants, hoverEffects } = animations;

  return (
    <motion.section
      id="business-impact"
      className={styles.businessImpact}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <BusinessImpactHeader subtitle={data.header.subtitle} itemVariants={itemVariants} />

        <div>
          <MainOffer
            data={data.mainOffer}
            cardVariants={cardVariants}
            itemVariants={itemVariants}
            containerVariants={containerVariants}
            badgeVariants={badgeVariants}
            hoverEffects={hoverEffects}
          />
          <motion.div className={styles.teaser} variants={cardVariants}>
            <div className={styles.teaser__stats}>
              <div className={styles.teaser__stat}>
                <div className={styles.teaser__number}>{data.teaser.timelineNumber}</div>
                <div className={styles.teaser__label}>{data.teaser.timelineLabel}</div>
              </div>
              <div className={styles.teaser__stat}>
                <div className={styles.teaser__number}>{data.teaser.guaranteeNumber}</div>
                <div className={styles.teaser__label}>{data.teaser.guaranteeLabel}</div>
              </div>
            </div>

            <div className={styles.teaser__content}>
              <h4 className={styles.teaser__title}>{data.teaser.expressTitle}</h4>
              <p className={styles.teaser__desc}>{data.teaser.expressDescription}</p>
              <h4 className={styles.teaser__title}>{data.teaser.zeroRiskTitle}</h4>
              <p className={styles.teaser__desc}>{data.teaser.zeroRiskDescription}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BusinessImpact;
