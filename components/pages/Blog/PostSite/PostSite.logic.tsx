"use client";

import s from "./PostSite.page.module.scss";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import headerLogo from "@/assets/logo_black.svg";
import hamburger from "@/assets/hamburger_black.svg";

import useElementVisible from "@/hooks/useElementVisible.hook";

import TableOfContents from "@/components/UI/TableOfContents/TableOfContents.component";
import PostArticle from "@/components/UI/PostArticle/PostArticle.component";
import SimilarPosts from "@/components/UI/SimilarPosts/SimilarPosts.component";

import PostInfo from "./PostInfo/PostInfo.component";
import NotFound from "../NotFound/NotFound.page";
import PostVisibleContext from "@/store/PostVisible.context";
import Header from "@/components/UI/HeaderBlog/Header.component.page";
import Head from "next/head";
import { PostsType } from "@/types/PostType.type";

function PostSiteComponent({ posts }: { posts: PostsType[] }) {
  const [isVisible1, reference] = useElementVisible();
  const [urlSlug, setUrlSlug] = useState("");
  const { sectionVisible } = useContext(PostVisibleContext);

  const { isVisible, sectionName } = sectionVisible;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrlSlug(location.href.split("/")[5]);
    }
  }, []);

  const correctPostArticle = posts.filter((item) => item.slug === urlSlug);

  const correctPostArticleContent =
    correctPostArticle.length > 0 ? correctPostArticle[0].content : [];

  if (correctPostArticle.length === 0) {
    return (
      <>
        <Header type="Blog" logo={headerLogo} hamburger={hamburger} />
        <NotFound link="/Blog" info="Nie znaleziono takiego postu" />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{correctPostArticle[0].title}</title>
        <meta
          name="description"
          content="Post o Tworzeniu Stron Internetowych"
        />
      </Head>
      <section className={s.container}>
        <Header type="Blog" logo={headerLogo} hamburger={hamburger} />
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
          <section className={s.container__headerSection}>
            {correctPostArticle.map((item) => (
              <PostInfo
                key={item.id}
                author={item.author}
                authorImage={item.authorImage}
                date={item.date}
                readTime={item.readTime}
                category={item.category}
                title={item.title}
              />
            ))}
          </section>

          {sectionName === "Podsumowanie" && isVisible ? null : (
            <TableOfContents content={correctPostArticleContent} />
          )}
          {correctPostArticleContent.map((item) => (
            <PostArticle
              key={item.title}
              slug={item.slug}
              title={item.title}
              description={item.description}
            />
          ))}
          <SimilarPosts reference={reference} posts={posts} />
        </article>
      </section>
    </>
  );
}

export default PostSiteComponent;
