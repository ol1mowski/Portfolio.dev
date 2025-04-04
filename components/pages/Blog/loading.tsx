'use client';

import { type FC } from 'react';

export const Loading: FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner" />
      <p>Ładowanie...</p>
    </div>
  );
};

export default Loading;
