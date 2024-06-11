"use client";

import { useContext } from "react";
import HamburgerMenuComponent from "./Hamburger-Menu-Component/Hamburger-Menu.component";
import HamburgerClickContext from "@/store/HamburgerClickContext";

const HamburgerMenu = () => {
  const { isOpen, setOpen } = useContext(HamburgerClickContext);

  const closeMenuHandler = () => {
    setOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <HamburgerMenuComponent closeMenuHandler={closeMenuHandler}/>
      ) : null}
    </>
  );
};

export default HamburgerMenu;
