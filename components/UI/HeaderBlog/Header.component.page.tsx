"use client";

import s from "./Header.component.module.scss";

import Image, { type StaticImageData } from "next/image";

import { ITEMS } from "./StaticData";
import Button from "../Button/Button.component";
import Item from "./Item/Item.component";
import Link from "next/link";
import { useContext } from "react";
import HamburgerClickContext from "@/store/HamburgerClickContext";
import HamburgerMenuComponent from "./HamburgerMenu/Hamburger-Menu.component";

function Header({
  logo,
  hamburger,
}: {
  logo: StaticImageData;
  hamburger: StaticImageData;
}) {
  const { isOpen, setOpen } = useContext(HamburgerClickContext);

  const closeMenuHandler = () => {
    setOpen(false);
  };

  const openHamburgerMenuHandler = () => {
    setOpen(true);
  };

  return (
    <header className={s.headerWrapper}>
      <section className={s.headerWrapper__logoSection}>
        <Link href={"/Blog"}>
          <Image
            className={s.headerWrapper__logoSection__img}
            src={logo}
            alt="Blog's logo"
            width={150}
            height={150}
          />
        </Link>
      </section>

      <section className={s.headerWrapper__hamburgerMenu}>
        <Image
          onClick={openHamburgerMenuHandler}
          src={hamburger}
          alt="Hamburger menu icon"
          width={30}
          height={30}
        />
      </section>

      <section className={s.headerWrapper__menuList}>
        <section className={s.headerWrapper__menuList__linksWrapper}>
          <ul className={s.headerWrapper__menuList__linksWrapper__links}>
            {ITEMS.map((item) => (
              <Item
                key={item.id}
                value={item.value}
                href={item.href}
                type={item.type}
              />
            ))}
          </ul>
        </section>
        <section className={s.headerWrapper__menuList__findJob}>
          <a
            href="https://justjoin.it/all-locations/javascript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="normal" value="Oferty Pracy" />
          </a>
        </section>
      </section>
      {isOpen ? (
        <HamburgerMenuComponent closeMenuHandler={closeMenuHandler} />
      ) : null}
    </header>
  );
}

export default Header;
