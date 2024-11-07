"use client";

import s from "./PostSite.page.module.scss";

import { useContext, useEffect, useState } from "react";

import TableOfContents from "@/components/pages/Blog/PostSite/TableOfContents/TableOfContents.component";

import NotFound from "../NotFound/NotFound.page";
import PostVisibleContext from "@/store/PostVisible.context";

import { type PostsType } from "@/types/PostType.type";
import Header from "../HeaderBlog/Header.component.page";
import PostHeader from "./PostHeader/PostHeader.component";
import PostImage from "./PostImage/PostImage.component.";
import PostContent from "./PostContent/PostContent.component";
import SimilarPosts from "./SimilarPosts/SimilarPosts.component";

function PostSiteComponent({ posts }: { posts: PostsType[] }) {
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
    return <NotFound link="/Blog" info="Nie znaleziono takiego postu" />;
  }

  return (
    <>
      <section className={s.container}>
        <Header type="Blog" />
        <PostImage post={correctPostArticle[0]} />
        <article className={s.container__content}>
          <PostHeader post={correctPostArticle[0]} />

          {/* {sectionName !== "Podsumowanie" && isVisible && (
            <TableOfContents content={correctPostArticleContent} />
          )} */}

          <PostContent
            content={correctPostArticleContent}
            sectionName={sectionName}
            isVisible={isVisible}
          />
          <SimilarPosts posts={posts} />
        </article>
      </section>
    </>
  );
}

export default PostSiteComponent;
