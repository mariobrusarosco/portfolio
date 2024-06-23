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

const knowledgeContainer = {
  default: {
    opacity: 0,
    scale: 0.5,
  },
  selected: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};

const selectedKnowledgeOuterCircle: Variants = {
  default: {
    scale: 1,
    opacity: 1,
    position: "relative",
    transition: {
      scale: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        restDelta: 0.1,
      },
    },
  },
  selected: {
    opacity: 0.008,
    scale: 30,
    position: "fixed",
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
  knowledgeContainer,
  skillListContainer,
  listOfSkills,
  listItem,
  selectedKnowledgeOuterCircle,
};

export default animations;
