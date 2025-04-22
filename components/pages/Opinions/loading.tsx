import { FC, memo } from 'react';
import s from './loading.module.scss';
import { OPINIONS_LOADING_ARIA_LABEL, OPINIONS_LOADING_TEXT } from './constants/opinions.constants';

export const Loading: FC = memo(() => {
  return (
    <div className={s.loadingContainer} role="status" aria-label={OPINIONS_LOADING_ARIA_LABEL}>
      {[1, 2, 3].map(index => (
        <div key={index} className={s.skeleton} aria-hidden="true" />
      ))}
      <span className="sr-only">{OPINIONS_LOADING_TEXT}</span>
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;
