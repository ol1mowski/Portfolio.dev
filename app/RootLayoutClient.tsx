'use client';

import './globals.scss';

import HamburgerClickContext from '@/store/HamburgerClickContext';
import PostVisibleContext from '@/store/PostVisible.context';
import CustomerSupportChat from '@/components/UI/CustomerSupportChat/CustomerSupportChat.component';

import { type ReactNode, useState } from 'react';

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  const [sectionVisible, setSectionVisibleState] = useState<{
    sectionName: string;
    isVisible: boolean;
  }>({ sectionName: '', isVisible: false });

  const setSectionVisible = (sectionName: string, isVisible: boolean) => {
    setSectionVisibleState({ sectionName, isVisible });
  };

  return (
    <HamburgerClickContext.Provider value={{ isOpen: open, setOpen }}>
      <PostVisibleContext.Provider value={{ sectionVisible, setSectionVisible }}>
        {children}
        <CustomerSupportChat />
      </PostVisibleContext.Provider>
    </HamburgerClickContext.Provider>
  );
}
