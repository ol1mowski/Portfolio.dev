"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingReplaceAnimation = ({ className }: { className: string }) => {
  const texts = ["Stron Internetowych", "Sklepów Internetowych"];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;

    const typeText = () => {
      const fullText = texts[currentIndex];

      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
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
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }, 100);

      return () => clearInterval(deletingInterval);
    }
  }, [isDeleting, displayText, texts]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <span className={className}>{displayText}</span>
    </motion.div>
  );
};

export default TypingReplaceAnimation;
