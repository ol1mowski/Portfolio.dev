"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

function Paragraph({ value, className }: { value: string; className: string }) {
  const element = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  const paragraphOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.span ref={element} style={{ opacity: paragraphOpacity }}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            className={className}
            key={i}
            range={[start, end]}
            progress={scrollYProgress}
          >
            {word + " "}
          </Word>
        );
      })}
    </motion.span>
  );
}

export default Paragraph;

const Word = ({
  children,
  range,
  progress,
  className,
}: {
  children: ReactNode;
  className: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [20, 0]);

  return (
    <motion.span className={className} style={{ opacity, y }}>
      {children}
    </motion.span>
  );
};
