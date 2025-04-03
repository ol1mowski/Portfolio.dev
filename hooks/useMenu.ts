"use client";

import { useCallback, useContext } from 'react';
import HamburgerClickContext from "@/store/HamburgerClickContext";
import { MenuContextType } from '@/types/MenuContext.type';

export const useMenu = () => {
  const { isOpen, setOpen } = useContext(HamburgerClickContext) as MenuContextType;

  const openMenu = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const toggleMenu = useCallback(() => {
    setOpen((prev: boolean) => !prev);
  }, [setOpen]);

  return {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu
  };
}; 