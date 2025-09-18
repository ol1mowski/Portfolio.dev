'use client';

import HamburgerClickContext from '@/store/HamburgerClickContext';
import PostVisibleContext from '@/store/PostVisible.context';
import React, { useState } from 'react';

function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState<boolean>(false);
  const [sectionVisible, setSectionVisible] = useState<{
    sectionName: string;
    isVisible: boolean;
  }>({ sectionName: '', isVisible: false });

  return (
    <html lang="pl-PL">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TPR2VJMXJ3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-TPR2VJMXJ3');
      </script>
      <body>
        <HamburgerClickContext.Provider
          value={{
            isOpen: open,
            setOpen: (open: boolean) => setOpen(open),
          }}
        >
          <PostVisibleContext.Provider
            value={{
              sectionVisible: sectionVisible,
              setSectionVisible(sectionName, isVisible) {
                setSectionVisible({
                  sectionName: sectionName,
                  isVisible: isVisible,
                });
              },
            }}
          >
            {children}
          </PostVisibleContext.Provider>
        </HamburgerClickContext.Provider>
      </body>
    </html>
  );
}
export default Root;
