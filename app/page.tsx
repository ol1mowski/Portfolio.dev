import HomePage from "@/components/pages/HomePage/HomePage.page";

import SubscribersAmount from "@/components/pages/Stats/Stats.page";
import Contact from "@/components/pages/Contact/Contact.page";
import Footer from "@/components/pages/Footer/Footer.page";
import Opinions from "@/components/pages/Opinions/Opinions.page";
import ProjectsDataProvider from "@/components/pages/Projects";
import { Ebook } from "@/components/pages/EBook/Ebook.page";
import AbourMe from "@/components/pages/AboutMe/AbouMe.page";
import Services from "@/components/pages/Services/Services.page";
import CursorShadow from "@/components/UI/CursorShadow/CursorShadow.component";
import Header from "@/components/pages/Header/Header.component";
import Collaboration from "@/components/pages/Collaboration/Collaboration.page";

export default function Home() {
  return (
    <>
      <CursorShadow />
      <Header />
      <HomePage />
      <Ebook />
      <AbourMe />
      <Services />
      <SubscribersAmount />
      {/* @ts-expect-error Async Server Component */}
      <ProjectsDataProvider />
      {/* @ts-expect-error Async Server Component */}
      <Opinions />
      <Collaboration />
      <Contact />
      <Footer />
    </>
  );
}
