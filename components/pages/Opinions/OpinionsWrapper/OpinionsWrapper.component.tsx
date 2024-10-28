import s from './OpinionsWrapper.component.module.scss';

import { type ReactNode } from 'react'

function OpinionsWrapper({ children } : { children: ReactNode }) {
  return (
    <section className={s.opinionsWrapper}>
        { children }
    </section>
  )
}

export default OpinionsWrapper