import { Variants } from "framer-motion";

const circleAnimation: Variants = {
  hover: {
    backgroundColor: "rgb(var(--light-green))",
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
    },
  },
};

const labelAnimation: Variants = {
  hover: {
    visibility: "visible",
    opacity: 1,
    y: -80,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
    },
  },
};

const stemAnimation: Variants = {
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

const animations = {
  desktopHeader: {
    stem: stemAnimation,
    circle: circleAnimation,
    label: labelAnimation,
  },
};

export default animations;
