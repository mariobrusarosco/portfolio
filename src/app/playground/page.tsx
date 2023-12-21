"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

export default function Skills() {
  const [clicks, setClicks] = useState(0);
  console.log({ clicks });

  return (
    <main data-test="xp-screen">
      <h1>Experience</h1>
      <ul>
        <li>
          <Link href={"/skills"}>skills</Link>
        </li>
        <li>
          <Link href={"/experience"}>experience</Link>
        </li>
      </ul>

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid red",
          padding: "20px",
        }}
      >
        <section>
          <AnimatedWhenRendering
            key={clicks}
            onClick={() => setClicks((clicks) => ++clicks)}
          />
        </section>

        <section>
          <VariantAnimations key={clicks} />
        </section>

        <section>
          <ExitAnimations key={clicks} />
        </section>
      </div>
    </main>
  );
}

const AnimatedWhenRendering = ({ onClick }: { onClick: any }) => {
  return (
    <div>
      <h2>Animating when rendering...</h2>

      <div style={{ display: "flex", placeItems: "center", gap: "50px" }}>
        <motion.div
          onClick={onClick}
          style={{
            borderRadius: "50%",
            backgroundColor: "tomato",
            width: "60px",
            height: "60px",
            display: "grid",
            placeItems: "center",
            color: "white",
          }}
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            damping: 20,
            duration: 1.5,
            restDelta: 0.1,
          }}
        >
          +
        </motion.div>

        <motion.div
          onClick={onClick}
          style={{
            borderRadius: "50%",
            backgroundColor: "tomato",
            width: "60px",
            height: "60px",
            display: "grid",
            placeItems: "center",
            color: "white",
            cursor: "pointer",
          }}
          whileHover={{
            scale: 1.07,
            transition: { duration: 0.15, restDelta: 0.01 },
          }}
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{
            y: [30, -5, 0],
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            restDelta: 0.1,
          }}
        >
          +
        </motion.div>
      </div>
    </div>
  );
};

const ExitAnimations = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h2>Animating on unmount</h2>

      <div style={{ display: "grid", placeItems: "center", height: "100px" }}>
        <motion.button layout="position" onClick={() => setVisible(!visible)}>
          toggle
        </motion.button>
        <AnimatePresence mode="popLayout">
          {visible && (
            <motion.div
              style={{
                borderRadius: "50%",
                backgroundColor: "tomato",
                width: "60px",
                height: "60px",
                display: "grid",
                placeItems: "center",
                color: "white",
              }}
              initial={{
                y: 30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: 30,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                damping: 20,
                duration: 1.2,
                restDelta: 0.1,
              }}
            >
              +
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const VariantAnimations = () => {
  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    hidden: {
      opacity: 0,
      y: 50,
      // transition: { duration: 0.2 },
    },
  };
  const items = Array(6)
    .fill(null)
    .map((u, i) => i);
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h2>Animating variants</h2>

      <div style={{ display: "grid", placeItems: "center" }}>
        <motion.button
          layout="position"
          whileTap={{ scale: 0.97 }}
          onClick={() => setVisible(!visible)}
          style={{
            borderRadius: "10px",
            backgroundColor: "white",
            border: "1px solid tomato",
            color: "tomato",
            padding: "15px 50px",
            cursor: "pointer",
          }}
        >
          MENU
        </motion.button>
        <AnimatePresence mode="popLayout">
          {/* {visible && ( */}
          <motion.ul
            animate={visible ? "visible" : "hidden"}
            initial="hidden"
            variants={{
              visible: {
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.15,
                  staggerChildren: 0.05,
                },
              },
              hidden: {
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {items.map((item, key) => (
              <motion.li
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={key}
                style={{
                  borderRadius: "10px",
                  border: "1px solid tomato",
                  color: "tomato",
                  padding: "10px",
                }}
              >
                lorem ipsum : {item}
              </motion.li>
            ))}
          </motion.ul>
          {/* )} */}
        </AnimatePresence>
      </div>
    </div>
  );
};
