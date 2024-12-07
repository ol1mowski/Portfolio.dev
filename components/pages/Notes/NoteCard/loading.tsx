import s from './loading.module.scss';

import { memo } from 'react';

const Loading = memo(() => {
  return (
    <div 
      className={s.loadingContainer} 
      role="status"
      aria-label="Ładowanie notatek"
    >
      <div className={s.skeleton} aria-hidden="true" />
      <span className="sr-only">Ładowanie...</span>
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading; 