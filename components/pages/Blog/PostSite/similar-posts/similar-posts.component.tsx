'use client';

import { type FC, useMemo, forwardRef, type LegacyRef } from 'react';
import { type PostsType } from '@/types/PostType.type';
import Caption from '@/components/UI/Caption/Caption.component';
import { PostCard } from '../../ui/post-card/post-card.component';
import s from './similar-posts.module.scss';

interface SimilarPostsProps {
  posts: PostsType[];
  currentPostId?: number;
}

export const SimilarPosts = forwardRef<HTMLDivElement, SimilarPostsProps>(
  ({ posts, currentPostId }, ref) => {
    const similarPosts = useMemo(() => {
      const otherPosts = posts.filter(post => currentPostId ? post.id !== currentPostId : true);
      return otherPosts.slice(0, 3);
    }, [posts, currentPostId]);

    return (
      <section
        ref={ref as LegacyRef<HTMLDivElement>}
        className={s.similarPosts}
        id="similar"
      >
        <Caption type="sub" value={"Podobne Posty"} />
        <div className={s.similarPosts__posts}>
          {similarPosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              slug={post.slug}
              description={post.description}
              author={post.author}
              image={post.image}
              authorImage={post.authorImage}
              date={post.date}
            />
          ))}
        </div>
      </section>
    );
  }
);

SimilarPosts.displayName = 'SimilarPosts'; 