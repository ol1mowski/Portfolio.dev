'use client';

import { type FC, useContext } from 'react';
import { type PostsType } from '@/types/PostType.type';

import PostVisibleContext from '@/store/PostVisible.context';
import Header from '../header/header.component';
import NotFound from '../NotFound/NotFound.page';

import PostHeader from './PostHeader/PostHeader.component';
import PostImage from './PostImage/PostImage.component.';
import PostContent from './PostContent/PostContent.component';
import SimilarPosts from './SimilarPosts/SimilarPosts.component';

import s from './post-site.module.scss';

interface PostSiteProps {
  post: PostsType;
  allPosts: PostsType[];
}

export const PostSite: FC<PostSiteProps> = ({ post, allPosts }) => {
  const { sectionVisible } = useContext(PostVisibleContext);
  const { isVisible, sectionName } = sectionVisible;

  if (!post) {
    return <NotFound link="/Blog" info="Nie znaleziono takiego postu" />;
  }

  return (
    <section className={s.container}>
      <Header type="Blog" post />
      <PostImage post={post} />
      <article className={s.content}>
        <PostHeader post={post} />
        <PostContent
          content={post.content}
          sectionName={sectionName}
          isVisible={isVisible}
        />
        <SimilarPosts posts={allPosts} currentPostId={post.id} />
      </article>
    </section>
  );
}; 