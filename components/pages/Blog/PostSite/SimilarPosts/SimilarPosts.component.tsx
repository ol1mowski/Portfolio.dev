import s from "./SimilarPosts.component.module.scss";
import { forwardRef, LegacyRef } from "react";
import PostCardComponent from "@/components/pages/Blog/Posts/PostCardComponent/PostCardComponent.component";
import { type PostsType } from "@/types/PostType.type";
import Caption from "@/components/UI/Caption/Caption.component";

interface SimilarPostsProps {
  posts: PostsType[];
}

const SimilarPosts = forwardRef<HTMLDivElement, SimilarPostsProps>(
  (props, ref) => {
    const { posts } = props;

    const getRandomIndexes = (length: number, count: number): number[] => {
      const indexes = new Set<number>();
      while (indexes.size < count) {
        indexes.add(Math.floor(Math.random() * length));
      }
      return Array.from(indexes);
    };

    const randomIndexes = getRandomIndexes(posts.length, 3);

    return (
      <section
        ref={ref as LegacyRef<HTMLDivElement>}
        className={s.similarPosts}
        id="similar"
      >
        <Caption type="sub" value={"Podobne Posty"} />
        <div className={s.similarPosts__posts}>
          {randomIndexes.map((index) => {
            const { id, title, slug, description, author, image, authorImage, date } = posts[index];
            return (
              <PostCardComponent
                id={id}
                key={id}
                title={title}
                slug={slug}
                description={description}
                author={author}
                image={image}
                authorImage={authorImage}
                date={date}
              />
            );
          })}
        </div>
      </section>
    );
  }
);

SimilarPosts.displayName = "SimilarPosts";

export default SimilarPosts;
