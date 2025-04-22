import { type FC } from 'react';
import { type PostsType } from '@/types/PostType.types';

import { PostCard } from '../postCard/postCard.component';
import s from './posts-list.module.scss';

interface PostsListProps {
  posts: PostsType[];
  className?: string;
}

export const PostsList: FC<PostsListProps> = ({ posts, className = '' }) => {
  if (!posts || !posts.length) {
    return (
      <div role="alert" className={s.emptyMessage}>
        Nie znaleziono postów.
      </div>
    );
  }

  return (
    <div className={`${s.list} ${className}`} data-testid="posts-list">
      {posts.map(post => (
        <PostCard
          key={`post-${post.id}-${post.slug}`}
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
  );
};
