"use client";

import s from "./Header.component.module.scss";

import x from "@/assets/close_icon.png";
import hamburger from "@/assets/hamburger.png";

import { useRef } from "react";
import NavBar from "../NavBar/NavBar.component";
import Image from "next/image";
import MenuItem from "../MenuItem/MenuItem.component";

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

  const menuItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "O mnie" },
    { to: "projects", label: "Projekty" },
    { to: "/Blog", label: "Blog" },
    { to: "opinions", label: "Opinie" },
    { to: "contact", label: "Kontakt" },
  ];

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <>
      <header className={s.headerContainer}>
        <section className={s.headerContainer__nameSection}>
          <h3 className={s.headerContainer__nameSection__content}>
            <span className={s.headerContainer__nameSection__content__name}>
              Oliwier
            </span>
            .dev
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
            width={30}
            height={30}
            src={x}
            alt="close icon"
            className={s.headerContainer__menu__x__icon}
          />
        </div>
        <section className={s.headerContainer__menu__nav}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              to={item.to}
              label={item.label}
              index={index + 1}
              buttonVariants={buttonVariants}
              hideMenu={hideMenuHandler}
            />
          ))}
        </section>
      </nav>
    </>
  );
};

export default Header;
