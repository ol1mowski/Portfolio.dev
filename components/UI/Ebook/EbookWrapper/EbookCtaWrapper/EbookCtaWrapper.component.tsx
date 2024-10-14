import { type ReactNode } from 'react';
import s from './EbookCtaWrapper.component.module.scss';

function EbookCtaWrapper({children}:{children: ReactNode}) {
  return (
    <section className={s.cta}>
        {children}
    </section>
  )
}

export default EbookCtaWrapper
