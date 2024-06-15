"use client";
import { motion } from "framer-motion";
import { revealAndMoveToRight, companyLabel } from "../animations";
import { EXPERIENCES } from "../constants";
import { useParams, useRouter } from "next/navigation";
import clsx from "clsx";

const ListOfExperiences = () => {
  const params = useParams();
  const experienceId = params["experience-id"];
  const router = useRouter();

  return (
    <div>
      <motion.ul
        data-ui="list-of-experiences"
        className="flex gap-8 pb-6 lg:flex-col lg:pr-16 lg:gap-4"
        variants={{
          hidden: {
            opacity: 0,
            overflow: "hidden",
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
              when: "beforeChildren",
            },
            transitionEnd: {
              overflow: "auto",
            },
          },
        }}
        animate="visible"
        initial="hidden"
      >
        {EXPERIENCES.map((experience) => (
          <motion.li
            key={experience.id}
            onClick={() => router.push(`/experience/${experience.id}`)}
            variants={revealAndMoveToRight}
          >
            {/* IMPORTANT: Framer Motion has a bug with the usage of "whileHover" + variants with "staggerChidlren" To fix that, we need an extra motion.div to handle the "whileHover"*/}
            <motion.div
              className="flex flex-col items-center gap-y-4 cursor-pointer last:pr-4 lg:flex-row lg:gap-x-4 lg:items-center"
              whileHover="hover"
            >
              <div
                className={clsx("w-[6px] h-[6px] rounded-full", {
                  "bg-active-primary": experience.id == experienceId,
                  "bg-pink-100": experience.id != experienceId,
                })}
              />
              <motion.span
                variants={companyLabel}
                className={clsx(
                  `uppercase font-sans font-semibold text-lg whitespace-nowrap lg:text-sm`,
                  {
                    "text-active-primary": experience.id == experienceId,
                    "text-pink-100": experience.id != experienceId,
                  }
                )}
              >
                {experience.companyName}
              </motion.span>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export { ListOfExperiences };
