import { Variants, delay } from "framer-motion";
import { skills } from "./constants";

export const skillListContainer = {
  default: {
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
  selected: {
    opacity: 0,
    transition: {
      type: "spring",
    },
  },
};

export const skillContainer = {
  default: {
    display: "none",
    opacity: 0,
    // y: 100,
    transition: {
      type: "spring",
      // duration: 0.5,
      velocity: 1.5,
    },
  },
  selected: {
    display: "flex",
    opacity: 1,
    // y: 0,
    transition: {
      type: "spring",
      // duration: 0.5,
      delay: 0.5,
    },
  },
};

export const footerSpecialAnimations: { skills: Variants } = {
  skills: {
    default: {
      scale: 1,
      // y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        // bounce: 0.1,
        // duration: 1.2,
        stiffness: 50,
        damping: 20,
      },
    },
    selected: {
      scale: 160,
      // scale: [0, 10, 20],
      // y: -2000,
      opacity: 0,
      transition: {
        type: "spring",
        // stiffness: 30,
        dumping: 20,
        bounce: 0.05,
        duration: 1.5,
      },
    },
  },
};

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
    transition: { type: "spring", damping: 10, stiffness: 150 },
  },
  hover: {
    pathLength: 0.85,
    rotate: 120,
    stroke: "#D60C4E",
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
    color: "#D60C4E",
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
