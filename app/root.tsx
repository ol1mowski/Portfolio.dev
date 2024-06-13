"use client";

import HamburgerClickContext from "@/store/HamburgerClickContext";
import PostVisibleContext from "@/store/PostVisible.context";
import UrlSlug from "@/store/UrlSlug.context";
import React, { useState } from "react";

function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState<boolean>(false);
  const [urlSlug, setUrlSlug] = useState<string>("");
  const [sectionVisible, setSectionVisible] = useState<{
    sectionName: string;
    isVisible: boolean;
  }>({ sectionName: "", isVisible: false });

  return (
    <html lang="pl-PL">
      <body>
        <UrlSlug.Provider
          value={{
            urlSlug: urlSlug,
            setUrlSlug: (value: string) => setUrlSlug,
          }}
        >
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
        </UrlSlug.Provider>
      </body>
    </html>
  );
}

export default Root;
