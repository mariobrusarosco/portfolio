"use client";
import { motion } from "framer-motion";
import { revealAndMoveToRight, companyLabel } from "../animations";
import { EXPERIENCES } from "../constants";
import { useParams, useRouter } from "next/navigation";
import clsx from "clsx";
import { CircleAndDot } from "@/domain/shared/components/circle-and-dots";

const ListOfExperiences = () => {
  const params = useParams();
  const experienceId = params["slug"];
  const router = useRouter();

  return (
    <motion.ul
      data-ui="list-of-experiences"
      className="flex gap-x-8 pb-6 lg:flex-col lg:gap-y-3 lg:pr-2 lg:max-w-[180px]"
      variants={{
        hidden: {
          opacity: 0,
          overflowY: "hidden",
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            when: "beforeChildren",
          },
          transitionEnd: {
            overflowY: "auto",
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
            className="h-fit flex flex-col items-center gap-y-4 gap-x-1 cursor-pointer last:pr-4 whitespace-nowrap lg:flex-row lg:gap-x-2 lg:items-center lg:pr-4 lg:whitespace-normal"
            whileHover="hover"
            key={experience.id}
            onClick={() => router.push(`/experience/${experience.id}`)}
            variants={revealAndMoveToRight}
          >
            <CircleAndDot
              className={clsx("w-4 h-4 fill-pink-100 stroke-pink-500", {
                "stroke-pink-500 fill-pink-500": experience.id == experienceId,
                "stroke-transparent": experience.id != experienceId,
              })}
            />
            <motion.span
              variants={companyLabel}
              className={clsx(
                `uppercase font-sans font-semibold text-lg lg:text-sm`,
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
  );
};

export { ListOfExperiences };
