import Caption from "@/components/UI/Caption/Caption.component";
import s from "./HomePage.page.module.scss";

import logo from "@/assets/logo.svg";
import Description from "@/components/UI/Description/Description.component";
import Button from "@/components/UI/Button/Button.component";
import hamburger from "@/assets/hamburger.svg";
import Link from "next/link";
import Header from "@/components/UI/HeaderBlog/Header.component.page";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";
import { POSTS_CONTENT } from "../PostSite/PostContent.data";

function HomePage() {
  const lastPost = POSTS_CONTENT[POSTS_CONTENT.length - 1];

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
            <Description
              value={lastPost.description}
            />
            <Link href={`/Blog/posty/${lastPost.slug}`}>
              <Button type="normal" value={"Czytaj"} />
            </Link>
          </section>
        </section>
      </AnimationWrapper>
    </section>
  );
}

export default HomePage;
