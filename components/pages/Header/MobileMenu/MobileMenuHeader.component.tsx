import s from "./MobileMenuHeader.component.module.scss";

import Image from "next/image";

import { useContext } from "react";
import HamburgerClickContext from "@/store/HamburgerClickContext";

import MenuItem from "../MenuItem/MenuItem.component";
import { menuItems } from "@/data/MenuItems.data";

function MobileMenuHeader() {
  const { isOpen, setOpen } = useContext(HamburgerClickContext);

  return (
    <>
      {isOpen && (
        <nav onClick={() => setOpen(false)} className={s.menu}>
          <div className={s.menu__x}>
            <Image
              width={30}
              height={30}
              src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1729846726/Portfolio/Icons/close_bgh7rx.svg"
              alt="close Menu icon"
              className={s.menu__x__icon}
            />
          </div>
          <section className={s.menu__nav}>
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                to={item.to}
                label={item.label}
                hideMenu={() => setOpen(false)}
              />
            ))}
          </section>
        </nav>
      )}
    </>
  );
}

export default MobileMenuHeader;
