import Paragraph from "@/components/UI/Word/Paragraph.component";
import s from "./InfoDescription.component.module.scss";
import Link from "next/link";

function InfoDescription() {
  return (
    <section className={s.desWrapper}>
      <p className={s.desWrapper__des}>
        <Paragraph
          value="Zajmuję się projektowaniem oraz tworzeniem nowoczesnych i
            funkcjonalnych stron, sklepów i aplikacji internetowych w
            technologiach takich jak"
          className={s.desWrapper__des}
        />
        <span className={s.importantTextDecorate}>Webflow</span> ,
        <span className={s.importantTextDecorate}>Next.js</span> czy{" "}
        <span className={s.importantTextDecorate}>WordPress</span>
        <Paragraph
          value=", które spełniają indywidualne potrzeby klientów."
          className={s.desWrapper__des}
        />
      </p>{" "}
      <Paragraph
        value="Pomagam małym firmom zaistnieć w internecie, poprzez Pozycjonowanie
            wizytówki Google Moja Firma ,które zwiększają widoczność i przyciąga
            nowych klientów."
        className={s.desWrapper__des}
      />
      <p className={s.desWrapper__des}>
        <Paragraph value="Prowadzę również " className={s.desWrapper__des} />
        <Link href="/Blog">
          <span className={s.importantTextDecorate}>Bloga</span>
        </Link>
        <Paragraph value=" oraz kanał na " className={s.desWrapper__des} />
        <a
          href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.importantTextYtDecorate}>YouTube</span>
        </a>
        <Paragraph
          value=" gdzie dzielę się wiedzą z zakresu programowania oraz tworzenia
            stron internetowych. "
          className={s.desWrapper__des}
        />
         
      </p>
    </section>
  );
}

export default InfoDescription;