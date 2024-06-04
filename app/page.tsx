import Header from "@/components/UI/Header/Header.component";
import HomePage from "@/components/pages/HomePage/HomePage.page";
import InfoBar from "@/components/pages/InfoBar/InfoBar.page";
import About from "@/components/pages/about/About.component";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <InfoBar />
    </>
  );
}
