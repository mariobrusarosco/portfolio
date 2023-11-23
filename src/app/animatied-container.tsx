"use client";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export const AnimatedContainer = ({ children }: { children: any }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {children}
        <motion.div
          data-test="animated-container-in"
          initial={{ x: "-100%", backgroundColor: "#FF6D6D" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.7,
            type: "spring",
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
        />
        <motion.div
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
        />
      </motion.div>
    </AnimatePresence>
  );

  return (
    // <AnimatePresence mode="wait">
    <motion.div key={pathname} data-test="a">
      <motion.div
        data-test="one"
        initial={{ scaleX: 1, backgroundColor: "red" }}
        animate={{ scaleX: 0, backgroundColor: "green" }}
        exit={{ scaleX: 0.5, backgroundColor: "orange" }}
        transition={{ duration: 1.5, type: "spring" }}
        style={{
          backgroundColor: "tomato",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          transformOrigin: "top left",
          left: 0,
          top: 0,
          zIndex: 2,
        }}
      />
      {/* <motion.div
        // initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, backgroundColor: "orange" }}
        exit={{ scaleX: 0, backgroundColor: "gold" }}
        transition={{ duration: 2.5, type: "spring" }}
        style={{
          backgroundColor: "tomato",
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
    // </AnimatePresence>
  );
};
