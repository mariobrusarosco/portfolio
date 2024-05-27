import { motion } from "framer-motion";
import { IExperience } from "../typing/interfaces-and-enums";
import { Reveal } from "./reveal";
import animations, {
  animateChildrenInSequence,
  revealAndMoveToRight,
} from "@/domain/experience/animations";
import { useMemo } from "react";
const { company } = animations;

interface Props {
  experience: IExperience | undefined;
}

const Experience = ({ experience }: Props) => {
  const wrapperAnimation = useMemo(() => animateChildrenInSequence(0.15), []);

  if (!experience) return null;

  return (
    <div className="experience x-global-spacing overflow-auto scroller pb-6">
      <motion.div
        animate="visible"
        initial="hidden"
        variants={wrapperAnimation}
      >
        <motion.p
          className="lowercase font-light font-serif text-pink-500 text-7xl mb-6 lg:text-7xl lg:mb-10 lg:mt-5"
          variants={revealAndMoveToRight}
        >
          {experience.companyName}
        </motion.p>

        <motion.p
          className="font-light font-sans text-lg text-blue-green-300 md:text-xl"
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
          className="font-light font-sans text-lg text-blue-green-300"
          variants={company.headeritem}
        >
          {experience.location}
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-y-6 lg:gap-y-2 lg:pt-8">
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

export { Experience };
