"use client";
import animations from "@/domain/side-projects/animations";
import { cn } from "@/domain/shared/utils/classnames";
import { SIDE_PROJECTS } from "@/domain/side-projects/constants";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { CircleAndDot } from "@/domain/shared/components/circle-and-dots";
import { IconFigma } from "@/domain/side-projects/components/icons/figma";
import { IconGithub } from "@/domain/side-projects/components/icons/github";

export default function ProjectScreen() {
  const projectgeId = useParams()["slug"];
  const { back } = useRouter();
  const project = SIDE_PROJECTS.find((project) => project.id === projectgeId);

  if (!project) return null;

  return (
    <motion.div
      data-ui="project-slug-screen"
      className="x-global-spacing absolute w-full left-0 pt-40 top-0"
      animate="selected"
      initial="default"
      variants={animations.projectContainer}
    >
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-5xl font-thin text-orange-400 max-w-[260px]">
          {project.label}
        </h2>
        {/* 
        <p>asdsadsadsadsadsa</p>
        <p>
          asdsadsadsa asdasdjsakdjas dsadsajdhsajdhjsa asdsajhdjsahd
          asdjsahdjsad asdjhsadjshadjsa dsajhdjsadhj
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore dicta
          dolores impedit reiciendis perspiciatis quis, beatae, ratione quas
          tenetur, minima dolore dignissimos a praesentium temporibus cupiditate
          adipisci voluptas aut corrupti?
        </p> */}
        <div className="flex flex-col gap-y-6">
          <div
            className="flex gap-1 justify-between items-center cursor-pointer"
            onClick={back}
          >
            <p className="uppercase text-orange-100 text-xs font-light">back</p>
            <div className="w-6 h-6 border border-orange-400 p-2 rounded-full">
              <svg
                viewBox="0 0 7 7"
                className="stroke-orange-400"
                fill="none"
                strokeWidth="0.5"
              >
                <path d="M3.68555 1L1.43555 3.5M7 3.5H1.43555M1.43555 3.5L3.68555 6.5" />
              </svg>
            </div>
          </div>

          <div className="flex gap-x-2">
            <a
              className="w-5 h-5"
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconFigma />
            </a>
            <a
              className="w-5 h-5"
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconGithub />
            </a>
          </div>
        </div>
      </div>

      <div
        data-ui="project-main-content"
        className="max-h-[420px] overflow-auto"
      >
        {project?.description ? (
          <div className="mb-12 font-light">
            <h3 className="text-orange-400 text-2xl">project</h3>
            <p className="text-pink-100 text-lg">{project.description}</p>
          </div>
        ) : null}

        {project?.benefits ? (
          <div className="mb-12 font-light">
            <h3 className="text-orange-400 text-2xl">benefits</h3>
            <p className="text-pink-100 text-lg">{project.benefits}</p>
          </div>
        ) : null}

        {project?.stack ? (
          <div className="mb-12 font-light">
            <h3 className="text-orange-400 font-light text-xl">stack</h3>
            <ul>
              {project.stack.map((stack, i) => (
                <li key={`stack-${i}`} className="text-pink-100 text-lg">
                  {stack}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
