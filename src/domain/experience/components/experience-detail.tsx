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
          className="font-light tracking-[-0.01em]  font-serif text-pink-500 text-5xl lowercase"
          variants={company.headeritem}
        >
          {experience.companyName}
        </motion.p>

        <motion.p
          className="font-light font-sans text-lg text-blue-green-300"
          variants={company.headeritem}
        >
          {new Date(experience.startDate).getFullYear()} -{" "}
          {experience.endDate
            ? new Date(experience.endDate).getFullYear()
            : "present"}
        </motion.p>

        <motion.p
          className="font-light font-sans text-4xl text-pink-100 lowercase"
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
            <p className="font-sans font-light text-pink-100 text-xl">
              {descriptionItem}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
