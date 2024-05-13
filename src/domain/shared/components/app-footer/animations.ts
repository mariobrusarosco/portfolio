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
    display: "flex",
    transition: {
      staggerChildren: 0.1,
      type: "spring",
    },
  },
  hidden: {
    display: "none",
    transition: {
      staggerChildren: -0.1,
      type: "spring",
      when: "afterChildren",
    },
  },
};

const outerCircle: Variants = {
  default: {
    pathLength: 1,
    rotate: 120,
    originX: "50%",
    originY: "50%",
    stroke: "var(--active-primary)",
    transition: { type: "spring", damping: 10, stiffness: 150 },
  },
  hover: {
    pathLength: 0.85,
    rotate: 120,
    stroke: "gold",
    transition: { type: "spring", damping: 10, stiffness: 150 },
  },
};

const label: Variants = {
  hidden: {
    opacity: 0,
    visibility: "hidden",
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
      color: {
        duration: 0.3,
      },
    },
    color: "var(--active-primary)",
  },
};

const innerCircle: Variants = {
  default: {
    y: "-50%",
    x: "-50%",
    backgroundColor: "var(--active-primary)",
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
    backgroundColor: "gold",
  },
};

const trigger = {
  hover: {
    letterSpacing: "0.4em",
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 200,
      damping: 10,
      color: {
        duration: 0.2,
      },
    },
    color: "var(--active-primary)",
  },
};

const stem: Variants = {
  visible: {
    pathLength: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
    },
  },
  hidden: {
    pathLength: 0,
  },
};

const animations = {
  menu: {
    stem,
    trigger,
    list,
    listItem,
    outerCircle,
    innerCircle,
    label,
  },
};

export default animations;
