"use client";

import { createContext } from "react";

type HamburgerClickContextType = {
  isOpen: boolean;
  setOpen: (click: boolean) => void;
};

const HamburgerClickContext = createContext<HamburgerClickContextType>({
  isOpen: false,
  setOpen: (click: boolean) => {},
});

export default HamburgerClickContext;
