import { motion } from "framer-motion";
import React from "react";
import { jobDescriptionItems } from "./animations";

export const Reveal = ({
  children,
  iterator,
}: {
  children: React.ReactNode;
  iterator: number;
}) => {
  return (
    <motion.div
      variants={jobDescriptionItems}
      initial="hidden"
      whileInView="visible"
      className="relative"
      custom={iterator}
    >
      {children}
    </motion.div>
  );
};
