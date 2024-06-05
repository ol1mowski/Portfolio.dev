import Header from "@/components/UI/Header/Header.component";
import HomePage from "@/components/pages/HomePage/HomePage.page";

import About from "@/components/pages/About/About.component";
import Projects from "@/components/pages/Projects/Projects.page";
import PostsAmount from "@/components/pages/PostsAmount/PostsAmount.page";
import SubscribersAmount from "@/components/pages/SubscribersAmount/SubscribersAmount.page";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <SubscribersAmount />
      <Projects />
      <PostsAmount />
    </>
  );
}
