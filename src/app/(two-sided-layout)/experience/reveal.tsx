import { Variants, motion, useAnimation, useInView } from "framer-motion";
import React, { use, useEffect, useRef } from "react";
import { paragraph } from "./page";

export const Reveal = ({
  children,
  iterator,
}: {
  children: React.ReactNode;
  iterator: any;
}) => {
  // Manual Control
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  //   useEffect(() => {
  //     if (isInView) {
  //       controls.start("visible");
  //     }
  //   }, [isInView, controls]);
  // Manual Control
  return (
    // <motion.div className="relative" ref={ref}>
    <motion.div
      //   ref={ref} //     For manual Manual Control
      initial="hidden"
      variants={customItem}
      whileInView="eita"
      //   transition={{ duration: 10 }}
      //   whileInView="visible"
      //   variants={paragraph}
      className="relative"
      custom={iterator}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
    // </motion.div>
  );
};

const customItem: Variants = {
  eita: (iterator) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      //   bounce: 0.25,
      damping: 10,
      stiffness: 200,
      delay: iterator * 0.05,
    },
  }),
  hidden: { opacity: 0, y: 10 },
};
