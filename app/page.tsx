import Header from "@/components/UI/Header/Header.component";
import HomePage from "@/components/pages/HomePage/HomePage.page";

import About from "@/components/pages/About/About.component";
import Projects from "@/components/pages/Projects/Projects.page";
import PostsAmount from "@/components/pages/PostsAmount/PostsAmount.page";
import SubscribersAmount from "@/components/pages/SubscribersAmount/SubscribersAmount.page";
import Contact from "@/components/pages/Contact/Contact.page";
import Footer from "@/components/pages/Footer/Footer.page";
import Opinions from "@/components/pages/Opinions/Opinions.page";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <SubscribersAmount />
      <Projects />
      <PostsAmount />
      <Opinions />
      <Contact />
      <Footer />
    </>
  );
}
