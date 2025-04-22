import { type FC } from 'react';
import { type PostsType } from '@/types/PostType.types';

import { PostsList } from '../ui/postsList/postsList.component';
import s from './posts.module.scss';

interface PostsSectionProps {
  posts: PostsType[];
}

export const PostsSection: FC<PostsSectionProps> = ({ posts }) => {
  return (
    <section className={s.container} id="posts" data-testid="posts-section">
      <div className={s.header}>
        <h2 className={s.title}>Ostatnie wpisy</h2>
        <p className={s.description}>
          Sprawdź najnowsze artykuły i porady z zakresu technologii i rozwoju
        </p>
      </div>

      <PostsList posts={posts} className={s.postsWrapper} />

      <div className={s.buttonContainer}>
        <a href="/Blog/posty" className={s.button}>
          Zobacz wszystkie posty
        </a>
      </div>
    </section>
  );
};
