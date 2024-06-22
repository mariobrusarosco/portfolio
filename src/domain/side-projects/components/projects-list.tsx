"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SIDE_PROJECTS } from "../constants";
import { Project } from "./project";

export const ProjectsList = () => {
  const router = useRouter();

  return (
    <section data-ui="side-projects-list" className="overflow-hidden h-full">
      <motion.ul
        className="flex flex-1 flex-wrap gap-8 pb-4 justify-center md:gap-14 lg:gap-x-6 lg:gap-y-6 relative overflow-auto h-full"
        // variants={animations.listOfSkills}
        initial="hidden"
        animate="visible"
      >
        {SIDE_PROJECTS.map((project) => (
          <motion.li
            className="min-w-[30px] md:min-w-[40px] lg:min-w-[80px]"
            key={project.id}
            onClick={() => router.push(`/side-projects/${project.id}`)}
            // variants={animations.listItem}
          >
            <Project project={project} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
