import TypingReplaceAnimation from '@/components/UI/TypingRepleaceAnimation/TypingRepleaceAnimation.component';
import { useTranslations } from 'next-intl';
import s from './HeroHeader.component.module.scss';

function HeroHeader() {
  const t = useTranslations('hero');

  return (
    <h1 className={s.h1}>
      {t('title')}
      <br />
      <span className={s.h1__underText}>
        <TypingReplaceAnimation className={s.h1} />
        <span className={s.h1__underText__decoration}></span>
      </span>
    </h1>
  );
}

export default HeroHeader;
