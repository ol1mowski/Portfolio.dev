import Caption from "@/components/UI/Caption/Caption.component";
import Link from "next/link";
import s from './NotFound.page.module.scss';

function NotFound() {
  return (
    <section className={s.container}>
      <Caption type="sub" value="404 - Nie znaleniono strony" />
      <Link href={"/"} className={s.container__link}>Przejdź do strony głównej</Link>
    </section>
  );
}

export default NotFound;
