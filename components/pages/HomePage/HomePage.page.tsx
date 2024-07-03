import s from "./HomePage.page.module.scss";

import TechStack from "../../UI/techStack/techStack.component";
import HomePageInfo from "../../UI/HomePageInfo/HomePageInfoSection.component";

import img from "@/assets/new_main.svg";
import HomePageImageSection from "../../UI/HomePageImageSection/HomePageImageSection.component";

function HomePage() {
  return (
    <section id="home" className={s.homeContainer}>
      <section className={s.homeContainer__infoSection}>
        <HomePageImageSection img={img} />
        <HomePageInfo />
      </section>
      <TechStack />
    </section>
  );
}

export default HomePage;
