"use client";

import { useEffect, useState } from "react";

const TypingReplaceAnimation = ({ className }: { className: string }) => {
  const texts = ["Stron Internetowych", "Sklepów Internetowych", "Projektów Graficznych"];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false); 

  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;

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

    typingInterval = setInterval(typeText, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  useEffect(() => {
    if (isDeleting) {
      const deletingInterval = setInterval(() => {
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          clearInterval(deletingInterval);
          setIsDeleting(false);

          if (currentIndex + 1 === texts.length) {
            setIsFinished(true);
          } else {
            setCurrentIndex((prevIndex) => prevIndex + 1); 
          }
        }
      }, 100);

      return () => clearInterval(deletingInterval);
    }
  }, [isDeleting, displayText, currentIndex]);

  if (isFinished) {
    return (
      <div>
        <span className={className}>Stron Internetowych</span>
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
