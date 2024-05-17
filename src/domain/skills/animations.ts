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
    // display: "none",
    opacity: 0,
    // y: 100,
    zIndex: -1,
    transition: {
      type: "spring",
      // duration: 2,
      // velocity: 1.5,
    },
  },
  selected: {
    zIndex: 1,
    // display: "flex",
    opacity: 1,
    // y: 0,
    transition: {
      type: "spring",
      duration: 1,
      // delay: 0.25,
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

const listOfSkills: Variants = {
  visible: {
    // display: "flex",
    // transition: {
    //   staggerChildren: 0.1,
    //   type: "spring",
    // },
  },
  hidden: {
    // opacity: 0.5,
    // display: "none",
    // transition: {
    //   staggerChildren: -0.1,
    //   type: "spring",
    //   when: "afterChildren",
    // },
  },
  // selected: {
  //   opacity: 0.05,
  // display: "none",
  // transition: {
  //   staggerChildren: -0.1,
  //   type: "spring",
  //   when: "afterChildren",
  // },
  // },
};

export const selectedKnowledgeOuterCircle: Variants = {
  default: {
    opacity: 1,
    scale: 1,
    // visibility: "visible",
    transition: {
      type: "spring",
      stiffness: 55,
      damping: 12,
      // bounce: 0.2,
      // duration: 0.7,
      restDelta: 0.01,
    },
    // transitionEnd: {
    //   color: "red",
    // visibility: "hidden",
    // display: "flex",
    // },
  },
  selected: {
    // scale: [1, 2, 5, 10, 15, 30],
    // opacity: [1, 0.5, 0.2, 0.1, 0.1, 0.01],
    // transition: {
    //   type: "easeInOut",
    //   duration: 1.5,
    //   // delay: 0.5,
    //   times: [0, 0.2, 0.3, 0.4, 0.5, 1],
    // },
    // scale: [1, 2, 5, 10, 15, 30],
    // opacity: [0.9, 0.9, 0.5, 0.4, 0],
    // rotate: [0, 10, 15, 20, 360],
    opacity: 0.02,
    scale: 30,
    // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    transition: {
      // type: "easeInOut",
      type: "spring",
      // times: [0, 1],
      stiffness: 55,
      damping: 12,
      restDelta: 0.01,
    },
    // transitionEnd: {
    //   color: "blue",
    // visibility: "hidden",
    // scale: 2,
    // },
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
  listOfSkills,
  selectedKnowledgeOuterCircle,
};

export default animations;
