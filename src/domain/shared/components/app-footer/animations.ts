import { Variants } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";

const outerCircle: Variants = {
  initial: {
    pathLength: 1,
    strokeDasharray: 50,
  },
  hover: {
    pathLength: 0.45,
    transition: {
      type: "spring",
      damping: 10,
      delay: 0.5,
      // stiffness: 150,
      // duration: 10,
    },
  },
  // visible: {
  //   pathLength: 1,
  //   opacity: 1,
  //   transition: {
  //     type: "spring",
  //     damping: 30,
  //     // delay: 0.5,
  //     // stiffness: 150,
  //     // duration: 10,
  //   },
  // },
  // hidden: { pathLength: 0, opacity: 0 },
};

const labelAnimation: Variants = {
  // default: {
  //   // y: 0,
  //   // x: 0,
  //   x: "-50%",
  //   left: "50%",
  // },
  hover: {
    visibility: "visible",
    opacity: 1,
    y: -90,
    // x: "-50%",
    transition: {
      type: "spring",
      //A
      damping: 10,
      stiffness: 150,
      // B
      // damping: 12,
      // stiffness: 100,
    },
    color: "#D60C4E",
  },
};

const innerCircle: Variants = {
  // iniatial: {
  // y: "-50%",
  // x: "-50%",
  // },
  default: {
    y: "-50%",
    x: "-50%",
    // x: "-50%",
  },
  hover: {
    y: -35,
    x: "-50%",
    // x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      //A
      damping: 10,
      stiffness: 150,
      // B
      // damping: 12,
      // stiffness: 100,
    },
    backgroundColor: "#D60C4E",
  },
};

const animations = {
  menu: {
    outerCircle,
    innerCircle,
    label: labelAnimation,
  },
};

export default animations;
