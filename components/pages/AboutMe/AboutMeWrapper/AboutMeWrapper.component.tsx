import { FC } from 'react';
import s from './AboutMeWrapper.component.module.scss';
import { WrapperProps } from '../types/aboutMe.types';
import { ABOUT_SECTION_ID } from '../constants/aboutMe.constants';

export const AboutMeWrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <section id={ABOUT_SECTION_ID} className={s.container}>
      {children}
    </section>
  );
};

export default AboutMeWrapper;
