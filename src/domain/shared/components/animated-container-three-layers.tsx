"use client";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { AppHeader } from "./app-header/app-header";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
};
export const AnimatedContainerThreeLayers = ({
  children,
}: {
  children: any;
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <motion.div initial="initial">{children}</motion.div>
        <motion.div
          variants={transitionVariants}
          animate="animate"
          initial="initial"
          transition={{
            // type: "spring",
            duration: 0.8,
            // delay: 0.5,
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

        {/* <motion.div
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
          /> */}

        {/* <motion.div
            variants={transitionVariants}
            animate="animate"
            initial="initial"
            transition={{
              // duration: 0.6,
              delay: 0.6,
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
              zIndex: 3,
              backgroundColor: "#ae1a2d",
            }}
          /> */}
      </motion.div>
    </AnimatePresence>
  );
};
