import { FC } from 'react';
import s from './NumberOfService.component.module.scss';
import { NumberOfServiceProps } from '@/types/Services.type';

export const NumberOfService: FC<NumberOfServiceProps> = ({ number }) => {
  return (
    <section className={s.slideNumberWrapper}>
      <span className={s.slideNumberWrapper__number}>0{number}</span>
    </section>
  );
};

export default NumberOfService;
