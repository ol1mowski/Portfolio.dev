'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

type AnimationWrapperProps = {
  children: ReactNode;
  className?: string;
};

function AnimationWrapper({ children, className }: AnimationWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px',
    fallbackInView: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariants}
      className={className}
      style={{ position: 'relative', display: 'block' }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationWrapper;
