'use client';

import { memo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { type MenuItemType } from '@/types/MenuItemType.types';

interface MenuItemProps extends MenuItemType {
  className: string;
}

const MenuItem = memo(({ to, label, className }: MenuItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (to.startsWith('#')) {
      if (pathname === '/') {
        const element = document.querySelector(to);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = `/${to}`;
      }
    } else {
      router.push(to);
    }
  };

  return (
    <a href={to} className={className} aria-label={label} onClick={handleClick}>
      {label}
    </a>
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
