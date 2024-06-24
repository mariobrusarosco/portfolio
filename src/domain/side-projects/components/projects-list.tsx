"use client";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { SIDE_PROJECTS } from "../constants";
import { Project } from "./project";
import animations from "../animations";
import { cn } from "@/domain/shared/utils/classnames";

export const ProjectsList = () => {
  const projectId = useParams()["slug"];

  return (
    <motion.ul
      data-ui="side-projects-list"
      className="flex flex-wrap gap-x-8 gap-y-12 pb-4 pr-4 justify-center relative h-full text-center content-center lg:gap-y-6"
      variants={animations.projectList}
      initial="hidden"
      animate="visible"
    >
      {SIDE_PROJECTS.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </motion.ul>
  );
};
