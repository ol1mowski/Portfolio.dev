import s from "./SimilarPosts.component.module.scss";
import { forwardRef, LegacyRef, RefObject } from "react";
import Caption from "../Caption/Caption.component";
import PostCardComponent from "@/components/UI/PostCardComponent/PostCardComponent.component";
import { POSTS_CONTENT } from "@/components/pages/Blog/PostSite/PostContent.data";

interface SimilarPostsProps {
  reference?: RefObject<HTMLDivElement> | boolean;
}

const SimilarPosts = forwardRef<HTMLDivElement, SimilarPostsProps>((props, ref) => {
  function getRandomIndexes(length: number, count: number): number[] {
    const indexes = new Set<number>();
    while (indexes.size < count) {
      indexes.add(Math.floor(Math.random() * length));
    }
    return Array.from(indexes);
  }

  const randomIndexes = getRandomIndexes(POSTS_CONTENT.length, 3);

  return (
    <section ref={ref as LegacyRef<HTMLDivElement>} className={s.similarPosts}>
      <Caption type="sub" value={"Podobne Posty"} />
      <div className={s.similarPosts__posts}>
        {POSTS_CONTENT.map((item, index) =>
          randomIndexes.includes(index) ? (
            <PostCardComponent
              key={item.id}
              title={item.title}
              slug={item.slug}
              description={item.description}
              author={item.author}
              postImage={item.image}
              authorImage={item.authorImage}
              date={item.date}
            />
          ) : null
        )}
      </div>
    </section>
  );
});


SimilarPosts.displayName = 'SimilarPosts';

export default SimilarPosts;
