import React, { memo } from 'react';
import { motion, Variants } from 'framer-motion';
import styles from '../../ProfitabilitySection.component.module.scss';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

interface ProfitabilityHeaderProps {
  title: string;
  subtitle: string;
  itemVariants: Variants;
}

export const ProfitabilityHeader = memo<ProfitabilityHeaderProps>(({ subtitle, itemVariants }) => {
  const t = useOptimizedTranslations('profitability.header');

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
});

ProfitabilityHeader.displayName = 'ProfitabilityHeader';
