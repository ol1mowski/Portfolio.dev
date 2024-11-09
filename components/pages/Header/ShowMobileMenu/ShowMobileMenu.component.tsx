'use client'

import { memo, useCallback } from 'react';
import Image from "next/image";
import s from "./ShowMobileMenu.component.module.scss";
import { useContext } from "react";
import HamburgerClickContext from "@/store/HamburgerClickContext";
import MobileMenuHeader from "../MobileMenu/MobileMenuHeader.component";

const ShowMobileMenu = memo(() => {
  const { isOpen, setOpen } = useContext(HamburgerClickContext);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <>
      <nav className={s.navSection} data-testid="mobile-nav">
        <button 
          className={s.navSection__icon}
          onClick={handleOpen}
          aria-label="Open menu"
          data-testid="hamburger-button"
        >
          <Image
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/hamburger_black_cyojcu.svg"
            alt="Menu icon"
            width={30}
            height={30}
            className={s.navSection__icon__img}
            data-testid="hamburger-icon"
          />
        </button>
      </nav>
      {isOpen && (
        <MobileMenuHeader data-testid="mobile-menu" />
      )}
    </>
  );
});

ShowMobileMenu.displayName = 'ShowMobileMenu';

export default ShowMobileMenu;
