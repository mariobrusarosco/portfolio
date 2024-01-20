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
  return (
    <>
      <motion.div animate="visible" initial="hidden" variants={company.header}>
        <motion.p
          className="text-2xl font-medium text-secondary-dark"
          variants={company.headeritem}
        >
          {experience.companyName}
        </motion.p>

        <motion.p
          className="text-sm font-normal text-primary-white"
          variants={company.headeritem}
        >
          {new Date(experience.startDate).getFullYear()} -{" "}
          {experience.endDate
            ? new Date(experience.endDate).getFullYear()
            : "present"}
        </motion.p>

        <motion.p
          className="text-lg font-normal text-secondary-dark"
          variants={company.headeritem}
        >
          {experience.position}
        </motion.p>

        <motion.p
          className="text-xs font-normal text-primary-white"
          variants={company.headeritem}
        >
          {experience.location}
        </motion.p>
      </motion.div>

      <div className="mt-3 flex flex-col gap-3 text-primary-white font-extralight text-lg">
        {experience?.description.map((descriptionItem, i) => (
          <Reveal key={i} iterator={i}>
            {descriptionItem}
          </Reveal>
        ))}
      </div>
    </>
  );
};
