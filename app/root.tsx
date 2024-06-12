"use client";

import PostVisibleContext from "@/store/PostVisible.context";
import React, { useState } from "react";

function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sectionVisible, setSectionVisible] = useState<{
    sectionName: string;
    isVisible: boolean;
  }>({ sectionName: "", isVisible: false });

  return (
    <html lang="pl-PL">
      <body>
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
      </body>
    </html>
  );
}

export default Root;
