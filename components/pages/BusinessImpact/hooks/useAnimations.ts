import { useMemo } from 'react';

export const useAnimations = () => {
  const animations = useMemo(
    () => ({
      containerVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.6,
            staggerChildren: 0.2,
          },
        },
      },
      itemVariants: {
        hidden: { opacity: 0, y: 30 },
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
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        },
      },
      badgeVariants: {
        initial: { scale: 0 },
        animate: { scale: 1 },
        transition: {
          delay: 0.8,
          type: 'spring',
          stiffness: 500,
          damping: 30,
        },
      },
      numberVariants: (delay: number) => ({
        initial: { scale: 0 },
        animate: { scale: 1 },
        transition: {
          delay,
          type: 'spring',
          stiffness: 500,
          damping: 30,
        },
      }),
      hoverEffects: {
        card: {
          hover: { y: -5, scale: 1.02 },
          transition: { type: 'spring', stiffness: 300, damping: 30 },
        },
        mainOffer: {
          hover: { scale: 1.02 },
          transition: { type: 'spring', stiffness: 300, damping: 30 },
        },
        icon: {
          hover: { rotate: 15 },
          transition: { type: 'spring', stiffness: 400, damping: 25 },
        },
        feature: {
          hover: { x: 10 },
          transition: { type: 'spring', stiffness: 400, damping: 25 },
        },
      },
    }),
    []
  );

  return animations;
};
