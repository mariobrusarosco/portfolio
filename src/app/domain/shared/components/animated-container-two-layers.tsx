"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const transitionVariants = {
  initial: {
    x: "100%",
    scaleX: "100%",
  },
  animate: {
    x: "0%",
    scaleX: "0%",
  },
  exit: { x: ["0%", "100%"], scaleX: ["0%", "100%"] },
};

// TODO work on duplicated code
export const AnimatedContainerTwoLayers = ({ children }: { children: any }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {children}
        <motion.div
          variants={transitionVariants}
          animate="animate"
          initial="initial"
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeInOut",
          }}
          exit="exit"
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            right: "100%",
            top: 0,
            bottom: 0,
            zIndex: 5,
            backgroundColor: "#FF6D6D",
          }}
        />

        <motion.div
          variants={transitionVariants}
          animate="animate"
          initial="initial"
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: "easeInOut",
          }}
          exit="exit"
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            right: "100%",
            top: 0,
            bottom: 0,
            zIndex: 4,
            backgroundColor: "#ce2a2d",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};
