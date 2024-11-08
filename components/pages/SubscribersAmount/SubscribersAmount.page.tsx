import CounterAnimation from "@/components/UI/CounterAnimation/CounterAnimation.component";

import s from "./SubscribersAmount.page.module.scss";
import Link from "next/link";

function SubscribersAmount() {
  return (
    <section className={s.container}>
      <article className={s.container__media}>
        <div>
          <span className={s.container__media__beforeNumber}>+</span>
          <CounterAnimation duration={3000} target={20000} />
        </div>
        <a
          href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.container__media__description}>
            Wyświetleń na YouTube
          </span>
        </a>
      </article>
      <article className={s.container__media}>
        <div>
          <span className={s.container__media__beforeNumber}>+</span>
          <CounterAnimation duration={3000} target={35} />
        </div>
        <a
          href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.container__media__description}>
            Darmowych Filmów
          </span>
        </a>
      </article>
      <article className={s.container__media}>
         <div>
          <span className={s.container__media__beforeNumber}></span>
          <CounterAnimation duration={3000} target={7} />
        </div>
        <Link href={"/"}>
          <span className={s.container__media__description}>
            Darmowych Wpisów Na Blogu
          </span>
        </Link>
      </article>
    </section>
  );
}

export default SubscribersAmount;
