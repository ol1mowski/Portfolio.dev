import s from './OpinionsWrapper.component.module.scss';

import { type ReactNode } from 'react'

function OpinionsWrapper({ children } : { children: ReactNode }) {
  return (
    <section className={s.container__opinionsWrapper}>
        { children }
    </section>
  )
}

export default OpinionsWrapper