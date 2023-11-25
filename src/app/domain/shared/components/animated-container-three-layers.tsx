"use client";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

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
        {children}
        <motion.div
          variants={transitionVariants}
          animate="animate"
          initial="initial"
          transition={{
            duration: 0.6,
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

        <motion.div
          variants={transitionVariants}
          animate="animate"
          initial="initial"
          transition={{
            duration: 0.6,
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
        />
        {/* <motion.div
          initial={{ x: "-100%", backgroundColor: "#CF4F4F" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            type: "spring",
            delay: 0.2,
          }}
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            transformOrigin: "top left",
            left: 0,
            top: 0,
            zIndex: 2,
          }}
        /> */}
      </motion.div>
    </AnimatePresence>
  );
};
