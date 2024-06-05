import Header from "@/components/UI/Header/Header.component";
import HomePage from "@/components/pages/HomePage/HomePage.page";
import InfoBar from "@/components/pages/InfoBar/InfoBar.page";
import About from "@/components/pages/About/About.component";
import Projects from "@/components/pages/Projects/Projects.page";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <InfoBar />
      <Projects />
    </>
  );
}
