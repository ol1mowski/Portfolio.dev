import { createContext } from "react";

type UrlSlugType = {
  urlSlug: string;
  setUrlSlug: (urlSlug: string,) => void;
};

const UrlSlug = createContext<UrlSlugType>({
  urlSlug: '',
  setUrlSlug: (urlSlug: string) => {},
});

export default UrlSlug;
