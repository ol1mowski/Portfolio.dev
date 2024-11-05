import s from "./HamburgerMenu.module.scss";

import Image from "next/image";

import blogImage from "@/assets/logo_black.svg";
import { BlogITEMS, ITEMS } from "../StaticData";
import Item from "../Item/Item.component";

function HamburgerMenuComponent({
  closeMenuHandler,
  type,
}: {
  closeMenuHandler: () => void;
  type?: string;
}) {
  return (
    <menu data-testid="hamburger-menu-component" className={s.hamburgerMenu}>
      <section className={s.hamburgerMenu__close}>
        <Image
          onClick={closeMenuHandler}
          className={s.hamburgerMenu__close__icon}
          width="30"
          height="30"
          src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/close_bgh7rx.svg"
          alt="delete-sign"
        />
      </section>
      <nav className={s.hamburgerMenu__nav}>
        <ul className={s.hamburgerMenu__nav__items}>
          {type === "Blog"
            ? BlogITEMS.map((item) => (
                <Item key={item.id} value={item.value} href={item.href} />
              ))
            : ITEMS.map((item) => (
                <Item key={item.id} value={item.value} href={item.href} />
              ))}
        </ul>
      </nav>
      <section className={s.hamburgerMenu__logo}>
        <Image width={200} height={70} src={blogImage} alt="blog-image" />
      </section>
    </menu>
  );
}

export default HamburgerMenuComponent;
