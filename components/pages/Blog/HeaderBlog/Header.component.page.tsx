"use client";

import s from "./Header.component.module.scss";

import { useContext } from "react";

import HamburgerClickContext from "@/store/HamburgerClickContext";
import HamburgerMenuComponent from "./HamburgerMenu/Hamburger-Menu.component";
import HeaderLogo from "./HeaderLogo/HeaderLogo.component";
import HamburgerMenuIcon from "./HamburgerMenuIcon/HamburgerMenuIcon.component";
import DesktopNavMenu from "./DesktopNavMenu/DesktopNavMenu.component";

function Header({ type }: { type?: string }) {
  const { isOpen, setOpen } = useContext(HamburgerClickContext);

  const closeMenuHandler = () => {
    setOpen(false);
  };

  return (
    <header className={s.headerWrapper}>
      <HeaderLogo type={type} />
      <HamburgerMenuIcon />
      <DesktopNavMenu type={type} />
      {isOpen && <HamburgerMenuComponent type={type} closeMenuHandler={closeMenuHandler} />}
    </header>
  );
}

export default Header;
