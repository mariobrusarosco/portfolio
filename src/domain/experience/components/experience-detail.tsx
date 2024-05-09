import { motion } from "framer-motion";
import { Experience } from "../typing/interfaces-and-enums";
import { Reveal } from "./reveal";
import animations from "@/domain/experience/animations";
const { company } = animations;

export const ExperienceDetail = ({
  experience,
}: {
  experience: Experience;
}) => {
  if (!experience) return null;

  return (
    <div className="flex flex-col gap-y-10">
      <motion.div
        animate="visible"
        initial="hidden"
        variants={company.header}
        className=""
      >
        <motion.p
          className="font-normal font-sans text-pink-500 text-5xl  tablet:text-6xl desktop:text-6xl uppercase"
          variants={company.headeritem}
        >
          {experience.companyName}
        </motion.p>

        <motion.p
          className="font-light font-sans text-lg text-blue-green-300 tablet:text-xl desktop:text-2xl"
          variants={company.headeritem}
        >
          {new Date(experience.startDate).getFullYear()} -{" "}
          {experience.endDate
            ? new Date(experience.endDate).getFullYear()
            : "present"}
        </motion.p>

        <motion.p
          className="font-light font-sans text-4xl text-pink-100 lowercase tablet:text-5xl desktop:text-6xl"
          variants={company.headeritem}
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
            <p className="font-sans font-light text-pink-100 text-xl tablet:text-2xl desktop:text-3xl">
              {descriptionItem}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
