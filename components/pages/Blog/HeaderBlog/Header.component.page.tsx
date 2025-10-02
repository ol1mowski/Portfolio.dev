'use client';

import s from './Header.component.module.scss';

import { useContext } from 'react';

import HamburgerClickContext from '@/store/HamburgerClickContext';
import HamburgerMenuComponent from './HamburgerMenu/Hamburger-Menu.component';
import HeaderLogo from './HeaderLogo/HeaderLogo.component';
import HamburgerMenuIcon from './HamburgerMenuIcon/HamburgerMenuIcon.component';
import DesktopNavMenu from './DesktopNavMenu/DesktopNavMenu.component';
import SearchBox from './SearchBox/SearchBox.component';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

function Header({ type, post }: { type?: string; post?: boolean }) {
  const { isOpen, setOpen } = useContext(HamburgerClickContext);
  const t = useOptimizedTranslations('header');

  const closeMenuHandler = () => {
    setOpen(false);
  };

  return (
    <header className={s.headerWrapper}>
      <HeaderLogo type={type} />
      {type === 'Blog' && (
        <div className={s.headerWrapper__searchSection}>
          <SearchBox />
        </div>
      )}
      <div className={s.headerWrapper__rightSection}>
        <DesktopNavMenu type={type} />
        {type === 'Blog' && (
          <a
            href="https://justjoin.it/"
            target="_blank"
            rel="noopener noreferrer"
            className={s.headerWrapper__rightSection__jobsButton}
          >
            {t('jobOffers')}
          </a>
        )}
        <HamburgerMenuIcon post={post} />
      </div>
      {isOpen && <HamburgerMenuComponent type={type} closeMenuHandler={closeMenuHandler} />}
    </header>
  );
}

export default Header;
