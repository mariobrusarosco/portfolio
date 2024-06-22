import { ScreenHeading } from "@/domain/shared/components/screen-heading";
import { ProjectsList } from "@/domain/side-projects/components/projects-list";

const SideProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-ui="side-projects-layout" className="h-full flex flex-col">
      <ScreenHeading prefix="these are my" title="side projects" />

      {/* <div
        data-ui="side-projects-main-content"
        className="flex flex-col pb-12 lg:pb-0 lg:flex-1 xl:gap-x-16 xl:justify-between"
      > */}
      <ProjectsList />

      {children}
      {/* </div> */}
    </div>
  );
};

export default SideProjectsLayout;
