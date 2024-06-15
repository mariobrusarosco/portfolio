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
    <div data-ui="experience" className="flex flex-col pt-12 overflow-auto">
      <motion.div
        animate="visible"
        initial="hidden"
        variants={wrapperAnimation}
      >
        <motion.p
          className="uppercase font-light font-serif text-4xl md:text-6xl mb-4 text-pink-500"
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
          className="font-light font-sans text-4xl text-pink-100 lowercase md:text-4xl lg:text-3xl "
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

      <div className="flex flex-col gap-y-3 pt-4">
        {experience?.description.map((descriptionItem, i) => (
          <Reveal key={i} iterator={i}>
            <p className="font-sans font-light text-pink-100 text-xl md:text-2xl lg:text-lg ">
              {descriptionItem}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Experience;
