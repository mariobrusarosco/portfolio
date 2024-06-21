"use client";
import animations from "@/domain/side-projects/animations";
import { cn } from "@/domain/shared/utils/classnames";
import { SIDE_PROJECTS } from "@/domain/side-projects/constants";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { CircleAndDot } from "@/domain/shared/components/circle-and-dots";

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
      <div className="flex justify-between items-center mb-14 lg:w-[300px]">
        <h2 className="text-5xl font-thin text-orange-400 lowercase">
          {project.label}
        </h2>

        <div
          className="flex gap-1 justify-between items-center  cursor-pointer"
          onClick={back}
        >
          <p className="uppercase text-pink-100 text-xs font-light">back</p>
          <div className="w-6 h-6 border border-blue-green-300 p-2 rounded-full">
            <svg
              viewBox="0 0 7 7"
              className="stroke-blue-green-300"
              fill="none"
              strokeWidth="0.5"
            >
              <path d="M3.68555 1L1.43555 3.5M7 3.5H1.43555M1.43555 3.5L3.68555 6.5" />
            </svg>
          </div>
        </div>
      </div>

      {project?.description ? (
        <div className="mb-10">
          <h3 className="text-orange-400 font-light text-xl">project</h3>
          {project.description}
        </div>
      ) : null}

      {project?.benefits ? (
        <div className="mb-10">
          <h3 className="text-orange-400 font-light text-xl">benefits</h3>
          {project.benefits}
        </div>
      ) : null}

      {project?.stack ? (
        <div className="mb-10">
          <h3 className="text-orange-400 font-light text-xl">stack</h3>
          {project.stack}
        </div>
      ) : null}
    </motion.div>
  );
}
