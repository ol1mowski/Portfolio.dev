import NotFound from "@/components/pages/Blog/NotFound/NotFound.page";
import Header from "@/components/pages/Header/Header.component";
import Footer from "@/components/pages/Footer/Footer.page";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <NotFound link="/" info="404 - Nie znaleziono strony" />
      <Footer />
    </>
  );
} 