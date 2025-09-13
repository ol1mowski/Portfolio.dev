import s from './InfoDescription.component.module.scss';

import { memo } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

import Paragraph from '@/components/UI/Word/Paragraph.component';

const InfoDescription = memo(() => {
  const locale = useLocale();
  return (
    <section className={s.desWrapper}>
      <p className={s.desWrapper__des}>
        <Paragraph
          value="Zajmuję się projektowaniem oraz tworzeniem nowoczesnych i
            funkcjonalnych stron, sklepów i aplikacji internetowych w
            technologiach takich jak"
          className={s.desWrapper__des}
        />
        <span className={s.importantTextDecorate}>Node.js</span>,{' '}
        <span className={s.importantTextDecorate}>React</span> czy{' '}
        <span className={s.importantTextDecorate}>WordPress</span>
        <Paragraph
          value=", które spełniają indywidualne potrzeby klientów."
          className={s.desWrapper__des}
        />
      </p>
      <Paragraph
        value="Pomagam małym firmom zaistnieć w internecie, poprzez Pozycjonowanie
            wizytówki Google Moja Firma, które zwiększają widoczność i przyciąga
            nowych klientów."
        className={s.desWrapper__des}
      />
      <p className={s.desWrapper__des}>
        <Paragraph value="Prowadzę również " className={s.desWrapper__des} />
        <a href={`/${locale}/Blog`} aria-label="Przejdź do bloga">
          <span className={s.importantTextDecorate}>Bloga</span>
        </a>
        <Paragraph value=" oraz kanał na " className={s.desWrapper__des} />
        <a
          href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Przejdź do kanału YouTube"
        >
          <span className={s.importantTextYtDecorate}>YouTube</span>
        </a>
        <Paragraph
          value=" gdzie dzielę się wiedzą z zakresu programowania oraz tworzenia
            stron internetowych."
          className={s.desWrapper__des}
        />
      </p>
    </section>
  );
});

InfoDescription.displayName = 'InfoDescription';

export default InfoDescription;
