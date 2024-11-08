import { type ReactNode } from "react";
import s from "./FooterWrapper.component.module.scss";

function FooterWrapper({ children }: { children: ReactNode }) {
  return <section className={s.wrapper}>{children}</section>;
}

export default FooterWrapper;
