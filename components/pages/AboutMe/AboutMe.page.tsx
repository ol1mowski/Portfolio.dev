'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './AboutMe.page.module.scss';
import { LeftColumn, RightColumn } from './components';
import { SiteStats } from '@/actions/stats.actions';

interface AboutMeProps {
  stats: SiteStats;
}

export const AboutMe: FC<AboutMeProps> = ({ stats }) => {
  return (
    <motion.section
      id="about"
      className={styles.aboutMeSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <LeftColumn stats={stats} />
          <RightColumn />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
