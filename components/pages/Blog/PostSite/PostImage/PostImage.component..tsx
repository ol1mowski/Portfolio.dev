import Image from 'next/image';
import { type PostsType } from '@/types/PostType.type';
import s from './PostImage.component.module.scss';

interface PostImageProps {
  post: PostsType;
}

const PostImage: React.FC<PostImageProps> = ({ post }) => (
  <section className={s.imageSection}>
    <Image
      key={post.id}
      className={s.imageSection__img}
      src={post.image}
      alt="post image"
      height={450}
      width={800}
    />
  </section>
);

export default PostImage; 