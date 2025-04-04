'use client';

import { type FC, useContext } from 'react';
import { type PostsType } from '@/types/PostType.type';

import { PostVisibleContext } from '../post-provider';
import Header from '../header/header.component';
import NotFound from '../NotFound/NotFound.page';

import { PostHeader } from './post-header/post-header.component';
import { PostImage } from './post-image/post-image.component';
import { PostContent } from './post-content/post-content.component';
import { SimilarPosts } from './similar-posts/similar-posts.component';

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