import s from "./page.module.scss";

import Footer from "@/components/pages/Footer/Footer.page";
import Button from "@/components/UI/Button/Button.component";
import Header from "@/components/pages/Header/Header.component";

import { redirect } from "next/navigation";
import { validateSession } from "@/lib/auth";

type ContentType = {
  description: string;
  buttonText: string;
  downloadPath: string;
};

const getContentByType = (type: string): ContentType | null => {
  const content: Record<string, ContentType> = {
    note: {
      description: "Twoja notatka jest dostępna do pobrania poniżej",
      buttonText: "Pobierz notatkę",
      downloadPath: "/Notatka_JavaScript.pdf"
    },
    ebook: {
      description: "Twój E-Book jest dostępny do pobrania poniżej",
      buttonText: "Pobierz E-Book",
      downloadPath: "/Praktyczne_Porady_Na_Co_Zwrócić_Uwagę_Podczas_Projektowania_Strony_Internetowej.pdf"
    }
  };
  
  return content[type] || null;
};

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { session } = await validateSession();
  
  if (!session) {
    redirect("/");
  }
  
  const { name } = session;
  const content = getContentByType(id.toLowerCase());

  if (!content) {
    redirect("/404");
  }

  const { description, buttonText, downloadPath } = content;

  return (
    <>
      <Header />
      <section className={s.container}>
        <h1 className={s.container__header}>
          Dziękuję {name}!
        </h1>
        <p className={s.container__text}>
          {description}
        </p>
        <a href={downloadPath} download>
          <Button type="normal" value={buttonText} />
        </a>
      </section>
      <Footer />
    </>
  );
};

export default Page;