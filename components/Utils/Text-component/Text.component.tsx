'use client';

import { useEffect, useState } from 'react';

function Text({ textValue }: { textValue: string }) {
  const text = textValue;

  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(() => text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);
  return displayedText;
}

export default Text;
