"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { screens } from "@/domain/shared/animations";
import { sideProjects } from "@/domain/side-projects/constants";
import { motion } from "framer-motion";
import { ProjectDetail } from "@/domain/side-projects/components/project-detail";
import { SideProject } from "@/domain/side-projects/typing/interfaces-and-enums";
import { useEffect, useRef } from "react";

export default function SideProjects() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // const handleProjectSelection = (index: number) => {
  //   const queryParams = sideProjects[index].queryParams;
  //   const queryParamsString = updateParamsOnURL(searchParams, queryParams);

  //   router.push(`${pathname}?${queryParamsString}`);
  // };

  const projectId = searchParams.get("id");
  const selectedProjectIndex = sideProjects.findIndex(
    (project) => project.id === projectId
  );
  const selectedProject = sideProjects[selectedProjectIndex] || sideProjects[0];

  return (
    <>
      <div className="first-section flex flex-col items-center justify-around tablet:h-[400px] tablet:my-auto tablet:mx-0 desktop:h-full desktop:justify-start desktop:pt-24">
        <div className="text-center">
          <motion.h2
            initial="initial"
            animate="animate"
            variants={screens.heading}
            className="text-primary-white text-3xl tablet:text-4xl"
          >
            Side Projects
          </motion.h2>
        </div>

        <section className="w-full max-w-[270px]">
          <div className="desktop:hidden">
            {/* <Carrousel
              initialSlide={selectedProjectIndex}
              list={sideProjects}
              ComponentForSlide={(props: SideProject) => (
                <span className="text-primary-white">{props?.label}</span>
              )}
              onSliderChange={handleProjectSelection}
            /> */}
          </div>

          <div className="hidden desktop:block">
            {/* <SideProjectList onProjectSelection={handleProjectSelection} /> */}
          </div>
        </section>
      </div>

      <DetailSection selectedProject={selectedProject} />
    </>
  );
}

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
