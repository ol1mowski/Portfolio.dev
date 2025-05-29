'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './AboutMe.page.module.scss';

export const AboutMe: FC = () => {
  return (
    <motion.section
      className={styles.aboutMeSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
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

          <div className={styles.rightColumn}>
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Cześć! Jestem <span className={styles.highlight}>Oliwier Markiewicz</span>
            </motion.h1>

            <motion.div
              className={styles.description}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                <strong>Web Developer</strong> z pasją do tworzenia rozwiązań, które rzeczywiście
                pomagają biznesom rosnąć. Od 2 lat pomagam przedsiębiorcom zamieniać pomysły w
                zyskowne strony internetowe.
              </p>

              <p>
                Prowadzę kanał YouTube <strong>Oliwier Markiewicz</strong> (240+ subskrybentów),
                gdzie dzielę się wiedzą o programowaniu i biznesie online. Regularnie publikuję też
                artykuły na moim blogu o najnowszych trendach w web developmencie.
              </p>

              <p>
                Wierzę, że <strong>dobra strona to nie tylko kod</strong> - to strategia biznesowa,
                psychologia użytkownika i perfekcyjne wykonanie w jednym. Dlatego moi klienci nie
                tylko dostają piękne strony, ale przede wszystkim narzędzia do zarabiania pieniędzy.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
