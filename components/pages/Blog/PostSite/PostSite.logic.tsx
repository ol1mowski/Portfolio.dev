"use client";

import s from "./PostSite.page.module.scss";

import Image from "next/image";
import { useEffect, useState } from "react";

import { POSTS_CONTENT } from "./PostContent.data";

import headerLogo from "@/assets/logo_black.svg";
import hamburger from "@/assets/hamburger_black.svg";

import useElementVisible from "@/hooks/useElementVisible.hook";

import TableOfContents from "@/components/UI/TableOfContents/TableOfContents.component";
import PostArticle from "@/components/UI/PostArticle/PostArticle.component";
import SimilarPosts from "@/components/UI/SimilarPosts/SimilarPosts.component";
import Header from "@/components/UI/HeaderBlog/Header.component.page";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";
import PostInfo from "./PostInfo/PostInfo.component";

function PostSite() {
  
  const [isVisible, reference] = useElementVisible();
  const [isSimilarPostsVisible, setSimilarPostsVisible] = useState(true);
  const [urlSlug, setUrlSlug] = useState('');

  useEffect(() => {
    isVisible ? setSimilarPostsVisible(true) : setSimilarPostsVisible(false);
  }, [isVisible]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrlSlug(location.href.split("/")[5]);
    }
  }, []);

  const correctPostArticle = POSTS_CONTENT.filter(
    (item) => item.slug === urlSlug
  );

  const correctPostArticleContent = correctPostArticle.length > 0 ? correctPostArticle[0].content : [];

  return (
    <section className={s.container}>
      <Header logo={headerLogo} hamburger={hamburger} />
      <section className={s.container__imageSection}>
        {correctPostArticle.map((item) => (
          <Image
            key={item.id}
            className={s.container__imageSection__img}
            src={item.image}
            alt="post image"
            height={450}
            width={800}
          />
        ))}
      </section>
      <article className={s.container__content}>
        <AnimationWrapper>
          <section className={s.container__headerSection}>
            {correctPostArticle.map((item) => (
              <PostInfo
                key={item.id}
                author={item.author}
                date={item.date}
                readTime={item.readTime}
                category={item.category}
                title={item.title}
              />
            ))}
          </section>
        </AnimationWrapper>

        {isSimilarPostsVisible ? null : <TableOfContents content={correctPostArticleContent}/>}
        {correctPostArticleContent.map((item) => (
          <PostArticle
            key={item.id}
            slug={item.slug}
            title={item.title}
            description={item.description}
          />
        ))}
        <SimilarPosts ref={reference} />
      </article>
    </section>
  );
}

export default PostSite;
