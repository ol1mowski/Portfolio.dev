'use client'

import s from "./ShowMobileMenu.component.module.scss";

import Image from "next/image";

import { useContext } from "react";
import HamburgerClickContext from "@/store/HamburgerClickContext";

import MobileMenuHeader from "../MobileMenu/MobileMenuHeader.component";


function ShowMobileMenu() {
  
  const { isOpen, setOpen } = useContext(HamburgerClickContext);

  return (
    <>
      <nav className={s.navSection}>
        <div className={s.navSection__icon}>
          <Image
            onClick={() => setOpen(true)}
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/hamburger_black_cyojcu.svg"
            alt="hamburger menu icon"
            width={30}
            height={30}
            className={s.navSection__icon__img}
          />
        </div>
      </nav>
      {isOpen && <MobileMenuHeader />}
    </>
  );
}

export default ShowMobileMenu;
