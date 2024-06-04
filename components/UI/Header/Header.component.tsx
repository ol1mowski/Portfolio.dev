'use client'

import s from "./Header.component.module.scss";

import x from "@/assets/close_icon.png";
import hamburger from "@/assets/hamburger.png";

import { useRef } from "react";
import NavBar from "../NavBar/NavBar.component";
import Image from "next/image";

const Header = () => {
  const menu = useRef<HTMLDivElement>(null);

  const showMenuHandler = () => {
    if (menu.current) {
      menu.current.style.display = "block";
    }
  };

  const hideMenuHandler = () => {
    if (menu.current) {
      menu.current.style.display = "none";
    }
  };

  return (
    <>
      <header className={s.headerContainer}>
        <section className={s.headerContainer__nameSection}>
          <h3 className={s.headerContainer__nameSection__content}>
            <span className={s.headerContainer__nameSection__content__name}>Oliwier</span>.dev
          </h3>
        </section>
        <nav className={s.headerContainer__navSection}>
          <div className={s.headerContainer__navSection__icon}>
            <Image
              onClick={showMenuHandler}
              src={hamburger}
              alt="hamburger manu icon"
              width={30}
              height={30}
              className={s.headerContainer__navSection__icon__img}
            />
          </div>
        </nav>
        <NavBar />
      </header>

      <nav
        ref={menu}
        onClick={hideMenuHandler}
        className={s.headerContainer__menu}
      >
        <div className={s.headerContainer__menu__x}>
          <Image
            src={x}
            alt="close icon"
            className={s.headerContainer__menu__x__icon}
          />
        </div>
        <section className={s.headerContainer__menu__nav}>
          <NavBar />
        </section>
      </nav>
    </>
  );
};

export default Header;
