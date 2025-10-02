import TypingReplaceAnimation from '@/components/UI/TypingRepleaceAnimation/TypingRepleaceAnimation.component';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';
import s from './HeroHeader.component.module.scss';

function HeroHeader() {
  const t = useOptimizedTranslations('hero');

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
