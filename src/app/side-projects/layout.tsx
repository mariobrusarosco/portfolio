import { ListOfExperiences } from "@/domain/experience/components/list-of-experiences";
import { ScreenHeading } from "@/domain/shared/components/screen-heading";
import { ProjectsList } from "@/domain/side-projects/components/projects-list";
import { Suspense } from "react";

const SideProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-ui="side-projects-layout" className="h-full flex flex-col">
      <ScreenHeading prefix="these are my" title="side projects" />

      <div
        data-ui="main-content"
        className="flex flex-col pb-12 lg:pb-0 lg:flex-1 xl:gap-x-16 xl:justify-between"
      >
        <ProjectsList />

        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </div>
    </div>
  );
};

export default SideProjectsLayout;
