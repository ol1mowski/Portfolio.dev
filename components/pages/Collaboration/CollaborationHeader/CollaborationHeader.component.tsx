import { memo } from 'react';
import s from './CollaborationHeader.component.module.scss';

const CollaborationHeader = memo(() => {
  return (
    <header className={s.contentSection}>
      <h2 className={s.contentSection__h3}>WSPÓŁPRACA</h2>
      <p className={s.contentSection__h4}>
        Zobacz Etapy Współpracy Ze Mną
      </p>
    </header>
  );
});

CollaborationHeader.displayName = 'CollaborationHeader';

export default CollaborationHeader;
