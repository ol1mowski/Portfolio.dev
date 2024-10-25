import Image from "next/image";
import s from "./page.module.scss";
import ebook from "@/assets/bezplatny_ebook.webp";
import Footer from "@/components/pages/Footer/Footer.page";
import dynamic from "next/dynamic";
import { saveClientData } from "@/actions/SaveClientEmail";
import { validateSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Head from "next/head";
import Header from "@/components/pages/Header/Header.component";

const ClientForm = dynamic(
  () => import("./FormComponents/Form.validation.component"),
  {
    ssr: false,
  }
);

async function page() {
  const result = await validateSession();
  console.log(result.session);

  if (result.session?.session === null) {
    redirect("/Thanks");
  } else {
    return (
      <>
        <Head>
          <title>E-Book</title>
          <meta
            name="description"
            content="E-Book o Tworzeniu Stron Internetowych"
          />
        </Head>
        <Header />
        <section className={s.container}>
          <section className={s.container__content}>
            <section className={s.container__content__header}>
              <h2 className={s.container__content__header__title}>
                Jeszcze Tylko Jeden Krok
              </h2>
              <span className={s.container__content__header__line}></span>
            </section>
            <section className={s.container__form}>
              <ClientForm action={saveClientData} />
            </section>
          </section>
          <section className={s.container__image}>
            <Image
              src={ebook}
              className={s.container__image__img}
              alt="bezpłatny ebook projektowanie stron internetowych"
              width={500}
              height={600}
            />
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

export default page;
