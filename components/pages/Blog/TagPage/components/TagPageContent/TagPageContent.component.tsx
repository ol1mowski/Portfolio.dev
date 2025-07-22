import { FC } from 'react';
import s from './TagPageContent.component.module.scss';
import PostCardComponent from '../../../Posts/PostCardComponent/PostCardComponent.component';
import { PostsType } from '@/types/PostType.types';

interface TagPageContentProps {
  posts: PostsType[];
  hasMore: boolean;
  loadingMore: boolean;
  onLoadMore: () => void;
  cleanTag: string;
}

export const TagPageContent: FC<TagPageContentProps> = ({
  posts,
  hasMore,
  loadingMore,
  onLoadMore,
  cleanTag,
}) => {
  if (posts.length === 0) {
    return (
      <div className={s.noResults}>
        <div className={s.noResults__icon}>🏷️</div>
        <h2 className={s.noResults__title}>Brak artykułów</h2>
        <p className={s.noResults__subtitle}>
          Nie ma jeszcze artykułów z tagiem <strong>#{cleanTag}</strong>.
        </p>
        <a href="/Blog" className={s.noResults__button}>
          Wróć do bloga
        </a>
      </div>
    );
  }

  return (
    <>
      <div className={s.postsGrid}>
        {posts.map(post => (
          <PostCardComponent
            key={`tag-post-${post.id}-${post.slug}`}
            id={post.id}
            title={post.title}
            slug={post.slug}
            description={post.description}
            author={post.author}
            image={post.image}
            authorImage={post.authorImage}
            date={post.date}
            category={post.category}
          />
        ))}
      </div>

      {hasMore && (
        <div className={s.loadMore}>
          <button onClick={onLoadMore} disabled={loadingMore} className={s.loadMore__button}>
            {loadingMore ? (
              <>
                <div className={s.loadMore__button__spinner}></div>
                Ładowanie...
              </>
            ) : (
              'Załaduj więcej artykułów'
            )}
          </button>
        </div>
      )}
    </>
  );
};
