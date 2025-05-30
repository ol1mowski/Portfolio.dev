import s from '../../HomePage.page.module.scss';
import Image from 'next/image';
import { type PostsType } from '@/types/PostType.types';

interface MainArticleProps {
  post: PostsType;
  onCategoryClick: (category: string) => void;
}

export default function MainArticle({ post, onCategoryClick }: MainArticleProps) {
  return (
    <a href={`/Blog/posty/${post.slug}`} className={s.mainArticle}>
      <div className={s.mainArticle__image}>
        <Image
          src={post.image}
          alt={post.title}
          className={s.mainArticle__image__img}
          width={500}
          height={300}
        />
      </div>
      <div className={s.mainArticle__content}>
        <div className={s.mainArticle__content__tags}>
          <span
            className={s.mainArticle__content__tags__react}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              onCategoryClick(post.category || 'React');
            }}
          >
            {post.category || 'React'}
          </span>
          <span className={s.mainArticle__content__tags__featured}>⭐ Polecane</span>
        </div>
        <h2 className={s.mainArticle__content__title}>{post.title}</h2>
        <div className={s.mainArticle__content__meta}>
          <span className={s.mainArticle__content__meta__author}>{post.author}</span>
          <span className={s.mainArticle__content__meta__date}>{post.date}</span>
          <span className={s.mainArticle__content__meta__readTime}>{post.readTime || 5} min</span>
        </div>
        <span className={s.mainArticle__content__readMore}>Czytaj więcej →</span>
      </div>
    </a>
  );
}
