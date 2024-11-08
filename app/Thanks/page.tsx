import Footer from "@/components/pages/Footer/Footer.page";
import s from "./page.module.scss";
import Button from "@/components/UI/Button/Button.component";
import { redirect } from "next/navigation";
import { validateSession } from "@/lib/auth";
import Head from "next/head";
import Header from "@/components/pages/Header/Header.component";

const page = async () => {
  const { session } = await validateSession();

  if (!session) {
    redirect("/Ebook");
  }

  return (
    <>
      <Header />
      <section className={s.container}>
        <h1 className={s.container__header}>Dziękuję {session.name}!</h1>
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
};

export default page;
