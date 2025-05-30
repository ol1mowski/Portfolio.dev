import { FC } from 'react';
import Image from 'next/image';
import styles from '../../AboutMe.page.module.scss';

export const LeftColumn: FC = () => {
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
            alt="Oliwier Markiewicz - Web Developer"
            width={300}
            height={300}
            className={styles.photo}
            priority
          />
        </div>
      </div>

      <div className={styles.statsLeft}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>2+</span>
          <span className={styles.statLabel}>lat doświadczenia</span>
        </div>
        <div className={styles.statCardBlue}>
          <span className={styles.statNumber}>240+</span>
          <span className={styles.statLabel}>subskrybentów YT</span>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
