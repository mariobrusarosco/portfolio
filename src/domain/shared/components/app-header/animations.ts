import { Variants } from "framer-motion";

const circle: Variants = {
  hover: {
    backgroundColor: "rgb(var(--light-green))",
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
    },
  },
};

const label: Variants = {
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

const homeLink: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  default: {
    opacity: 1,
    y: 0,
  },
  hover: {
    letterSpacing: "0.4em",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

const socialItem: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  default: {
    opacity: 1,
    y: 0,
  },
  hover: {
    y: -10,
    scale: 1.1,
    transition: {
      type: "spring",
    },
  },
};

const animations = {
  circle,
  label,
  socialItem,
  homeLink,
};

const formatRGB = (color: string) => {
  const [r, g, b] = color.split(" ");

  return `rgb(${r}, ${g}, ${b})`;
};

export default animations;
