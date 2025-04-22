import Link from 'next/link';
import { memo } from 'react';
import { type MenuItemType } from '@/types/MenuItemType.types';

interface MenuItemProps extends MenuItemType {
  className: string;
}

const MenuItem = memo(({ to, label, className }: MenuItemProps) => {
  return (
    <Link href={to} className={className} scroll={!to.startsWith('/#')}>
      {label}
    </Link>
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
