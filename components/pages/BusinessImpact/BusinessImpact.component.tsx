'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAnimations } from './hooks/useAnimations';
import { useBusinessImpactData } from './hooks/useBusinessImpactData';
import { BusinessImpactHeader } from './components/BusinessImpactHeader/BusinessImpactHeader.component';
import { MainOffer } from './components/MainOffer/MainOffer.component';
import { BenefitsGrid } from './components/BenefitsGrid/BenefitsGrid.component';
import styles from './BusinessImpact.component.module.scss';

const BusinessImpact: React.FC = () => {
  const animations = useAnimations();
  const data = useBusinessImpactData();

  const {
    containerVariants,
    itemVariants,
    cardVariants,
    badgeVariants,
    numberVariants,
    hoverEffects,
  } = animations;

  return (
    <motion.section
      className={styles.businessImpact}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <BusinessImpactHeader
          title={data.header.title}
          subtitle={data.header.subtitle}
          itemVariants={itemVariants}
        />

        <div className={styles.content}>
          <MainOffer
            data={data.mainOffer}
            cardVariants={cardVariants}
            itemVariants={itemVariants}
            containerVariants={containerVariants}
            badgeVariants={badgeVariants}
            hoverEffects={hoverEffects}
          />

          <BenefitsGrid
            benefits={data.benefits}
            containerVariants={containerVariants}
            cardVariants={cardVariants}
            numberVariants={numberVariants}
            hoverEffects={hoverEffects}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default BusinessImpact;
