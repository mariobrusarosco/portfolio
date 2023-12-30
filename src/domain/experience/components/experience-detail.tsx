import { motion } from "framer-motion";
import { Experience } from "../typing/interfaces-and-enums";
import { companyHeader, companyHeaderitems } from "./animations";
import { Reveal } from "./reveal";

export const ExperienDetail = ({ experience }: { experience: Experience }) => {
  return (
    <>
      <motion.div animate="visible" initial="hidden" variants={companyHeader}>
        <motion.p
          className="text-2xl font-medium text-secondary-dark"
          variants={companyHeaderitems}
        >
          {experience.companyName}
        </motion.p>

        <motion.p
          className="text-sm font-normal text-primary-white"
          variants={companyHeaderitems}
        >
          {new Date(experience.startDate).getFullYear()} -{" "}
          {new Date(experience.endDate).getFullYear()}
        </motion.p>

        <motion.p
          className="text-lg font-normal text-secondary-dark"
          variants={companyHeaderitems}
        >
          {experience.position}
        </motion.p>
      </motion.div>

      <div className="mt-3 flex flex-col gap-3">
        {experience?.description.map((descriptionItem, i) => (
          <Reveal key={i} iterator={i}>
            {descriptionItem}
          </Reveal>
        ))}
      </div>
    </>
  );
};
