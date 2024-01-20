"use client";
import { shared } from "@/domain/shared/animations";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div>
      <div className="pt-[90px] text-center">
        <div className="text-center">
          <motion.h2
            initial="initial"
            animate="animate"
            variants={shared.pageHeading}
            className="text-primary-white text-3xl tablet:text-5xl"
          >
            Skills
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
