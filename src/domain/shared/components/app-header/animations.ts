import { Variants } from "framer-motion";

export const circleAnimation: Variants = {
  hover: {
    backgroundColor: "rgb(var(--light-green))",
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
    },
  },
};

export const labelAnimation: Variants = {
  hover: {
    visibility: "visible",
    opacity: 1,
    y: -100,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
    },
  },
};

export const stemAnimation: Variants = {
  hover: {
    y: -50,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
    },

    backgroundColor: "rgb(var(--light-green))",
  },
};
