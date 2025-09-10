import { memo } from 'react';
import s from './NavBar.component.module.scss';
import { useTranslatedMenuItems } from '@/hooks/useTranslatedMenuItems.hook';
import MenuItem from '@/components/UI/MenuItem/MenuItem.component';
import LanguageSwitch from '@/components/UI/LanguageSwitch/LanguageSwitch.component';

const NavBar = memo(() => {
  const menuItems = useTranslatedMenuItems();

  return (
    <nav className={s.navSectionBig}>
      {menuItems.map(item => (
        <MenuItem key={item.to} to={item.to} label={item.label} className={s.navSectionBig__item} />
      ))}
      <LanguageSwitch variant="header" />
    </nav>
  );
});

NavBar.displayName = 'NavBar';

export default NavBar;
