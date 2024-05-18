"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { sideProjects } from "@/domain/side-projects/constants";
import { motion } from "framer-motion";

import { SideProject } from "@/domain/side-projects/typing/interfaces-and-enums";
import { useEffect, useRef } from "react";
import { screens } from "@/domain/shared/animations";
import { Carrousel } from "@/domain/shared/components/carrousel/carrousel";
import { updateParamsOnURL } from "@/domain/shared/utils/url-manipulation";
import animations from "@/domain/side-projects/animations";
import { Project } from "@/domain/side-projects/components/project";
import { cn } from "@/domain/shared/utils/classnames";

export default function SideProjects() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedProject = sideProjects.find((project) => {
    return project.id === searchParams.get("project_id");
  });
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
  console.log("selectedProject", !!selectedProject);

  return (
    <div className="overflow-hidden container x-global-spacing h-full grid grid-cols-1 lg:grid-cols-2 md:content-start fh:relative">
      <div className="column-wrapper lg:col-span-2 fh:col-span-1">
        <HeadingAndList />

        <section className="list-of-knowledge mt-16">
          <motion.ul
            className="flex flex-wrap gap-8 pb-4 justify-center md:gap-14 lg:gap-x-6 lg:gap-y-6"
            // variants={animations.listOfSkills}
            initial="hidden"
            animate="visible"
          >
            {sideProjects.map((project) => (
              <motion.li
                className=""
                key={project.id}
                onClick={() => handleSelectProject(project.id)}
                variants={animations.listItem}
              >
                <Project
                  project={project}
                  selectedProjectId={selectedProject?.id}
                />
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <motion.div
          initial="default"
          variants={animations.projectContainer}
          animate={selectedProject ? "selected" : "default"}
          className={cn(
            "project-details-overlay h-full absolute w-screen left-0 top-0 pt-[150px] x-global-spacing lg:pt-[80px] fh:container",
            {
              invisible: !selectedProject,
            }
          )}
        >
          <div className="skill-details-content h-full py-8 px-6 border border-active-primary scrollable overflow-x-auto lg:border-none lg:py-2 lg:px-2 lg:flex">
            <div className="heading flex justify-between items-center mb-10 lg:min-w-[450px] lg:mb-0  lg:sticky lg:top-0">
              <p className="font-serif text-2xl text-active-primary font-regular lg:text-6xl">
                {selectedProject?.label}
              </p>

              <div
                className="flex gap-2 justify-between items-center  cursor-pointer p-4"
                onClick={() => {
                  router.push(window.location.pathname);
                }}
              >
                <p className="uppercase text-pink-100 font-sans text-xs">
                  back
                </p>
                <p>--</p>
              </div>
            </div>

            <div className="flex flex-col gap-x-4 lg:flex-row lg:ml-[100px] fh:flex-col fh:flex-1 fh:items-center justify-center">
              <div className="mb-6 fh:mb-10">
                <p className="topic mb-2 font-serif text-blue-green-300 text-lg fh:text-5xl">
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
                <p className="topic topic mb-2 serif text-blue-green-300 text-lg fh:text-5xl">
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
      </div>
    </div>
  );
}

const HeadingAndList = () => {
  return (
    <section className="heading-and-list-section pt-12 md:pt-4 lg:col-span-2 lg:pt-2">
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

const DetailSection = (props: { selectedProject: SideProject }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref?.current?.scroll({ top: 0 });
  }, [props.selectedProject]);

  return (
    <div
      ref={ref}
      className="second-section bg-primary-base  p-5 flex flex-col gap-y-2 overflow-auto tablet:py-16 tablet:px-7 desktop:pt-24 desktop:px-12"
    >
      <ProjectDetail
        project={props.selectedProject}
        key={props.selectedProject?.id}
      />
    </div>
  );
};
