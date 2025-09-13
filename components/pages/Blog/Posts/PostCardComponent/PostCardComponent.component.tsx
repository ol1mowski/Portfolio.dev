'use client';

import s from './PostCardComponent.component.module.scss';
import Image from 'next/image';
import { type PostCardType } from '@/types/PostType.types';
import { useLocale } from 'next-intl';

function PostCardComponent({
  title,
  description,
  image,
  authorImage,
  author,
  date,
  slug,
  category = 'React',
}: PostCardType) {
  const locale = useLocale();
  const getHashtags = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'react':
        return ['#React', '#JavaScript', '#Frontend'];
      case 'typescript':
        return ['#TypeScript', '#JavaScript', '#Development'];
      case 'next.js':
        return ['#NextJs', '#React', '#SSR'];
      case 'docker':
        return ['#Docker', '#DevOps', '#Deployment'];
      default:
        return ['#JavaScript', '#Development', '#Programming'];
    }
  };

  const hashtags = getHashtags(category);

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = `/${locale}/Blog/kategorie/${encodeURIComponent(category)}`;
  };

  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = `/${locale}/Blog/tagi/${encodeURIComponent(tag.replace('#', ''))}`;
  };

  return (
    <a href={`/${locale}/Blog/posty/${slug}`} className={s.postCard}>
      <div className={s.postCard__imageSection}>
        <Image
          className={s.postCard__imageSection__img}
          src={image}
          alt={title}
          width={400}
          height={250}
        />
        <div className={s.postCard__imageSection__category} onClick={handleCategoryClick}>
          {category}
        </div>
      </div>

      <div className={s.postCard__content}>
        <h3 className={s.postCard__content__title}>{title}</h3>
        <p className={s.postCard__content__description}>{description}</p>

        <div className={s.postCard__content__hashtags}>
          {hashtags.map((hashtag, index) => (
            <span
              key={index}
              onClick={e => handleTagClick(e, hashtag)}
              className={s.postCard__content__hashtags__tag}
            >
              {hashtag}
            </span>
          ))}
        </div>

        <div className={s.postCard__content__meta}>
          <div className={s.postCard__content__meta__author}>
            <Image
              className={s.postCard__content__meta__author__avatar}
              src={authorImage}
              alt={author}
              width={32}
              height={32}
            />
            <span className={s.postCard__content__meta__author__name}>{author}</span>
          </div>
          <span className={s.postCard__content__meta__date}>{date}</span>
          <span className={s.postCard__content__meta__readTime}>8 min</span>
        </div>
      </div>
    </a>
  );
}

export default PostCardComponent;
