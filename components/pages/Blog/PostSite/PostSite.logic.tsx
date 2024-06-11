"use client";

import s from "./PostSite.page.module.scss";

import Image from "next/image";
import { useEffect, useState } from "react";

import { POSTS_CONTENT } from "./PostContent.data";

import Caption from "@/components/UI/Caption/Caption.component";

import headerLogo from "@/assets/logo_black.svg";
import authorImage from "@/assets/author_about.svg";
import postImage from "@/assets/post_image.jpg";
import categoryIcon from "@/assets/category.svg";
import calenderIcon from "@/assets/calendar.svg";
import readingTimeIcon from "@/assets/time.svg";
import hamburger from "@/assets/hamburger_black.svg";

import useElementVisible from "@/hooks/useElementVisible.hook";

import TableOfContents from "@/components/UI/TableOfContents/TableOfContents.component";
import PostArticle from "@/components/UI/PostArticle/PostArticle.component";
import SimilarPosts from "@/components/UI/SimilarPosts/SimilarPosts.component";
import Header from "@/components/UI/HeaderBlog/Header.component.page";

function PostSite() {
  const [isVisible, reference] = useElementVisible();

  const [isSimilarPostsVisible, setSimilarPostsVisible] =
    useState<boolean>(true);

  useEffect(() => {
    isVisible ? setSimilarPostsVisible(true) : setSimilarPostsVisible(false);
  }, [isVisible]);

  return (
    <section className={s.container}>
      <Header logo={headerLogo} hamburger={hamburger} />
      <section className={s.container__imageSection}>
        <Image
          className={s.container__imageSection__img}
          src={postImage}
          alt="post image"
          height={450}
          width={800}
        />
      </section>
      <article className={s.container__content}>
        <section className={s.container__headerSection}>
          <div className={s.container__headerSection__header}>
            <Caption type="sub" value={"Jak Technologia zmienia branże IT ?"} />
          </div>
          <div className={s.container__headerSection__postInfo}>
            <Image
              src={authorImage}
              alt="author's avatar"
              width={40}
              height={40}
              className={s.container__headerSection__postInfo__avatar}
            />
            <span className={s.container__headerSection__postInfo__info}>
              Oliwier Markiewicz
            </span>
            <Image src={calenderIcon} alt="date icon" width={25} height={25} />

            <span className={s.container__headerSection__postInfo__info}>
              20 Maj 2024
            </span>
            <Image
              src={categoryIcon}
              alt="category icon"
              width={25}
              height={25}
            />

            <span className={s.container__headerSection__postInfo__info}>
              React
            </span>
            <Image
              src={readingTimeIcon}
              alt="reading time icon"
              width={25}
              height={25}
            />

            <span className={s.container__headerSection__postInfo__info}>
              5 min.
            </span>
          </div>
        </section>
        {isSimilarPostsVisible ? null : <TableOfContents />}
        {POSTS_CONTENT.map((item) => (
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
