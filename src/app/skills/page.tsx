"use client";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Skills() {
  // const isPresent = useIsPresent();

  // console.log({ isPresent });
  return (
    // <AnimatePresence mode="wait">
    //   {isPresent && (
    <main data-test="skills-screen">
      <h1>Skills</h1>
      {/* <motion.div
        data-test="one"
        initial={{ scaleX: 1, backgroundColor: "red" }}
        animate={{ scaleX: 0, backgroundColor: "green" }}
        exit={{ scaleX: 1, backgroundColor: "orange" }}
        transition={{ duration: 10.5, type: "spring" }}
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
      <ul>
        <li>
          <Link href={"/skills"}>skills</Link>
        </li>
        <li>
          <Link href={"/experience"}>experience</Link>
        </li>
      </ul>
      a{" "}
    </main>
    // )}
    // </AnimatePresence>
  );
}
