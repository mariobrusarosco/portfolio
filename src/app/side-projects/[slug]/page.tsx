"use client";
import animations from "@/domain/side-projects/animations";
import { cn } from "@/domain/shared/utils/classnames";
import { SIDE_PROJECTS } from "@/domain/side-projects/constants";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { CircleAndDot } from "@/domain/shared/components/circle-and-dots";
import { IconFigma } from "@/domain/side-projects/components/icons/figma";
import { IconGithub } from "@/domain/side-projects/components/icons/github";
import { IconLink } from "@/domain/side-projects/components/icons/link";
import { IconPostman } from "@/domain/side-projects/components/icons/postman";

export default function ProjectScreen() {
  const projectgeId = useParams()["slug"];
  const { back } = useRouter();
  const project = SIDE_PROJECTS.find((project) => project.id === projectgeId);

  if (!project) return null;

  return (
    <motion.div
      data-ui="project-slug-screen"
      className="x-global-spacing flex flex-col absolute left-0 h-full w-full pt-[150px] lg:pt-[120px] lg:flex-row lg:gap-x-16"
      animate="selected"
      initial="default"
      variants={animations.projectContainer}
    >
      <div className="flex justify-between items-start mb-14 lg:mb-10 lg:min-w-[350px] xl:min-w-[500px]">
        <h2 className="text-4xl font-light max-w-[220px] text-orange-400 lg:max-w-none">
          {project.label}
        </h2>

        <div className="flex flex-col gap-y-6">
          <div
            className="flex gap-x-2 justify-end items-center cursor-pointer"
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

          <div className="flex gap-x-3">
            <a
              className="w-5 h-5"
              href={project.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconLink />
            </a>

            {project?.figmaUrl ? (
              <a
                className="w-5 h-5"
                href={project.figmaUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconFigma />
              </a>
            ) : null}

            {project?.postmanUrl ? (
              <a
                className="w-5 h-5"
                href={project.postmanUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconPostman />
              </a>
            ) : null}

            {project?.githubUrl ? (
              <a
                className="w-5 h-5"
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconGithub />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div data-ui="project-main-content" className="overflow-auto flex-1">
        {project?.description ? (
          <div className="mb-12 font-light">
            <h3 className="text-orange-400 text-xl">project</h3>
            <p className="text-pink-100 text-lg">{project.description}</p>
          </div>
        ) : null}

        {project?.benefits ? (
          <div className="mb-12 font-light">
            <h3 className="text-orange-400 text-xl mb-6 lg:mb-2">benefits</h3>

            <ul>
              {project.benefits.map((benefit, i) => (
                <li
                  className="text-pink-100 text-lg flex items-center gap-x-2 mb-2"
                  key={i}
                >
                  <CircleAndDot className="w-4 h-4 fill-orange-400 stroke-orange-400" />
                  <span className="flex-1">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {project?.stack ? (
          <div className="mb-12 font-light">
            <h3 className="text-orange-400 font-light text-xl mb-2">stack</h3>
            <ul className="flex flex-col gap-x-4">
              {project.stack.map((stack, i) => (
                <li
                  key={i}
                  className="text-pink-100 font-light text-lg flex items-center gap-x-2"
                >
                  <CircleAndDot className="w-4 h-4 fill-orange-400 stroke-orange-400" />
                  <span className="flex-1">{stack}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
