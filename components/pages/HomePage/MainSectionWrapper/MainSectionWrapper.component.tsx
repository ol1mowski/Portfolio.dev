import { FC } from 'react';
import s from './MainSectionWrapper.component.module.scss';
import { WrapperProps } from '../types/homePage.types';

export const MainSectionWrapper: FC<WrapperProps> = ({ children }) => {
  return <section className={s.infoSection}>{children}</section>;
};

export default MainSectionWrapper;
