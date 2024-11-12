import { memo } from 'react';
import s from './loading.module.scss';

const Loading = memo(() => {
  return (
    <div 
      className={s.loadingContainer} 
      role="status"
      aria-label="Ładowanie opinii"
    >
      {[1, 2, 3].map((index) => (
        <div 
          key={index} 
          className={s.skeleton} 
          aria-hidden="true"
        />
      ))}
      <span className="sr-only">Ładowanie opinii...</span>
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading; 