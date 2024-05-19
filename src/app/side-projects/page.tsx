"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { sideProjects } from "@/domain/side-projects/constants";
import { motion } from "framer-motion";

import { SideProject } from "@/domain/side-projects/typing/interfaces-and-enums";
import { useEffect, useRef } from "react";
import { screens } from "@/domain/shared/animations";
import { updateParamsOnURL } from "@/domain/shared/utils/url-manipulation";
import animations from "@/domain/side-projects/animations";
import { Project } from "@/domain/side-projects/components/project";
import { cn } from "@/domain/shared/utils/classnames";

export default function SideProjects() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedProject = sideProjects.find((project) => {
    return project.id === searchParams.get("project_id");
  }) as SideProject;

  const handleSelectProject = (projectId: string) => {
    const selectedProject = sideProjects.find((project) => {
      return project.id === projectId;
    });

    const queryParamsString = updateParamsOnURL({
      searchParams,
      queryParams: selectedProject?.queryParams,
    });

    router.push(`${window.location.pathname}?${queryParamsString}`);
  };
  const handleCloseProjectDetails = () =>
    router.push(window?.location.pathname);

  return (
    <div className="overflow-hidden container x-global-spacing h-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 fh:relative">
      <Heading />
      <List
        onSelectProject={handleSelectProject}
        selectedProject={selectedProject}
      />
      <SelectedProjectContainer
        selectedProject={selectedProject}
        handleCloseProjectDetails={handleCloseProjectDetails}
      />
    </div>
  );
}

const Heading = () => {
  return (
    <section className="heading-and-list-section pt-12 md:pt-4 lg:pt-2 lg:row-start-1">
      <motion.p
        initial="initial"
        animate="animate"
        variants={screens.heading}
        className="w-fit font-serif text-active-secondary text-2xl tracking-[2px] md:text-3xl lg:text-4xl "
      >
        <span>these are my</span>
      </motion.p>

      <motion.h2
        initial="initial"
        animate="animate"
        variants={screens.heading}
        className="font-sans font-regular -tracking-[2px] text-active-primary text-6xl -mt-4 md:text-7xl lg:text-8xl"
      >
        side projects
      </motion.h2>
    </section>
  );
};

const List = motion(
  ({
    onSelectProject,
    selectedProject,
  }: {
    onSelectProject: (projectId: string) => void;
    selectedProject: SideProject;
  }) => {
    return (
      <section className="list-of-knowledge mt-16 lg:mt-0 lg:col-start-1 lg:row-[2/-1]">
        <motion.ul
          className="flex flex-wrap gap-8 pb-4 justify-center md:gap-14 lg:justify-start lg:gap-x-6 lg:gap-y-6"
          // variants={animations.listOfSkills}
          initial="hidden"
          animate="visible"
        >
          {sideProjects.map((project) => (
            <motion.li
              className=""
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              // variants={animations.listItem}
            >
              <Project
                project={project}
                selectedProjectId={selectedProject?.id}
              />
            </motion.li>
          ))}
        </motion.ul>
      </section>
    );
  }
);

const SelectedProjectContainer = motion(
  ({
    selectedProject,
    handleCloseProjectDetails,
  }: {
    selectedProject: SideProject;
    handleCloseProjectDetails: () => void;
  }) => {
    return (
      <motion.div
        initial="default"
        variants={animations.projectContainer}
        animate={selectedProject ? "selected" : "default"}
        className={cn(
          "project-details-container h-full absolute w-screen left-0 top-0 pt-[150px] x-global-spacing lg:static lg:width lg:p-0 lg:w-auto lg:row-[1/-1]",
          {
            "-z-10": !selectedProject,
          }
        )}
      >
        <div className="skill-details-content h-full py-8 px-4 border border-active-primary scrollable overflow-x-auto bg-[#00000002] lg:border-none lg:p-2">
          <div className="heading flex justify-between items-start mb-10 lg:mb-2">
            <h3 className="font-serif text-3xl text-active-primary font-regular max-w-[50%] lg:text-6xl">
              {selectedProject?.label}
            </h3>

            <div
              className="flex gap-3 justify-between items-center  cursor-pointer"
              onClick={handleCloseProjectDetails}
            >
              <p className="uppercase text-pink-100 font-sans text-xs">back</p>
              <div className="w-8 h-8 border border-active-primary p-2 rounded-full">
                <svg
                  viewBox="0 0 7 7"
                  className="stroke-active-primary"
                  fill="none"
                  strokeWidth="0.5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.68555 1L1.43555 3.5M7 3.5H1.43555M1.43555 3.5L3.68555 6.5" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-x-4 justify-center fh:flex-col fh:flex-1 fh:items-center lg:overflow-auto">
            <div className="mb-6 fh:mb-10">
              <p className="topic mb-2 font-serif text-orange-400 text-lg fh:text-5xl">
                work experience
              </p>

              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
            </div>

            <div className="mb-6 fh:mb-10">
              <p className="topic topic mb-2 serif text-orange-400 text-lg fh:text-5xl">
                work experience
              </p>
              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>

              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);
