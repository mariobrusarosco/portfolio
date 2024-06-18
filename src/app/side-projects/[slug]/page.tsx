"use client";
import animations from "@/domain/side-projects/animations";
import { KNOWLEDGE } from "@/domain/knowledge/constants";
import { cn } from "@/domain/shared/utils/classnames";
import { SIDE_PROJECTS } from "@/domain/side-projects/constants";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";

export default function ProjectScreen() {
  const projectgeId = useParams()["slug"];
  const { back } = useRouter();
  const project = SIDE_PROJECTS.find((project) => project.id === projectgeId);

  if (!project) return null;

  return (
    <motion.div
      data-ui="project-screen"
      className={cn(
        "x-global-spacing py-8 px-10 fixed h-screen w-screen grid place-content-center top-0 left-0 min-h-[300px] lg:flex lg:items-center lg:gap-x-24"
      )}
      animate="selected"
      initial="default"
      variants={animations.projectContainer}
    >
      <div className="flex justify-between items-center mb-8 lg:w-[300px] ">
        <h2 className="text-4xl font-serif text-oraborder-orange-500">
          {project.label}
        </h2>

        <div
          className="flex gap-1 justify-between items-center  cursor-pointer"
          onClick={back}
        >
          <p className="uppercase text-oraborder-orange-500 text-xs">back</p>
          <div className="w-5 h-5 border border-orange-500 p-1 rounded-full">
            <svg
              viewBox="0 0 7 7"
              className="stroke-oraborder-orange-500"
              fill="none"
              strokeWidth="0.5"
            >
              <path d="M3.68555 1L1.43555 3.5M7 3.5H1.43555M1.43555 3.5L3.68555 6.5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:gap-x-6 lg:flex-1 lg:flex-row">
        <div className="flex-1">
          <h3 className="text-orange-500 font-light text-2xl">project</h3>
          <p className="text-rose-100">{project.description}</p>
        </div>

        <div className="flex-1">
          <h3 className="text-orange-500 font-light text-2xl">
            work experience
          </h3>
          <p className="text-rose-100">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
