import { ScreenHeading } from "@/domain/shared/components/screen-heading";
import { ProjectsList } from "@/domain/side-projects/components/projects-list";

const SideProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-ui="side-projects-layout" className="h-full flex flex-col">
      <ScreenHeading prefix="these are my" title="side projects" />

      <ProjectsList />

      {children}
    </div>
  );
};

export default SideProjectsLayout;
