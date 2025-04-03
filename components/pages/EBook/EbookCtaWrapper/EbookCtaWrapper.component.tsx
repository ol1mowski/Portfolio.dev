import { FC } from 'react';
import s from './EbookCtaWrapper.component.module.scss';
import { WrapperProps } from '../types/ebook.types';

export const EbookCtaWrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <section className={s.cta}>
      {children}
    </section>
  );
};

export default EbookCtaWrapper;
