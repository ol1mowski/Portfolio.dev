import Caption from "@/components/UI/Caption/Caption.component";
import s from "./HomePage.page.module.scss";

import logo from "@/assets/logo.svg";
import Description from "@/components/UI/Description/Description.component";
import Button from "@/components/UI/Button/Button.component";
import hamburger from "@/assets/hamburger.svg";
import Link from "next/link";
import Header from "@/components/UI/HeaderBlog/Header.component.page";
import AnimationWrapper from "@/components/UI/AnimationWrapper/AnimationWrapper.component";

function HomePage() {
  return (
    <section className={s.container}>
      <Header logo={logo} hamburger={hamburger} />
      <AnimationWrapper>
        <section className={s.container__content}>
          <section className={s.container__contentSection}>
            <span className={s.container__contentSection__category}>React</span>
            <Caption
              type="main"
              value="Jak zacząć się uczyć React w 2024 roku ?"
            />
            <Description
              value="Tutaj podzielę się z wami najlepszymi kursami i ksiązkami o tematyce
      tworzenia stron internetowych. Koniecznie musisz je znać"
            />
            <Link href={`/Blog/posty/jak-technologia-zmienia-branze-it`}>
              <Button type="normal" value={"Czytaj"} />
            </Link>
          </section>
        </section>
      </AnimationWrapper>
    </section>
  );
}

export default HomePage;
