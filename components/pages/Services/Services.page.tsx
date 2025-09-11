'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './Services.page.module.scss';

export const Services: FC = () => {
  const t = useTranslations('services');

  const services = [
    {
      id: 'websites',
      title: t('website.title'),
      icon: '💻',
      color: 'blue',
      features: ['Strony wizytówkowe firm', "Landing page'y sprzedażowe", 'Portale internetowe'],
      highlight: '100% responsywne',
    },
    {
      id: 'ecommerce',
      title: t('ecommerce.title'),
      icon: '🛒',
      color: 'green',
      features: ['Sklepy e-commerce', 'Integracje płatności', 'Zarządzanie produktami'],
      highlight: 'Optymalizacja konwersji',
    },
    {
      id: 'graphics',
      title: 'Projekty Graficzne',
      icon: '🎨',
      color: 'purple',
      features: ['Identyfikacja wizualna', 'Projekty UI/UX', 'Materiały marketingowe'],
      highlight: 'Spójny branding',
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

        {/* Baner konfiguratora */}
        <motion.div className={styles.configuratorBanner} variants={cardVariants}>
          <div className={styles.bannerContent}>
            <div className={styles.bannerText}>
              <h3 className={styles.bannerTitle}>Nie możesz się zdecydować? 🤔</h3>
              <p className={styles.bannerSubtitle}>
                Badź nie wiesz, czego dokładnie potrzebujesz? Skorzystaj z naszego bezpłatnego
                konfiguratora!
              </p>
            </div>
            <a href="/konfigurator" className={styles.bannerButton}>
              <span className={styles.buttonIcon}>⚙️</span>
              Sprawdź Konfigurator
              <span className={styles.buttonArrow}>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
