import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styles from '../../ProfitabilitySection.component.module.scss';

interface ProfitabilityHeaderProps {
  title: string;
  subtitle: string;
  itemVariants: any;
}

export const ProfitabilityHeader = memo<ProfitabilityHeaderProps>(
  ({ title, subtitle, itemVariants }) => {
    return (
      <motion.div className={styles.header} variants={itemVariants}>
        <motion.h2 className={styles.header__title} variants={itemVariants}>
          Ale czy to się <span className={styles.header__highlight}>opłaci</span>?
        </motion.h2>
        <motion.p className={styles.header__subtitle} variants={itemVariants}>
          {subtitle}
        </motion.p>
      </motion.div>
    );
  }
);

ProfitabilityHeader.displayName = 'ProfitabilityHeader';
