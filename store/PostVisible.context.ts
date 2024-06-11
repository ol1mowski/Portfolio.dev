import { createContext } from "react";

type PostVisibleContextType = {
  sectionVisible: { sectionName: string; isVisible: boolean };
  setSectionVisible: (sectionName: string, isVisible: boolean) => void;
};

const PostVisibleContext = createContext<PostVisibleContextType>({
  sectionVisible: { sectionName: "", isVisible: false },
  setSectionVisible: (sectionName: string, isVisible: boolean) => {},
});

export default PostVisibleContext;
