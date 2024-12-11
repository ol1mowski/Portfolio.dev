import s from "./SimilarPosts.component.module.scss";

import { forwardRef, LegacyRef, useMemo } from "react";

import { type PostsType } from "@/types/PostType.type";

import PostCardComponent from "@/components/pages/Blog/Posts/PostCardComponent/PostCardComponent.component";
import Caption from "@/components/UI/Caption/Caption.component";

interface SimilarPostsProps {
  posts: PostsType[];
  currentPostId?: number;
}

const SimilarPosts = forwardRef<HTMLDivElement, SimilarPostsProps>(
  ({ posts, currentPostId }, ref) => {
    const similarPosts = useMemo(() => {
      const otherPosts = posts.filter(post => currentPostId ? post.id !== currentPostId : true);
      return otherPosts.slice(0, 3);
    }, [posts, currentPostId]);

    return (
      <section
        ref={ref as LegacyRef<HTMLDivElement>}
        className={s.similarPosts}
        id="similar"
      >
        <Caption type="sub" value={"Podobne Posty"} />
        <div className={s.similarPosts__posts}>
          {similarPosts.map((post) => (
            <PostCardComponent
              key={post.id}
              {...post}
            />
          ))}
        </div>
      </section>
    );
  }
);

SimilarPosts.displayName = 'SimilarPosts';

export default SimilarPosts;
