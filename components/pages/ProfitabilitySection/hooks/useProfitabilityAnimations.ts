import { useMemo } from 'react';

export const useProfitabilityAnimations = () => {
  const animations = useMemo(
    () => ({
      containerVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.6,
            staggerChildren: 0.15,
          },
        },
      },
      itemVariants: {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: 'easeOut',
          },
        },
      },
      cardVariants: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        },
      },
      statVariants: {
        hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
        visible: {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          transition: {
            duration: 0.7,
            ease: 'easeOut',
          },
        },
      },
      numberVariants: (delay: number) => ({
        initial: { scale: 0, rotate: -180 },
        animate: { scale: 1, rotate: 0 },
        transition: {
          delay,
          type: 'spring',
          stiffness: 600,
          damping: 30,
        },
      }),
      iconVariants: {
        initial: { scale: 0, rotate: -90 },
        animate: { scale: 1, rotate: 0 },
        transition: {
          type: 'spring',
          stiffness: 500,
          damping: 25,
        },
      },
      hoverEffects: {
        card: {
          hover: { y: -8, scale: 1.03 },
          transition: { type: 'spring', stiffness: 400, damping: 30 },
        },
        statCard: {
          hover: { y: -10, scale: 1.05, rotateY: 5 },
          transition: { type: 'spring', stiffness: 300, damping: 25 },
        },
        icon: {
          hover: { rotate: 20, scale: 1.2 },
          transition: { type: 'spring', stiffness: 400, damping: 20 },
        },
        benefit: {
          hover: { x: 8, scale: 1.02 },
          transition: { type: 'spring', stiffness: 400, damping: 25 },
        },
      },
      checkmarkVariants: (index: number) => ({
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: {
          delay: 1 + index * 0.1,
          type: 'spring',
          stiffness: 500,
          damping: 30,
        },
      }),
    }),
    []
  );

  return animations;
};
