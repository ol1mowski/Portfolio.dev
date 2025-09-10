'use client';

import { useEffect, useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';

const TypingReplaceAnimation = ({ className }: { className: string }) => {
  const t = useTranslations('hero.animatedTexts');

  const texts = useMemo(() => [t('websites'), t('shops'), t('graphics')], [t]);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      const fullText = texts[currentIndex];

      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setIsDeleting(true), 1000);
      }
    };

    const typingInterval = setInterval(typeText, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex, texts]);

  useEffect(() => {
    if (isDeleting) {
      const deletingInterval = setInterval(() => {
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          clearInterval(deletingInterval);
          setIsDeleting(false);

          if (currentIndex + 1 === texts.length) {
            setIsFinished(true);
          } else {
            setCurrentIndex(prevIndex => prevIndex + 1);
          }
        }
      }, 100);

      return () => clearInterval(deletingInterval);
    }
  }, [isDeleting, displayText, currentIndex, texts.length]);

  if (isFinished) {
    return (
      <div>
        <span className={className}>{t('websites')}</span>
      </div>
    );
  }
  return (
    <div>
      <span className={className}>{displayText}</span>
    </div>
  );
};

export default TypingReplaceAnimation;
