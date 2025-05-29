'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './BusinessImpact.component.module.scss';

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const BusinessImpact: React.FC = () => {
  return (
    <motion.section
      className={styles.businessImpact}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <motion.div className={styles.header} variants={itemVariants}>
          <motion.h2 className={styles.header__title} variants={itemVariants}>
            Nie tylko <span className={styles.header__highlight}>koduję</span>
          </motion.h2>
          <motion.p className={styles.header__subtitle} variants={itemVariants}>
            Buduję imperium Twojego biznesu
          </motion.p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.mainOffer}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <motion.div
              className={styles.mainOffer__badge}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                delay: 0.8,
                type: 'spring',
                stiffness: 500,
                damping: 30,
              }}
            >
              +40% ROI
            </motion.div>
            <motion.h3 className={styles.mainOffer__title} variants={itemVariants}>
              Zwiększam Twoje zyski o 40%
            </motion.h3>
            <motion.p className={styles.mainOffer__description} variants={itemVariants}>
              Nie robię &ldquo;tadnych stron&rdquo;. Tworzę{' '}
              <span className={styles.importantText}>maszynę do zarabiania pieniędzy</span>. Moi
              klienci w ciągu pierwszych 3 miesięcy odnotowują średnio 40% wzrost sprzedaży.
            </motion.p>
            <motion.ul className={styles.mainOffer__features} variants={containerVariants}>
              {[
                'Optymalizacja konwersji oparta na danych',
                'A/B testing każdego elementu',
                'Psychologia sprzedaży w każdym pikselu',
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <span className={styles.checkIcon}>●</span>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div className={styles.benefits} variants={containerVariants}>
            <motion.div
              className={styles.benefitCard}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className={styles.benefitCard__icon}>
                <motion.div
                  className={styles.clockIcon}
                  whileHover={{ rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <ClockIcon />
                </motion.div>
              </div>
              <div className={styles.benefitCard__content}>
                <motion.div
                  className={styles.benefitCard__number}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: 0.5,
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                >
                  7-14
                </motion.div>
                <div className={styles.benefitCard__label}>dni realizacji</div>
              </div>
            </motion.div>

            <motion.div
              className={styles.benefitCard}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className={styles.benefitCard__header}>
                <div className={styles.benefitCard__icon}>
                  <motion.div
                    className={styles.clockIcon}
                    whileHover={{ rotate: 15 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    <ClockIcon />
                  </motion.div>
                </div>
                <div className={styles.benefitCard__title}>Express bez kompromisów</div>
              </div>
              <p className={styles.benefitCard__text}>
                Podczas gdy inni obiecują &ldquo;za miesiąc&rdquo;, ja dostarczam gotową stronę w{' '}
                <span className={styles.importantText}>maksymalnie 2 tygodnie</span>. Bez uszczerbku
                na jakości.
              </p>
            </motion.div>

            <motion.div
              className={styles.benefitCard}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className={styles.benefitCard__icon}>
                <motion.div
                  className={styles.shieldIcon}
                  whileHover={{ rotate: -15 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <ShieldIcon />
                </motion.div>
              </div>
              <div className={styles.benefitCard__content}>
                <motion.div
                  className={styles.benefitCard__number}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: 0.7,
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                >
                  100%
                </motion.div>
                <div className={styles.benefitCard__label}>gwarancji</div>
              </div>
            </motion.div>

            <motion.div
              className={styles.benefitCard}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className={styles.benefitCard__header}>
                <div className={styles.benefitCard__icon}>
                  <motion.div
                    className={styles.shieldIcon}
                    whileHover={{ rotate: -15 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    <ShieldIcon />
                  </motion.div>
                </div>
                <div className={styles.benefitCard__title}>Zero ryzyka</div>
              </div>
              <p className={styles.benefitCard__text}>
                <span className={styles.importantText}>6 miesięcy wsparcia</span> + 30 dni na zwrot
                pieniędzy. Płacisz dopiero gdy jesteś w 100% zadowolony.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BusinessImpact;
