"use client";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div>
      <div className="pt-[90px] text-center">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 10,
                stiffness: 150,
              },
            }}
            className="text-primary-white text-3xl tablet:text-5xl"
          >
            Skills
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
