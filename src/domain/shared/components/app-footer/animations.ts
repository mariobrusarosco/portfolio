import { Variants } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";

const outerCircle: Variants = {
  default: {
    strokeWidth: 1,
    pathLength: 1,
    stroke: "grey",
    rotate: 120,
    transformOrigin: "center",
    transition: { type: "spring", damping: 10, stiffness: 150 },
  },
  hover: {
    strokeWidth: 1,
    pathLength: 0.85,
    rotate: 120,
    stroke: "#D60C4E",
    transformOrigin: "center",
    transition: { type: "spring", damping: 10, stiffness: 150 },
  },
};

const labelAnimation: Variants = {
  default: {
    x: "-50%",
    left: "50%",
    opacity: 0,
  },
  hover: {
    visibility: "visible",
    opacity: 1,
    y: -60,
    transition: {
      type: "spring",
      //A
      damping: 10,
      stiffness: 150,
      // B
      // damping: 12,
      // stiffness: 100,
    },
    color: "#D60C4E",
  },
};

const innerCircle: Variants = {
  default: {
    y: "-50%",
    x: "-50%",
  },
  hover: {
    y: -45,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
    },
    backgroundColor: "#D60C4E",
  },
};

const animations = {
  menu: {
    outerCircle,
    innerCircle,
    label: labelAnimation,
  },
};

export default animations;
