import s from './MenuItem.component.module.scss';

import { memo } from 'react';

interface MenuItemProps {
  to: string;
  label: string;
  hideMenu?: () => void;
}

const MenuItem = memo(({ to, label, hideMenu }: MenuItemProps) => (
  <a href={to} className={s.item} onClick={hideMenu} aria-label={label}>
    {label}
  </a>
));

MenuItem.displayName = 'MenuItem';

export default MenuItem;
