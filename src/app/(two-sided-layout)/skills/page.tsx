"use client";
import { AppHeader } from "@/domain/shared/components/app-header/app-header";
import { motion } from "framer-motion";
import {
  jobDescriptionItems,
  opacity,
} from "../../../domain/experience/components/animations";

export default function Skills() {
  return (
    <>
      <div className="pt-[90px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
              stiffness: 150,
            },
          }}
          className="text-4xl font"
        >
          Skills
        </motion.h2>
      </div>

      <motion.div
        animate="visible"
        initial="hidden"
        variants={opacity}
        className="bg-primary-base flex-grow p-5 flex flex-col gap-y-2 overflow-auto"
        // className={
        //   "bg-primary-base flex-grow p-5 flex flex-col gap-y-2 overflow-auto " +
        //   temp
        // }
        // ref={scrollElementRef}
      >
        <p className="text-2xl font-medium text-secondary-dark">Red Ventures</p>
        <p className="text-sm font-normal text-primary-white">2019 - Present</p>
        <p className="text-lg font-normal text-secondary-dark">
          front end engineer
        </p>

        <motion.div
          className="mt-10 flex flex-col gap-3"
          variants={jobDescriptionItems}
          animate="visible"
          initial="hidden"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.p variants={jobDescriptionItems} key={i}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              molestias, distinctio quisquam consequuntur minima suscipit
              accusamus
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      <AppHeader />
    </>
  );
}
