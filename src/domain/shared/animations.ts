export const screens = {
  heading: {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 150,
      },
    },
  },
};
