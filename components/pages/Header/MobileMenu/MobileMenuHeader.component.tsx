'use client';

import s from './MobileMenuHeader.component.module.scss';

import { memo, useCallback, useContext } from 'react';

import Image from 'next/image';

import HamburgerClickContext from '@/store/HamburgerClickContext';
import MenuItem from '../MenuItem/MenuItem.component';
import { useTranslatedMenuItems } from '@/hooks/useTranslatedMenuItems.hook';
import LanguageSwitch from '@/components/UI/LanguageSwitch/LanguageSwitch.component';

const MobileMenuHeader = memo(() => {
  const { isOpen, setOpen } = useContext(HamburgerClickContext);
  const menuItems = useTranslatedMenuItems();

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  if (!isOpen) return null;

  return (
    <nav onClick={handleClose} className={s.menu} data-testid="mobile-menu">
      <div className={s.menu__x}>
        <Image
          width={30}
          height={30}
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/close_bgh7rx.svg"
          alt="close Menu icon"
          className={s.menu__x__icon}
        />
      </div>
      <section className={s.menu__nav}>
        {menuItems.map(item => (
          <MenuItem key={item.to} {...item} hideMenu={handleClose} />
        ))}
        <div className={s.menu__language}>
          <LanguageSwitch variant="mobile" />
        </div>
      </section>
    </nav>
  );
});

MobileMenuHeader.displayName = 'MobileMenuHeader';

export default MobileMenuHeader;
