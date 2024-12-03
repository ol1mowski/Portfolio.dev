import Image from "next/image";
import s from "./page.module.scss";

import Footer from "@/components/pages/Footer/Footer.page";
import Header from "@/components/pages/Header/Header.component";

import dynamic from "next/dynamic";
import { saveClientData } from "@/actions/SaveClientEmail";
import { validateSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const ClientForm = dynamic(
  () => import("@/app/Ebook/FormComponents/Form.validation.component"),
  {
    ssr: false,
  }
);

async function page() {
  const { session } = await validateSession();

  if (session) {
    redirect("/Thanks/note");
  }

  return (
    <>
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
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732810234/Portfolio/images/notakta_cbzgxr.webp"
            className={s.container__image__img}
            alt="bezpłatne notatki z JavaScript"
            width={300}
            height={420}
          />
        </section>
      </section>
      <Footer />
    </>
  );
}

export default page;
