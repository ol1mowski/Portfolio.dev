import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from '../../../AboutMe.page.module.scss';

export const AboutDescription: FC = () => {
  const t = useTranslations('about');

  return (
    <motion.div
      className={styles.description}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <p>
        <span className={styles.highlight}>Web Developer</span>{' '}
        {t('description').replace('Web Developer', '').trim()}
      </p>
      <p>
        {t('detailedDescription')
          .split('Oliwier Markiewicz')
          .map((part, index) =>
            index === 0 ? (
              <span key={index}>{part}</span>
            ) : (
              <span key={index}>
                <span className={styles.highlight}>Oliwier Markiewicz</span>
                {part}
              </span>
            )
          )}
      </p>
      <p>
        {t('philosophy')
          .split(t('highlightedDescription.part3'))
          .map((part, index) =>
            index === 0 ? (
              <span key={index}>{part}</span>
            ) : (
              <span key={index}>
                <span className={styles.highlight}>{t('highlightedDescription.part3')}</span>
                {part}
              </span>
            )
          )}
      </p>
    </motion.div>
  );
};

export default AboutDescription;
