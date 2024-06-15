"use client";
import { motion } from "framer-motion";
import { screens } from "../animations";

const ScreenHeading = ({
  prefix,
  title,
}: {
  prefix: string;
  title: string;
}) => {
  return (
    <section className="heading-and-list-section pb-[72px] flex flex-col md:flex-row md:gap-x-2 md:items-center lg:pb-[100px] fh:pb-[170px]">
      <motion.p
        initial="initial"
        animate="animate"
        variants={screens.heading}
        className="w-fit font-serif text-active-secondary text-3xl md:text-3xl"
      >
        <span>{prefix}</span>
      </motion.p>

      <motion.h2
        initial="initial"
        animate="animate"
        variants={screens.heading}
        className="text-active-primary text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>
    </section>
  );
};

export { ScreenHeading };
