import Header from "@/components/UI/Header/Header.component";
import Footer from "@/components/pages/Footer/Footer.page";
import s from "./page.module.scss";
import Button from "@/components/UI/Button/Button.component";
import { redirect } from "next/navigation";

const Thanks = () => {
  const userEmail = true;

  if (userEmail) {
    return (
      <>
        <Header type="out" />
        <section className={s.container}>
          <h1 className={s.container__header}>Dziękuję</h1>
          <p className={s.container__text}>
            Twój E-Book jest dostępny do pobrania poniżej
          </p>
          <a href="/ebook.pdf" download>
            <Button type="normal" value="Pobierz E-Book" />
          </a>
        </section>
        <Footer />
      </>
    );
  } else {
    redirect("/");
  }
};

export default Thanks;