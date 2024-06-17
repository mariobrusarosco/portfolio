import { Variants } from "framer-motion";

const listOfSkills: Variants = {
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

const skillListContainer = {
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

const skillContainer = {
  default: {
    opacity: 0,
  },
  selected: {
    opacity: 1,
    transition: {
      delay: 0.25,
    },
  },
};

const selectedKnowledgeOuterCircle: Variants = {
  default: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        restDelta: 0.01,
      },
    },
  },
  selected: {
    opacity: 0.01,
    scale: 30,
    transition: {
      opacity: {
        type: "easeInOut",
      },
      scale: {
        type: "spring",
        stiffness: 80,
        damping: 9,
        restDelta: 0.01,
      },
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

const animations = {
  skillContainer,
  skillListContainer,
  listOfSkills,
  listItem,
  selectedKnowledgeOuterCircle,
};

export default animations;
