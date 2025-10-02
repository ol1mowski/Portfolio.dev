import { FC } from 'react';
import { motion } from 'framer-motion';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import styles from '../../../AboutMe.page.module.scss';

export const AboutTitle: FC = () => {
  const t = useOptimizedTranslations('about');

  return (
    <motion.h1
      className={styles.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {t('title')}
    </motion.h1>
  );
};

export default AboutTitle;
