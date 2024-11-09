import { memo } from 'react';
import Link from 'next/link';
import s from "./NavBar.component.module.scss";

const NAV_ITEMS = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'O Mnie' },
  { href: '/#projects', label: 'Projekty' },
  { href: '/Blog', label: 'Blog' },
  { href: '/#opinions', label: 'Opinie' },
  { href: '/#contact', label: 'Kontakt' }
];

const NavBar = memo(() => {
  return (
    <nav className={s.navSectionBig}>
      {NAV_ITEMS.map(({ href, label }) => (
        <Link 
          key={href}
          href={href}
          className={s.navSectionBig__item}
          scroll={!href.startsWith('/#')}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
