import { motion } from "framer-motion";
import { Experience } from "../typing/interfaces-and-enums";
import { Reveal } from "./reveal";
import animations, {
  animateChildrenInSequence,
  revealAndMoveToRight,
} from "@/domain/experience/animations";
import { useMemo } from "react";
const { company } = animations;

export const ExperienceDetail = ({
  experience,
}: {
  experience: Experience;
}) => {
  const wrapperAnimation = useMemo(() => animateChildrenInSequence(0.15), []);

  if (!experience) return null;

  return (
    <>
      <motion.div
        animate="visible"
        initial="hidden"
        variants={wrapperAnimation}
        className="experience-detail mb-8"
      >
        <motion.p
          className="lowercase font-light font-serif text-pink-500 text-7xl mb-6 lg:text-8xl lg:mb-10 lg:mt-5"
          variants={revealAndMoveToRight}
        >
          {experience.companyName}
        </motion.p>

        <motion.p
          className="font-light font-sans text-lg text-blue-green-300 md:text-xl lg:text-2xl"
          variants={revealAndMoveToRight}
        >
          {new Date(experience.startDate).getFullYear()} -{" "}
          {experience.endDate
            ? new Date(experience.endDate).getFullYear()
            : "present"}
        </motion.p>

        <motion.p
          className="font-light font-sans text-4xl text-pink-100 lowercase md:text-4xl"
          variants={revealAndMoveToRight}
        >
          {experience.position}
        </motion.p>

        <motion.p
          className="font-light font-sans text-lg text-blue-green-300"
          variants={company.headeritem}
        >
          {experience.location}
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-y-6">
        {experience?.description.map((descriptionItem, i) => (
          <Reveal key={i} iterator={i}>
            <p className="font-sans font-light text-pink-100 text-xl md:text-2xl">
              {descriptionItem}
            </p>
          </Reveal>
        ))}
      </div>
    </>
  );
};
