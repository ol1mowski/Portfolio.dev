import { FC } from 'react';
import Image from 'next/image';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import styles from '../../AboutMe.page.module.scss';
import { SiteStats } from '@/actions/stats.actions';

interface LeftColumnProps {
  stats: SiteStats;
}

export const LeftColumn: FC<LeftColumnProps> = ({ stats }) => {
  const t = useOptimizedTranslations('about.stats');

  return (
    <div className={styles.leftColumn}>
      <div className={styles.decorativeElements}>
        <div className={styles.yellowSquare}></div>
        <div className={styles.grayShape1}></div>
        <div className={styles.grayShape2}></div>
        <div className={styles.pinkCircle}></div>
        <div className={styles.photoContainer}>
          <Image
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1731069658/Portfolio/images/me_gmqeii.webp"
            alt="Oliwier Markiewicz - Fullstack Developer"
            width={300}
            height={300}
            className={styles.photo}
            priority
          />
        </div>
      </div>

      <div className={styles.statsLeft}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{stats.experienceYears}+</span>
          <span className={styles.statLabel}>{t('experienceYears')}</span>
        </div>
        <div className={styles.statCardBlue}>
          <span className={styles.statNumber}>{stats.youtubeSubscribers}</span>
          <span className={styles.statLabel}>{t('youtubeSubscribers')}</span>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
