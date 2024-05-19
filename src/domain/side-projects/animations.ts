import { Variants } from "framer-motion";

const selectedKnowledgeOuterCircle: Variants = {
  default: {
    pathLength: 1,
    rotate: "32deg",
    transition: {
      type: "spring",
      // stiffness: 100,
      // damping: 15,
      // restDelta: 0.01,
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
    // scale: 10,
    transitionEnd: {
      rotate: "32deg",
    },
    transition: {
      type: "spring",
      // bounce: 0.5,
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
  // hidden: {
  //   opacity: 0,
  //   transition: {
  //     type: "spring",
  //     duration: 2,
  //     delay: 1.5,
  //   },
  // },
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
      duration: 1,
    },
  },
  selected: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
      delay: 2.5,
    },
  },
};

const animations = {
  projectContainer,
  innerCircle,
  outerCircle,
  selectedKnowledgeOuterCircle,
};

export default animations;
