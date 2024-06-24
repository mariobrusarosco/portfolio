import { Variants } from "framer-motion";

const projectList: Variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: -0.08,
      type: "spring",
    },
  },
};

const listItem = {
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const selectedProjectOuterCircle: Variants = {
  default: {
    pathLength: 1,
    rotate: "32deg",
    transition: {
      type: "spring",
    },
    transitionEnd: {
      rotate: "32deg",
    },
  },
  selected: {
    rotate: "32deg",
    pathLength: 1,
    originX: "50%",
    originY: "50%",
    transitionEnd: {
      rotate: "32deg",
    },
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const innerCircle: Variants = {
  default: {
    scale: 1,
    opacity: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.25,
      damping: 15,
    },
  },
};

const outerCircle: Variants = {
  default: {
    rotate: "28deg",
    pathLength: 1,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 2,
      delay: 1.5,
    },
  },
};

const projectContainer: Variants = {
  default: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  selected: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 3,
      delay: 3.5,
    },
  },
};

const label: Variants = {
  default: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const animations = {
  projectContainer,
  innerCircle,
  outerCircle,
  label,
  selectedProjectOuterCircle,
  projectList,
  listItem,
};

export default animations;
