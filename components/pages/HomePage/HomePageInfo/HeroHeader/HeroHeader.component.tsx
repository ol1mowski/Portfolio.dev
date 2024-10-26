import TypingReplaceAnimation from '@/components/UI/TypingRepleaceAnimation/TypingRepleaceAnimation.component';
import s from './HeroHeader.component.module.scss';

function HeroHeader() {
  return (
    <h1 className={s.h1}>
      Twórca Nowoczesnych
      <br />
      <span className={s.h1__underText}>
        <TypingReplaceAnimation className={s.h1} />
        <span className={s.h1__underText__decoration}></span>
      </span>
    </h1>
  );
}

export default HeroHeader;
