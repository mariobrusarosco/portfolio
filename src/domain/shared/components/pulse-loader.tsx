"use client";
import { motion } from "framer-motion";

const PulseLoader = () => {
  return (
    <div data-ui="pulse-loader" className="relative w-full h-full">
      <div className="w-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.svg
          initial="initial"
          animate={{ fill: "var(--active-primary)", scale: 0.2 }}
          transition={{
            duration: 1,
            type: "spring",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          viewBox="0 0 26 26"
          fill="transparent"
        >
          <rect
            x="0.5"
            y="0.5"
            width="25"
            height="25"
            rx="12.5"
            stroke="var(--active-primary)"
          />
        </motion.svg>
      </div>

      <div className="w-[20px] h-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.svg
          viewBox="0 0 120 120"
          fill="var(--active-primary)"
          stroke="var(--active-primary)"
          animate={{ fill: "transparent", scale: 4 }}
          transition={{
            duration: 1,
            type: "spring",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <circle cx="60" cy="60" r="50" strokeWidth="4" />
        </motion.svg>
      </div>
    </div>
  );
};

export { PulseLoader };
