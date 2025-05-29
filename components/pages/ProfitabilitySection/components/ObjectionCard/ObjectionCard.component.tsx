import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, TimeIcon, ChartIcon, CheckIcon } from '../Icons/ProfitabilityIcons.component';
import styles from '../../ProfitabilitySection.component.module.scss';
import type { ObjectionCardData } from '../../types/ProfitabilitySection.types';

interface ObjectionCardProps {
  data: ObjectionCardData;
  cardVariants: any;
  itemVariants: any;
  containerVariants: any;
  hoverEffects: any;
  checkmarkVariants: (index: number) => any;
  iconVariants: any;
}

const iconMap = {
  plus: PlusIcon,
  time: TimeIcon,
  chart: ChartIcon,
};

const iconColorMap = {
  red: '#EF4444',
  orange: '#F97316',
  blue: '#3B82F6',
};

export const ObjectionCard = memo<ObjectionCardProps>(
  ({
    data,
    cardVariants,
    itemVariants,
    containerVariants,
    hoverEffects,
    checkmarkVariants,
    iconVariants,
  }) => {
    const IconComponent = iconMap[data.icon];
    const iconColor = iconColorMap[data.iconColor];

    return (
      <motion.div
        className={`${styles.objectionCard} ${styles[`objectionCard--${data.iconColor}`]}`}
        variants={cardVariants}
        whileHover={hoverEffects.card.hover}
        transition={hoverEffects.card.transition}
      >
        <div className={styles.objectionCard__header}>
          <motion.div
            className={styles.objectionCard__icon}
            initial={iconVariants.initial}
            whileInView={iconVariants.animate}
            transition={iconVariants.transition}
            whileHover={hoverEffects.icon.hover}
          >
            <IconComponent color={iconColor} />
          </motion.div>
          <div className={styles.objectionCard__title}>
            <motion.h3 variants={itemVariants}>{data.title}</motion.h3>
            {data.subtitle && (
              <motion.p className={styles.objectionCard__subtitle} variants={itemVariants}>
                {data.subtitle}
              </motion.p>
            )}
          </div>
        </div>

        {data.benefits && (
          <motion.ul className={styles.objectionCard__benefits} variants={containerVariants}>
            {data.benefits.map((benefit, index) => (
              <motion.li
                key={benefit}
                className={styles.objectionCard__benefit}
                variants={itemVariants}
                whileHover={hoverEffects.benefit.hover}
                transition={hoverEffects.benefit.transition}
              >
                <motion.div
                  className={styles.objectionCard__checkIcon}
                  {...checkmarkVariants(index)}
                >
                  <CheckIcon />
                </motion.div>
                <span>{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.div>
    );
  }
);

ObjectionCard.displayName = 'ObjectionCard';
