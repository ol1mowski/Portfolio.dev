import { FC } from 'react';
import s from './EbookWrapper.component.module.scss';
import { WrapperProps } from '../types/ebook.types';

export const EbookWrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <section className={s.container}>
      {children}
    </section>
  );
};

export default EbookWrapper;
