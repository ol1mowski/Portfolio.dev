"use client";

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
  description: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { setSectionVisible } = useContext(PostVisibleContext);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
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

      observer.observe(currentRef);

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    } else {
      setSectionVisible(title, false);
    }
  }, []);

  console.log(typeof description);
  

  return (
    <section id={slug} ref={ref} className={s.postContentSection}>
      <Caption type="sub" value={title} />
      { description.map(desc => <p key={desc} className={s.postContentSection__text}>{desc}</p>) }
    </section>
  );
}

export default PostArticle;
