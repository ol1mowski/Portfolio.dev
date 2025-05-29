import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styles from '../../BusinessImpact.component.module.scss';

interface BusinessImpactHeaderProps {
  title: string;
  subtitle: string;
  itemVariants: any;
}

export const BusinessImpactHeader = memo<BusinessImpactHeaderProps>(
  ({ title, subtitle, itemVariants }) => {
    return (
      <motion.div className={styles.header} variants={itemVariants}>
        <motion.h2 className={styles.header__title} variants={itemVariants}>
          Nie tylko <span className={styles.header__highlight}>koduję</span>
        </motion.h2>
        <motion.p className={styles.header__subtitle} variants={itemVariants}>
          {subtitle}
        </motion.p>
      </motion.div>
    );
  }
);

BusinessImpactHeader.displayName = 'BusinessImpactHeader';
