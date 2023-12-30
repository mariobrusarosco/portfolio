import { Variants } from "framer-motion";

export const opacity: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const companyHeader = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const companyHeaderitems: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.25,
      damping: 15,
      stiffness: 200,
      restDelta: 0.05,
    },
  },
  hidden: { opacity: 0, x: -25 },
};

export const jobDescriptionItems: Variants = {
  visible: (iterator) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
      delay: iterator * 0.05,
    },
  }),
  hidden: { opacity: 0, y: 20 },
};
