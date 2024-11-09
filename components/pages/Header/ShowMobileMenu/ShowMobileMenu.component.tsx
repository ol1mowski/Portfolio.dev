'use client'

import s from "./ShowMobileMenu.component.module.scss";

import { memo, useCallback } from 'react';
import { useContext } from "react";

import Image from "next/image";

import HamburgerClickContext from "@/store/HamburgerClickContext";
import MobileMenuHeader from "../MobileMenu/MobileMenuHeader.component";

const ShowMobileMenu = memo(() => {
  const { setOpen } = useContext(HamburgerClickContext);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <>
      <nav className={s.navSection}>
        <button 
          className={s.navSection__icon}
          onClick={handleOpen}
          aria-label="Open menu"
        >
          <Image
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/hamburger_black_cyojcu.svg"
            alt="Menu icon"
            width={30}
            height={30}
            className={s.navSection__icon__img}
          />
        </button>
      </nav>
      <MobileMenuHeader />
    </>
  );
});

ShowMobileMenu.displayName = "ShowMobileMenu";

export default ShowMobileMenu;
