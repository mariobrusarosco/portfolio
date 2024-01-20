import { Variants } from "framer-motion";

const staggerChildrenWhenVisible: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const companiesListContainer = staggerChildrenWhenVisible;
const companyHeader = staggerChildrenWhenVisible;

const revealAndMoveToRight: Variants = {
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
const companyHeaderitem = revealAndMoveToRight;
const companyListitem = revealAndMoveToRight;

const jobDescriptionItem: Variants = {
  visible: (iterator) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
      delay: iterator * 0.03,
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

const companyListItemLabel: Variants = {
  hover: {
    x: 15,
    transition: {
      type: "spring",
      stiffness: 150,
      dumping: 20,
      from: 0,
    },
  },
};

const animations = {
  company: {
    header: companyHeader,
    headeritem: companyHeaderitem,
  },
  jobDescriptionItem,
  companiesList: {
    container: companiesListContainer,
    item: companyListitem,
    stem: companyListItemStem,
    circle: companyListItemCircle,
    label: companyListItemLabel,
  },
};

export default animations;
