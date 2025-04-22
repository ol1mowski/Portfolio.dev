'use client';

import s from './PostSite.page.module.scss';

import { useContext } from 'react';

import NotFound from '../NotFound/NotFound.page';
import PostVisibleContext from '@/store/PostVisible.context';

import { type PostsType } from '@/types/PostType.types';

import Header from '../HeaderBlog/Header.component.page';
import PostHeader from './PostHeader/PostHeader.component';
import PostImage from './PostImage/PostImage.component.';
import PostContent from './PostContent/PostContent.component';
import SimilarPosts from './SimilarPosts/SimilarPosts.component';

type PostSiteProps = {
  post: PostsType;
  allPosts: PostsType[];
};

function PostSiteComponent({ post, allPosts }: PostSiteProps) {
  const { sectionVisible } = useContext(PostVisibleContext);
  const { isVisible, sectionName } = sectionVisible;

  if (!post) {
    return <NotFound link="/Blog" info="Nie znaleziono takiego postu" />;
  }

  return (
    <>
      <section className={s.container}>
        <Header type="Blog" post />
        <PostImage post={post} />
        <article className={s.container__content}>
          <PostHeader post={post} />
          <PostContent content={post.content} sectionName={sectionName} isVisible={isVisible} />
          <SimilarPosts posts={allPosts} currentPostId={post.id} />
        </article>
      </section>
    </>
  );
}

export default PostSiteComponent;
