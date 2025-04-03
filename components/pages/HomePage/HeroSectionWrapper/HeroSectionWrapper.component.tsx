import { FC } from 'react';
import s from './HeroSectionWrapper.component.module.scss';
import { WrapperProps } from '../types/homePage.types';

export const HeroSectionWrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <section id="home" className={s.homeContainer}>
      {children}
    </section>
  );
};

export default HeroSectionWrapper;
