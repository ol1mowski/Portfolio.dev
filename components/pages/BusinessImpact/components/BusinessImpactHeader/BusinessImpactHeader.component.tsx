import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styles from '../../BusinessImpact.component.module.scss';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

interface BusinessImpactHeaderProps {
  subtitle: string;
  itemVariants: any;
}

export const BusinessImpactHeader = memo<BusinessImpactHeaderProps>(
  ({ subtitle, itemVariants }) => {
    const t = useOptimizedTranslations('businessImpact.header');

    return (
      <motion.div className={styles.header} variants={itemVariants}>
        <motion.h2 className={styles.header__title} variants={itemVariants}>
          {t('title')}
        </motion.h2>
        <motion.p className={styles.header__subtitle} variants={itemVariants}>
          {subtitle}
        </motion.p>
      </motion.div>
    );
  }
);

BusinessImpactHeader.displayName = 'BusinessImpactHeader';
