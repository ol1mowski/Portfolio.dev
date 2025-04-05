import { type FC } from 'react';
import Image from 'next/image';
import { type PostsType } from '@/types/PostType.types';
import s from './post-image.module.scss';

interface PostImageProps {
  post: PostsType;
}

export const PostImage: FC<PostImageProps> = ({ post }) => (
  <section className={s.imageSection}>
    <Image
      key={post.id}
      className={s.imageSection__img}
      src={post.image}
      alt="post image"
      height={450}
      width={800}
      priority
    />
  </section>
); 