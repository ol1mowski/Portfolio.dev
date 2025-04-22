'use client';

import { type FC, type ReactNode, useState, createContext } from 'react';

interface PostVisibility {
  isVisible: boolean;
  sectionName: string;
}

interface PostVisibleContextType {
  sectionVisible: PostVisibility;
  setSectionVisible: (visibility: PostVisibility) => void;
}

export const PostVisibleContext = createContext<PostVisibleContextType>({
  sectionVisible: { isVisible: false, sectionName: '' },
  setSectionVisible: () => {},
});

interface PostProviderProps {
  children: ReactNode;
}

export const PostProvider: FC<PostProviderProps> = ({ children }) => {
  const [sectionVisible, setSectionVisible] = useState<PostVisibility>({
    isVisible: false,
    sectionName: '',
  });

  const contextValue = {
    sectionVisible,
    setSectionVisible,
  };

  return <PostVisibleContext.Provider value={contextValue}>{children}</PostVisibleContext.Provider>;
};
