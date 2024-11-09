import s from "./MenuItem.component.module.scss";

import { memo } from 'react';
import Link from 'next/link';

interface MenuItemProps {
  to: string;
  label: string;
  hideMenu?: () => void;
}

const MenuItem = memo(({ to, label, hideMenu }: MenuItemProps) => (
  <Link 
    href={to} 
    className={s.item}
    onClick={hideMenu}
      scroll={!to.startsWith('/#')}
  >
    {label}
  </Link>
));

MenuItem.displayName = "MenuItem";

export default MenuItem;
