export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.7,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "-100vw",
    scale: 1.3,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};
