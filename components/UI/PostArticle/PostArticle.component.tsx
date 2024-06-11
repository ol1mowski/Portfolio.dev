'use client'

import s from "./PostArticle.component.module.scss";
import Caption from "../Caption/Caption.component";
import { useContext, useEffect, useRef } from "react";
import PostVisibleContext from "@/store/PostVisible.context";

function PostArticle({
  title,
  description,
  slug,
}: {
  title: string;
  slug: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { setSectionVisible } = useContext(PostVisibleContext);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setSectionVisible(title, true);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      );

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    } else {
      setSectionVisible(title, false);
    }
  }, []);

  return (
    <section id={slug} ref={ref} className={s.postContentSection}>
      <Caption type="sub" value={title} />
      <p className={s.postContentSection__text}>{description}</p>
    </section>
  );
}

export default PostArticle;
