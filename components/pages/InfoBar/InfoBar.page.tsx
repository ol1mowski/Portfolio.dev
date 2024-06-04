import s from "./InfoBar.page.module.scss";

function InfoBar() {
  return (
    <section className={s.container}>
      <span className={s.container__content}>
        Blisko <span className={s.container__content__amount}>100</span>{" "}
        Subskrybentów na kanale{" "}
        <a
          href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.container__content__amount}>YouTube</span>
        </a>
      </span>
    </section>
  );
}

export default InfoBar;
