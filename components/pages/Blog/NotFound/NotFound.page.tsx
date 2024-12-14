import Caption from "@/components/UI/Caption/Caption.component";
import Link from "next/link";
import s from "./NotFound.page.module.scss";
import Header from "../HeaderBlog/Header.component.page";

function NotFound({ link, info }: { link: string; info?: string }) {
  const message = info || "404 - Nie znaleniono strony";

  return (
      <section className={s.container}>
        <Caption type="sub" value={message} /> <br />
        <Link href={link} className={s.container__link}>
          Przejdź do strony głównej
        </Link>
      </section>
  );
}

export default NotFound;
