import { memo } from 'react';
import Link from 'next/link';
import s from "./NavBar.component.module.scss";
import { menuItems } from '@/data/MenuItems.data';

const NavBar = memo(() => {
  return (
    <nav className={s.navSectionBig}>
      {menuItems.map(({ to, label }) => (
        <Link 
          key={to}
          href={to}
          className={s.navSectionBig__item}
          scroll={!to.startsWith('/#')}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
