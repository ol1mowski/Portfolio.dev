"use client";

import { useContext, useEffect, useRef, useState } from "react";
import s from "./TableOfContents.component.module.scss";
import PostVisibleContext from "@/store/PostVisible.context";
import ScrollLink from "@/components/utils/ScrollLink.component";

function TableOfContents() {
  const { sectionVisible } = useContext(PostVisibleContext);

  const { isVisible, sectionName } = sectionVisible;

  const header = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const handleScroll = () => {
    if (header.current) {
      if (scrollY > 610) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };
  

  useEffect(() => {
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={header}
      className={` ${isSticky ? s.tableOfContents_sticky : s.tableOfContents}`}
    >
      <h3 className={s.tableOfContents__caption}>Spis Treści</h3>
      <ul className={s.tableOfContents__listItems}>
        <ScrollLink link={"#co-to-jest-react"}>
          <li
            className={
              sectionName === "Co to jest React ?" && isVisible
                ? `${s.tableOfContents__listItems__item_active}`
                : `${s.tableOfContents__listItems__item}`
            }
          >
            Co to jest React ?
          </li>
        </ScrollLink>
        <ScrollLink link="#jak-uzywac-hooks">
          <li
            className={
              sectionName === "Jak używać Hooks ?" && isVisible
                ? `${s.tableOfContents__listItems__item_active}`
                : `${s.tableOfContents__listItems__item}`
            }
          >
            Jak używać Hooks ?
          </li>
        </ScrollLink>
        <ScrollLink link="#zarzadzanie-stanem">
          <li
            className={
              sectionName === "Zarządzanie stanem" && isVisible
                ? `${s.tableOfContents__listItems__item_active}`
                : `${s.tableOfContents__listItems__item}`
            }
          >
            Zarządzanie stanem
          </li>
        </ScrollLink>
        <ScrollLink link="#advanced-patterns">
          <li
            className={
              sectionName === "Advanced Patterns" && isVisible
                ? `${s.tableOfContents__listItems__item_active}`
                : `${s.tableOfContents__listItems__item}`
            }
          >
            Advanced Patterns
          </li>
        </ScrollLink>
      </ul>
    </section>
  );
}

export default TableOfContents;
