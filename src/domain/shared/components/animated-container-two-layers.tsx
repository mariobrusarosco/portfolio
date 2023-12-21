"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const transitionVariants = {
  initial: {
    y: "100%",
    scaleY: "100%",
  },
  animate: {
    y: ["100%","0%"],
    scaleY: ["100%","0%"]
  },
  exit: { y: ["0%", "100%"], scaleY: ["0%", "100%"] },
};


// TODO work on duplicated code
export const AnimatedContainerTwoLayers = ({ children }: { children: any }) => {
  const pathname = usePathname();

  return (
    // <AnimatePresence mode="wait"'>
      <motion.div key={pathname}>
        {children}
        <motion.div
        initial={{
          opacity: 1
        }}
        animate={{
          opacity: 0,
          transitionEnd: { visibility: 'hidden' },
        }}
        exit={{ opacity: 0, backgroundColor: "orange"}}
          // variants={transitionScreenOverlay}
          // initial="initial"
          transition={{
            duration: 1,
            // type: "spring",
          }}
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 3,
            transformOrigin: "top left",
            backgroundColor: "#FF6D6D",
            
          }}
        >


        {/* <motion.div
          variants={transitionVariants}
          animate="animate"
          initial="initial"
          transition={{
            duration: 0.8,
            // delay: 0.2,
            ease: "easeInOut",
          }}
          exit="exit"
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: "-100%",
            left: 0,
            zIndex: 5,
            backgroundColor: "#FF6D6D",
            transformOrigin: "top left",
          }}
        /> */}

        </motion.div>
        <motion.div

          initial={{
            y: "100%",
            scaleY: "100%",
          }}
          animate={{
            y: ["100%","0%"],
            scaleY: ["100%","0%"]
          }}
          exit={{ y: ["0%", "100%"], scaleY: ["0%", "100%"] }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeInOut",
          }}
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: "-100%",
            left: 0,
            zIndex: 4,
            transformOrigin: "top left",
            backgroundColor: "#ce2a2d",
          }}
        />

      </motion.div>

    // </AnimatePresence>
  );
};
