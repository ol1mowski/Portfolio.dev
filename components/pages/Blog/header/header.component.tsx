'use client';

import { type FC, useContext } from 'react';

import HamburgerClickContext from '@/store/HamburgerClickContext';
import s from './header.module.scss';

import HeaderLogo from '../HeaderBlog/HeaderLogo/HeaderLogo.component';
import HamburgerMenuIcon from '../HeaderBlog/HamburgerMenuIcon/HamburgerMenuIcon.component';
import DesktopNavMenu from '../HeaderBlog/DesktopNavMenu/DesktopNavMenu.component';
import HamburgerMenu from '../HeaderBlog/HamburgerMenu/Hamburger-Menu.component';

interface HeaderProps {
  type?: string;
  post?: boolean;
}

export const Header: FC<HeaderProps> = ({ type, post }) => {
  const { isOpen, setOpen } = useContext(HamburgerClickContext);

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <header className={s.header}>
      <HeaderLogo type={type} />
      <HamburgerMenuIcon post={post} />
      <DesktopNavMenu type={type} />
      {isOpen && <HamburgerMenu type={type} closeMenuHandler={handleCloseMenu} />}
    </header>
  );
};

export default Header;
