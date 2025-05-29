'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useProfitabilityAnimations } from './hooks/useProfitabilityAnimations';
import { useProfitabilityData } from './hooks/useProfitabilityData';
import { ProfitabilityHeader } from './components/ProfitabilityHeader/ProfitabilityHeader.component';
import { ObjectionCard } from './components/ObjectionCard/ObjectionCard.component';
import { StatCard } from './components/StatCard/StatCard.component';
import styles from './ProfitabilitySection.component.module.scss';
import type { ContentItem } from './types/ProfitabilitySection.types';

const ProfitabilitySection: React.FC = () => {
  const animations = useProfitabilityAnimations();
  const data = useProfitabilityData();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const {
    containerVariants,
    itemVariants,
    cardVariants,
    statVariants,
    numberVariants,
    iconVariants,
    hoverEffects,
    checkmarkVariants,
  } = animations;

  const renderContentItem = (item: ContentItem, index: number) => {
    return (
      <motion.div
        key={item.id}
        className={`${styles.contentItem} ${styles[`contentItem--${item.position}`]}`}
        variants={cardVariants}
      >
        {item.type === 'objection' ? (
          <ObjectionCard
            data={item}
            cardVariants={cardVariants}
            itemVariants={itemVariants}
            containerVariants={containerVariants}
            hoverEffects={hoverEffects}
            checkmarkVariants={checkmarkVariants}
            iconVariants={iconVariants}
          />
        ) : (
          <StatCard
            data={item}
            statVariants={statVariants}
            numberVariants={numberVariants}
            hoverEffects={hoverEffects}
          />
        )}
      </motion.div>
    );
  };

  return (
    <motion.section
      ref={sectionRef}
      className={styles.profitabilitySection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <ProfitabilityHeader
          title={data.header.title}
          subtitle={data.header.subtitle}
          itemVariants={itemVariants}
        />

        <div className={styles.progressLine}>
          <motion.div className={styles.progressLine__fill} style={{ height: progressHeight }} />
        </div>

        <motion.div className={styles.content} variants={containerVariants}>
          {data.content.map((item, index) => renderContentItem(item, index))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProfitabilitySection;
