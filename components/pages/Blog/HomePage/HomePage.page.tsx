import s from "./HomePage.page.module.scss";

import Link from "next/link";

import Caption from "@/components/UI/Caption/Caption.component";
import Description from "@/components/UI/Description/Description.component";
import Button from "@/components/UI/Button/Button.component";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";

import logo from "@/assets/logo.svg";
import hamburger from "@/assets/hamburger.svg";

import { type PostsType } from "@/types/PostType";
import Header from "@/components/UI/HeaderBlog/Header.component.page";

function HomePageComponent({ posts }: { posts: PostsType[] }) {
  const lastPost = posts[posts.length - 1];

  return (
    <section className={s.container}>
      <Header logo={logo} hamburger={hamburger} />
      <AnimationWrapper>
        <section className={s.container__content}>
          <section className={s.container__contentSection}>
            <span className={s.container__contentSection__category}>
              {lastPost.category}
            </span>
            <Caption type="main" value={lastPost.title} />
            <Description value={lastPost.description} />
            <Link href={`/Blog/posty/${lastPost.slug}`}>
              <Button type="normal" value={"Czytaj"} />
            </Link>
          </section>
        </section>
      </AnimationWrapper>
    </section>
  );
}

export default HomePageComponent;
