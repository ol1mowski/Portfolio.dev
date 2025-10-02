'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import { useLocale } from 'next-intl';
import styles from './Services.page.module.scss';

export const Services: FC = () => {
  const t = useOptimizedTranslations('services');
  const locale = useLocale();

  const services = [
    {
      id: 'websites',
      title: t('website.title'),
      icon: '💻',
      color: 'blue',
      features: [
        t('website.features.feature1'),
        t('website.features.feature2'),
        t('website.features.feature3'),
      ],
      highlight: t('website.highlight'),
    },
    {
      id: 'ecommerce',
      title: t('ecommerce.title'),
      icon: '🛒',
      color: 'green',
      features: [
        t('ecommerce.features.feature1'),
        t('ecommerce.features.feature2'),
        t('ecommerce.features.feature3'),
      ],
      highlight: t('ecommerce.highlight'),
    },
    {
      id: 'graphics',
      title: t('graphics.title'),
      icon: '🎨',
      color: 'purple',
      features: [
        t('graphics.features.feature1'),
        t('graphics.features.feature2'),
        t('graphics.features.feature3'),
      ],
      highlight: t('graphics.highlight'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      className={styles.servicesSection}
      initial="hidden"
      id="services"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <motion.div className={styles.header} variants={cardVariants}>
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </motion.div>

        <motion.div className={styles.servicesGrid} variants={containerVariants}>
          {services.map(service => (
            <motion.div
              key={service.id}
              className={`${styles.serviceCard} ${styles[`serviceCard--${service.color}`]}`}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`${styles.cardHeader} ${styles[`cardHeader--${service.color}`]}`}>
                <div className={styles.topLine}></div>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>{service.icon}</span>
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>

              <div className={styles.cardContent}>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, index) => (
                    <li key={index} className={styles.feature}>
                      <span
                        className={`${styles.bullet} ${styles[`bullet--${service.color}`]}`}
                      ></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div
                  className={`${styles.highlightBox} ${styles[`highlightBox--${service.color}`]}`}
                >
                  {service.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={styles.configuratorBanner} variants={cardVariants}>
          <div className={styles.bannerContent}>
            <div className={styles.bannerText}>
              <h3 className={styles.bannerTitle}>{t('undecided.title')}</h3>
              <p className={styles.bannerSubtitle}>{t('undecided.subtitle')}</p>
            </div>
            <a href={`/${locale}/konfigurator`} className={styles.bannerButton}>
              <span className={styles.buttonIcon}>⚙️</span>
              {t('undecided.button')}
              <span className={styles.buttonArrow}>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
