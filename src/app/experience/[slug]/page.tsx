"use client";

import animations, {
  animateChildrenInSequence,
  revealAndMoveToRight,
} from "@/domain/experience/animations";
import { Reveal } from "@/domain/experience/components/reveal";
import { EXPERIENCES } from "@/domain/experience/constants";
import { IExperience } from "@/domain/experience/typing/interfaces-and-enums";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useMemo } from "react";
const { company } = animations;

const Experience = () => {
  const experienceId = useParams()["slug"];
  const experience: IExperience | undefined = EXPERIENCES.find(
    (exp) => exp.id === experienceId
  );
  const wrapperAnimation = useMemo(() => animateChildrenInSequence(0.15), []);

  if (!experience) return null;

  return (
    <div
      data-ui="experience-screen"
      className="mt-10 overflow-auto flex-1 pr-4 lg:w-full lg:mt-0 lg:flex lg:gap-x-20"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={wrapperAnimation}
        className="lg:sticky lg:top-0 xl:w-[450px]"
      >
        <motion.p
          className="uppercase font-light font-serif text-4xl  mb-4 text-pink-500 lg:text-6xl xl:text-7xl"
          variants={revealAndMoveToRight}
        >
          {experience.companyName}
        </motion.p>

        <motion.p
          className="font-light font-sans my-1 text-blue-green-300 lg:text-xl"
          variants={revealAndMoveToRight}
        >
          {new Date(experience.startDate).getFullYear()} -{" "}
          {experience.endDate
            ? new Date(experience.endDate).getFullYear()
            : "present"}
        </motion.p>

        <motion.p
          className="font-light font-sans text-3xl text-pink-100 lowercase lg:text-4xl lg:whitespace-nowrap"
          variants={revealAndMoveToRight}
        >
          {experience.position}
        </motion.p>

        <motion.p
          className="font-light font-sans text-blue-green-300"
          variants={company.headeritem}
        >
          {experience.location}
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-y-3 pt-10 lg:pt-0 lg:flex-1">
        {experience?.description.map((descriptionItem, i) => (
          <Reveal key={i} iterator={i}>
            <p className="font-sans font-light text-pink-100 text-xl lg:text-lg xl:text-xl">
              {descriptionItem}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Experience;
