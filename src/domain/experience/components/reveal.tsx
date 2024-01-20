import { motion } from "framer-motion";
import React from "react";
import animations from "@/domain/experience/animations";

const { jobDescriptionItem } = animations;

export const Reveal = ({
  children,
  iterator,
}: {
  children: React.ReactNode;
  iterator: number;
}) => {
  return (
    <motion.div
      variants={jobDescriptionItem}
      initial="hidden"
      whileInView="visible"
      className="relative"
      custom={iterator}
    >
      {children}
    </motion.div>
  );
};
