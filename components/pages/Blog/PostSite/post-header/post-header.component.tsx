import { type FC } from 'react';
import { type PostsType } from  '@/types/PostType.types';
import { PostInfo } from '../post-info/post-info.component';
import s from './post-header.module.scss';

interface PostHeaderProps {
  post: PostsType;
}

export const PostHeader: FC<PostHeaderProps> = ({ post }) => (
  <section className={s.headerSection}>
    <PostInfo key={post.id} {...post} />
  </section>
); 