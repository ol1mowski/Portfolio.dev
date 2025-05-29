import { memo } from 'react';
import { type MenuItemType } from '@/types/MenuItemType.types';

interface MenuItemProps extends MenuItemType {
  className: string;
}

const MenuItem = memo(({ to, label, className }: MenuItemProps) => {
  return (
    <a href={to} className={className} aria-label={label}>
      {label}
    </a>
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
