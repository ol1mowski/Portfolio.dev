'use client';

import { useEffect, useState, useMemo } from 'react';
import { useOptimizedTranslations } from '@/hooks/useOptimizedTranslations.hook';

const TypingReplaceAnimation = ({ className }: { className: string }) => {
  const t = useOptimizedTranslations('hero');
  const texts = useMemo(
    () => [
      t('animatedTexts.apps'),
      t('animatedTexts.websites'),
      t('animatedTexts.shops'),
      t('animatedTexts.graphics'),
    ],
    [t]
  );

  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(
          () => {
            setDisplayText(currentText.substring(0, displayText.length + 1));
          },
          80 + Math.random() * 40
        );

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);

        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(
          () => {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          },
          50 + Math.random() * 30
        );

        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);

        if (currentIndex + 1 === texts.length) {
          setIsFinished(true);
        } else {
          setCurrentIndex(prev => prev + 1);
        }
      }
    }
  }, [displayText, currentIndex, isDeleting, texts]);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsDeleting(false);
    setIsFinished(false);
  }, [texts]);

  if (isFinished) {
    return (
      <div>
        <span className={className}>{t('animatedTexts.apps')}</span>
      </div>
    );
  }

  return (
    <div>
      <span className={className}>
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
};

export default TypingReplaceAnimation;
