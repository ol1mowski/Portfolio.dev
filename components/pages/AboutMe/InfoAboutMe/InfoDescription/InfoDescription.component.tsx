import s from './InfoDescription.component.module.scss';

import { memo } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import Paragraph from '@/components/UI/Word/Paragraph.component';

const InfoDescription = memo(() => {
  const locale = useLocale();
  const t = useTranslations('aboutMe');
  return (
    <section className={s.desWrapper}>
      <p className={s.desWrapper__des}>
        <Paragraph value={t('description')} className={s.desWrapper__des} />
        <span className={s.importantTextDecorate}>Node.js</span>,{' '}
        <span className={s.importantTextDecorate}>React</span> czy{' '}
        <span className={s.importantTextDecorate}>WordPress</span>
        <Paragraph value={t('descriptionEnd')} className={s.desWrapper__des} />
      </p>
      <Paragraph value={t('helpDescription')} className={s.desWrapper__des} />
      <p className={s.desWrapper__des}>
        <Paragraph value={t('blogText')} className={s.desWrapper__des} />
        <a href={`/${locale}/Blog`} aria-label={t('blogLabel')}>
          <span className={s.importantTextDecorate}>Bloga</span>
        </a>
        <Paragraph value={` ${t('youtubeText')} `} className={s.desWrapper__des} />
        <a
          href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('youtubeLabel')}
        >
          <span className={s.importantTextYtDecorate}>YouTube</span>
        </a>
        <Paragraph value={` ${t('finalDescription')}`} className={s.desWrapper__des} />
      </p>
    </section>
  );
});

InfoDescription.displayName = 'InfoDescription';

export default InfoDescription;
