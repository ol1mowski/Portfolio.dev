import { type ReactNode } from 'react';
import s from './HeaderWrapper.component.module.scss';

function HeaderWrapper({ children }: { children: ReactNode }) {
  return <header className={s.headerContainer}>{children}</header>;
}

export default HeaderWrapper;
