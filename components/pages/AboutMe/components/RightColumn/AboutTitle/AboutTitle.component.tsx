import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from '../../../AboutMe.page.module.scss';

export const AboutTitle: FC = () => {
  return (
    <motion.h1
      className={styles.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Cześć! Jestem <span className={styles.highlight}>Oliwier Markiewicz</span>
    </motion.h1>
  );
};

export default AboutTitle;
