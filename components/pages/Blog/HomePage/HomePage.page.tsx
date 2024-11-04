import s from "./HomePage.page.module.scss";


import Caption from "@/components/UI/Caption/Caption.component";
import Description from "@/components/UI/Description/Description.component";
import Button from "@/components/UI/Button/Button.component";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";

import { type PostsType } from "@/types/PostType.type";
import Header from "../HeaderBlog/Header.component.page";

function HomePageComponent({ posts }: { posts: PostsType[] }) {
  const lastPost = posts[posts.length - 1];

  return (
    <section className={s.container}>
      <Header />
      <AnimationWrapper>
        <section className={s.container__content}>
          <section className={s.container__contentSection}>
            <span className={s.container__contentSection__category}>
              {lastPost.category}
            </span>
            <Caption type="main" value={lastPost.title} />
            <Description value={lastPost.description} />
            <a href={`/Blog/posty/${lastPost.slug}`}>
              <Button type="normal" value={"Czytaj"} />
            </a>
          </section>
        </section>
      </AnimationWrapper>
    </section>
  );
}

export default HomePageComponent;
