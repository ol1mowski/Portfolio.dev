import s from "./HamburgerMenu.module.scss";


import Image from "next/image";

import blogImage from "@/assets/logo_black.svg";
import ScrollLink from "@/components/Utils/ScrollLink.component";
import Link from "next/link";

type HamburgerMenuProps = {
  type: string | undefined;
  closeMenuHandler: () => void;
};

function HamburgerMenuComponent({
  type,
  closeMenuHandler,
}: HamburgerMenuProps) {
  return (
    <menu className={s.hamburgerMenu}>
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
          <Link href={"/Blog"}>
            <li
              onClick={closeMenuHandler}
              className={s.hamburgerMenu__nav__items__item}
            >
              Home
            </li>
          </Link>
          {type === "in" ? (
            <>
              <ScrollLink link={"#posts"}>
                <li
                  onClick={closeMenuHandler}
                  className={s.hamburgerMenu__nav__items__item}
                >
                  Posty
                </li>
              </ScrollLink>
            </>
          ) : (
            <a href="/#posts">
              <li
                onClick={closeMenuHandler}
                className={s.hamburgerMenu__nav__items__item}
              >
                Posty
              </li>
            </a>
          )}
          <Link href={"/"}>
            <li
              onClick={closeMenuHandler}
              className={s.hamburgerMenu__nav__items__item}
            >
              Portfolio
            </li>
          </Link>{" "}
        </ul>
      </nav>
      <section className={s.hamburgerMenu__logo}>
        <Image width={200} height={70} src={blogImage} alt="blog-image" />
      </section>
    </menu>
  );
}

export default HamburgerMenuComponent;
