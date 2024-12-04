import { type PostsType } from "@/types/PostType.type";
import s from "./PostHeader.component.module.scss";
import PostInfo from "../PostInfo/PostInfo.component";

interface PostHeaderProps {
  post: PostsType;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => (
  <section className={s.headerSection}>
    <PostInfo key={post.id} {...post} />
  </section>
);

export default PostHeader;
