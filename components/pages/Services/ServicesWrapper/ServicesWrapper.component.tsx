import { FC } from 'react';
import s from './ServicesWrapper.component.module.scss';
import { ServicesWrapperProps } from '@/types/Services.types';
import { SERVICES_SECTION_ID } from '../constants/services.constants';

export const ServicesWrapper: FC<ServicesWrapperProps> = ({ children, reverse }) => {
  return (
    <section id={SERVICES_SECTION_ID} className={`${s.container} ${reverse && s.container_reverse}`}>
      {children}
    </section>
  );
};

export default ServicesWrapper;