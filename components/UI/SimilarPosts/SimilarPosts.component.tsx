import s from "./SimilarPosts.component.module.scss";

import { forwardRef, type RefObject } from "react";


import Caption from "../Caption/Caption.component";

import authorImage from "@/assets/background_image.jpg";
import postImage from "@/assets/post_image.jpg";
import PostCardComponent from "@/components/pages/Blog/Posts/PostCardComponent/PostCardComponent.component";

interface SimilarPostsProps {
  reference: RefObject<HTMLDivElement>;
}

const SimilarPosts = forwardRef<HTMLDivElement, SimilarPostsProps>(function SimilarPosts(props, ref) {
  return (
    <section ref={ref} className={s.similarPosts}>
      <Caption type="sub" value={"Podobne Posty"} />
      <div className={s.similarPosts__posts}>
        <PostCardComponent
          title={"Jak Technologia zmienia branże IT ?"}
          slug="jak-technologia-zmienia-branze-it"
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
          author={"Oliwier Markiewicz"}
          postImage={postImage}
          authorImage={authorImage}
          date={"20 Maj 2024"}
        />
        <PostCardComponent
          title={"Jak Technologia zmienia branże IT ?"}
          slug="jak-technologia-zmienia-branze-it"
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
          author={"Oliwier Markiewicz"}
          postImage={postImage}
          authorImage={authorImage}
          date={"20 Maj 2024"}
        />{" "}
        <PostCardComponent
          title={"Jak Technologia zmienia branże IT ?"}
          slug="jak-technologia-zmienia-branze-it"
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
          author={"Oliwier Markiewicz"}
          postImage={postImage}
          authorImage={authorImage}
          date={"20 Maj 2024"}
        />
      </div>
    </section>
  );
});

export default SimilarPosts;
