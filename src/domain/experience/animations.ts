import { Variants } from "framer-motion";

export const animateChildrenInSequence = (interval: number) => {
  return {
    visible: {
      transition: {
        staggerChildren: interval || 0.05,
      },
    },
  };
};

export const revealAndMoveToRight: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 17,
      stiffness: 200,
      restDelta: 0.1,
    },
  },
  hidden: { opacity: 0, x: -25 },
};

export const companyLabel: Variants = {
  hover: {
    x: 5,
    transition: {
      type: "spring",
      stiffness: 150,
      dumping: 10,
      from: 0,
    },
  },
};

const companyHeaderitem = revealAndMoveToRight;

const jobDescriptionItem: Variants = {
  visible: (iterator) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 200,
      delay: iterator * 0.03,
      restSpeed: 0.5,
    },
  }),
  hidden: { opacity: 0, y: 20 },
};

const companyListItemStem: Variants = {
  hover: {
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 50,
      dumping: 10,
    },
    rotate: 180,
  },
};

const companyListItemCircle: Variants = {
  hover: {
    scale: 1.5,
    transition: {
      type: "spring",
      stiffness: 150,
      dumping: 20,
    },
  },
};

export const companyList = {
  stem: companyListItemStem,
  circle: companyListItemCircle,
};

const animations = {
  company: {
    headeritem: companyHeaderitem,
  },
  jobDescriptionItem,
  companyList,
};

export default animations;
