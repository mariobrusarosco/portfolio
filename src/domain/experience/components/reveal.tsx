import { motion } from "framer-motion";
import React from "react";
import { jobDescriptionItems } from "./animations";

export const Reveal = ({
  children,
  iterator,
}: {
  children: React.ReactNode;
  iterator: any;
}) => {
  // Manual Control
  // const ref = useRef(null);
  // const isInView = useInView(ref);
  // const controls = useAnimation();

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
      variants={jobDescriptionItems}
      whileInView="visible"
      //   transition={{ duration: 10 }}
      //   whileInView="visible"
      //   variants={paragraph}
      className="relative"
      custom={iterator}
      // viewport={{ once: true }}
    >
      {children}
    </motion.div>
    // </motion.div>
  );
};
