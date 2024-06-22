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
  const params = useParams();
  const experienceId = params["experience-id"];
  const experience: IExperience | undefined = EXPERIENCES.find(
    (exp) => exp.id === experienceId
  );
  const wrapperAnimation = useMemo(() => animateChildrenInSequence(0.15), []);

  if (!experience) return null;

  return (
    <div data-ui="experience-screen" className="mt-10 overflow-auto pr-4">
      <motion.div
        animate="visible"
        initial="hidden"
        variants={wrapperAnimation}
        className="lg:sticky lg:top-0 xl:w-[450px]"
      >
        <motion.p
          className="uppercase font-light font-serif text-4xl md:text-6xl mb-4 text-pink-500 xl:text-7xl"
          variants={revealAndMoveToRight}
        >
          {experience.companyName}
        </motion.p>

        <motion.p
          className="font-light font-sans my-1 text-blue-green-300 md:text-xl"
          variants={revealAndMoveToRight}
        >
          {new Date(experience.startDate).getFullYear()} -{" "}
          {experience.endDate
            ? new Date(experience.endDate).getFullYear()
            : "present"}
        </motion.p>

        <motion.p
          className="font-light font-sans text-4xl text-pink-100 lowercase md:text-4xl lg:text-3xl lg:whitespace-nowrap"
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

      <div className="flex flex-col gap-y-3 pt-4 lg:pt-0 lg:flex-1">
        {experience?.description.map((descriptionItem, i) => (
          <Reveal key={i} iterator={i}>
            <p className="font-sans font-light text-pink-100 text-xl md:text-2xl lg:text-lg xl:text-xl">
              {descriptionItem}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Experience;
