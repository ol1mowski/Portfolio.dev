import { type ReactNode } from 'react';
import s from './EbookWrapper.component.module.scss';

function EbookWrapper({ children }: {children: ReactNode}) {
  return (
    <section className={s.container}>
        { children }
    </section>
  )
}

export default EbookWrapper
