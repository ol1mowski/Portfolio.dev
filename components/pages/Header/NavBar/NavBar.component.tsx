import { memo } from 'react';
import s from './NavBar.component.module.scss';
import { menuItems } from '@/data/MenuItems.data';
import MenuItem from '@/components/UI/MenuItem/MenuItem.component';

const NavBar = memo(() => {
  return (
    <nav className={s.navSectionBig}>
      {menuItems.map(item => (
        <MenuItem key={item.to} to={item.to} label={item.label} className={s.navSectionBig__item} />
      ))}
    </nav>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
