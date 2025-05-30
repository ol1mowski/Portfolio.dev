import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from '../../../AboutMe.page.module.scss';

export const AboutDescription: FC = () => {
  return (
    <motion.div
      className={styles.description}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <p>
        <strong>Web Developer</strong> z pasją do tworzenia rozwiązań, które rzeczywiście pomagają
        biznesom rosnąć. Od 2 lat pomagam przedsiębiorcom zamieniać pomysły w zyskowne strony
        internetowe.
      </p>

      <p>
        Prowadzę kanał YouTube <strong>Oliwier Markiewicz</strong> (240+ subskrybentów), gdzie
        dzielę się wiedzą o programowaniu i biznesie online. Regularnie publikuję też artykuły na
        moim blogu o najnowszych trendach w web developmencie.
      </p>

      <p>
        Wierzę, że <strong>dobra strona to nie tylko kod</strong> - to strategia biznesowa,
        psychologia użytkownika i perfekcyjne wykonanie w jednym. Dlatego moi klienci nie tylko
        dostają piękne strony, ale przede wszystkim narzędzia do zarabiania pieniędzy.
      </p>
    </motion.div>
  );
};

export default AboutDescription;
