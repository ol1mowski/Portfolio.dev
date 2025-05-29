import Caption from '@/components/UI/Caption/Caption.component';
import Link from 'next/link';
import s from './NotFound.page.module.scss';

function NotFound({ link, info }: { link: string; info?: string }) {
  const message = info || '404 - Nie znaleniono strony';

  return (
    <section className={s.container}>
      <Caption type="sub" value={message} /> <br />
      <a href={link} className={s.container__link}>
        Przejdź do strony głównej
      </a>
    </section>
  );
}

export default NotFound;
