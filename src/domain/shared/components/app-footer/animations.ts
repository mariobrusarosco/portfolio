import { Variants } from "framer-motion";
import { before } from "node:test";
import { exit } from "process";

const listItem = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const list = {
  visible: {
    // display: "flex",
    visibility: "visible",
    transition: {
      staggerChildren: 0.1,
      type: "spring",
    },
  },
  hidden: {
    // display: "none",
    visibility: "hidden",
    transition: {
      staggerChildren: 0.05,
      type: "spring",
      when: "afterChildren",
    },
  },
};

const outerCircle: Variants = {
  default: {
    pathLength: 1,
    stroke: "grey",
    rotate: 120,
    transformOrigin: "center",
    transition: { type: "spring", damping: 10, stiffness: 150 },
  },
  hover: {
    pathLength: 0.85,
    rotate: 120,
    stroke: "#D60C4E",
    transformOrigin: "center",
    transition: { type: "spring", damping: 10, stiffness: 150 },
  },
};

const label: Variants = {
  hidden: {
    // x: "-50%",
    // left: "50%",
    opacity: 0,
    visibility: "hidden",
  },
  hover: {
    visibility: "visible",
    opacity: 1,
    y: -60,
    // backgroundColor: "#D60C4E",
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
    list,
    listItem,
    outerCircle,
    innerCircle,
    label,
  },
};

export default animations;
