import { Variants } from "framer-motion";

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
      duration: 0.1,
    },
  },
  // selected: {
  //   y: 0,
  //   x: "-50%",
  //   transition: {
  //     type: "spring",
  //     duration: 0.5,
  //     bounce: 0.5,
  //     // times: [0, 0.1, 0.95, 1],
  //     repeat: 1,
  //     // repeatDelay: 0.01,
  //   },
  // },
};

const outerCircle: Variants = {
  default: {
    color: "red",
    rotate: "28deg",
    strokeDasharray: "1",
    pathLength: 1,
    transition: {
      type: "spring",
    },
  },
  // selected: {
  //   y: 0,
  //   x: "-50%",
  //   transition: {
  //     type: "spring",
  //     duration: 0.5,
  //     bounce: 0.5,
  //     // times: [0, 0.1, 0.95, 1],
  //     repeat: 1,
  //     // repeatDelay: 0.01,
  //   },
  // },
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
      duration: 4,
      delay: 3,
    },
  },
};

const animations = {
  projectContainer,
  innerCircle,
  outerCircle,
  listItem,
  selectedKnowledgeOuterCircle,
};

export default animations;

// <motion.div
// layout="position"
// className="border border-orange-400 rounded-full flex items-center justify-center p-4"
// variants={animations.selectedKnowledgeOuterCircle}
// animate={isSelected ? "selected" : "default"}
// >
// <motion.div
//   className={cn("w-[10px] h-[10px] bg-orange-400 flex rounded-full")}
// />
// </motion.div>

// <motion.span
// className={cn("font-sans font-light text-sm text-orange-400", {
//   // "opacity-5": isInSelectionMode,
//   // "text-blue-green-300": isSelected,
//   // "text-pink-100": !isSelected,
// })}
// >
// {project.label}
// </motion.span>
// </motion.div>
