import Image from "next/image";
import s from "./page.module.scss";
import ebook from "@/assets/bezplatny_ebook.svg";
import Header from "@/components/UI/Header/Header.component";
import Footer from "@/components/pages/Footer/Footer.page";
import dynamic from "next/dynamic";
import { saveClientData } from "@/actions/SaveClientEmail";

const ClientForm = dynamic(() => import("./FormComponents/Form.validation.component"), {
  ssr: false,
});

function page() {
  return (
    <>
      <Header type="out" />
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

export default page;
