import Image from "next/image";
import s from "./page.module.scss";

import Footer from "@/components/pages/Footer/Footer.page";
import Header from "@/components/pages/Header/Header.component";

import dynamic from "next/dynamic";
import { saveClientData } from "@/actions/SaveClientEmail";
import { validateSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const ClientForm = dynamic(
  () => import("../../../components/Utils/FormComponents/Form.validation.component")
);

async function page() {
  const { session } = await validateSession();

  if (session) {
    redirect("/Thanks/ebook");
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
            <ClientForm action={saveClientData} slug="ebook" />
          </section>
        </section>
        <section className={s.container__image}>
          <Image
            src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1731069228/Portfolio/images/bezplatny_ebook_z6eetq.webp"
            className={s.container__image__img}
            alt="bezpłatny ebook projektowanie stron internetowych"
            width={500}
            height={600}
            priority
          />
        </section>
      </section>
      <Footer />
    </>
  );
}

export default page;
