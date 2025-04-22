import Link from 'next/link';
import Image from 'next/image';
import { type FC } from 'react';
import { type PostsType } from '@/types/PostType.types';

import s from './postCard.module.scss';

type PostCardProps = Pick<
  PostsType,
  'id' | 'title' | 'slug' | 'description' | 'author' | 'image' | 'authorImage' | 'date'
>;

export const PostCard: FC<PostCardProps> = ({
  id,
  title,
  slug,
  description,
  author,
  image,
  authorImage,
  date,
}) => {
  return (
    <article className={s.card} key={`post-${id}-${slug}`}>
      <Link href={`/Blog/posty/${slug}`} className={s.card__link}>
        <div className={s.card__imageContainer}>
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={s.card__image}
              priority={id === 1}
            />
          )}
        </div>
        <div className={s.card__content}>
          <h3 className={s.card__title}>{title}</h3>
          <p className={s.card__description}>{description}</p>
          <div className={s.card__footer}>
            {authorImage && (
              <Image
                src={authorImage}
                alt={author}
                width={40}
                height={40}
                className={s.card__authorImage}
              />
            )}
            <div className={s.card__authorInfo}>
              <span className={s.card__author}>{author}</span>
              <time className={s.card__date}>{date}</time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
