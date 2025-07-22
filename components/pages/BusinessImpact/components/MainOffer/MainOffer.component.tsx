import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styles from '../../BusinessImpact.component.module.scss';
import type { MainOfferData } from '../../types/BusinessImpact.types';

interface MainOfferProps {
  data: MainOfferData;
  cardVariants: any;
  itemVariants: any;
  containerVariants: any;
  badgeVariants: any;
  hoverEffects: any;
}

export const MainOffer = memo<MainOfferProps>(
  ({ data, cardVariants, itemVariants, containerVariants, badgeVariants, hoverEffects }) => {
    return (
      <motion.div
        className={styles.mainOffer}
        variants={cardVariants}
        whileHover={hoverEffects.mainOffer.hover}
        transition={hoverEffects.mainOffer.transition}
      >
        <motion.div
          className={styles.mainOffer__badge}
          initial={badgeVariants.initial}
          whileInView={badgeVariants.animate}
          transition={badgeVariants.transition}
        >
          {data.badge}
        </motion.div>

        <motion.h3 className={styles.mainOffer__title} variants={itemVariants}>
          {data.title}
        </motion.h3>

        <motion.p className={styles.mainOffer__description} variants={itemVariants}>
          Nie robię &ldquo;tadnych stron&rdquo;. Tworzę{' '}
          <span className={styles.importantText}>maszynę do zarabiania pieniędzy</span>. Moi klienci
          w ciągu pierwszych 3 miesięcy odnotowują średnio 40% wzrost sprzedaży.
        </motion.p>

        <motion.ul className={styles.mainOffer__features} variants={containerVariants}>
          {data.features.map(feature => (
            <motion.li
              key={feature}
              variants={itemVariants}
              whileHover={hoverEffects.feature.hover}
              transition={hoverEffects.feature.transition}
            >
              <span className={styles.checkIcon}>●</span>
              {feature}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    );
  }
);

MainOffer.displayName = 'MainOffer';
