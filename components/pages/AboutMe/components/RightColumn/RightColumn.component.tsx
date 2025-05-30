import { FC } from 'react';
import styles from '../../AboutMe.page.module.scss';
import AboutTitle from './AboutTitle/AboutTitle.component';
import AboutDescription from './AboutDescription/AboutDescription.component';
import SocialMedia from './SocialMedia/SocialMedia.component';

export const RightColumn: FC = () => {
  return (
    <div className={styles.rightColumn}>
      <AboutTitle />
      <AboutDescription />
      <SocialMedia />
    </div>
  );
};

export default RightColumn;
