'use client';

import s from './ShowMobileMenu.component.module.scss';
import { memo } from 'react';
import Image from 'next/image';
import MobileMenuHeader from '../MobileMenu/MobileMenuHeader.component';
import { useMenu } from '@/hooks/useMenu.hook';
import { HEADER_ICONS, ICON_DIMENSIONS } from '../constants/constants';

const ShowMobileMenu = memo(() => {
  const { isOpen, openMenu } = useMenu();

  return (
    <>
      <nav className={s.navSection} data-testid="mobile-nav">
        <Image
          src={HEADER_ICONS.HAMBURGER}
          alt="Menu icon"
          onClick={openMenu}
          aria-label="Open menu"
          data-testid="hamburger-icon"
          width={ICON_DIMENSIONS.WIDTH}
          height={ICON_DIMENSIONS.HEIGHT}
          className={s.navSection__icon}
        />
      </nav>
      {isOpen && <MobileMenuHeader data-testid="mobile-menu" />}
    </>
  );
});

ShowMobileMenu.displayName = 'ShowMobileMenu';

export default ShowMobileMenu;
