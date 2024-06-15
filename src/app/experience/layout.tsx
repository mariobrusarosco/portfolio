import { ListOfExperiences } from "@/domain/experience/components/list-of-experiences";
import { ScreenHeading } from "@/domain/shared/components/screen-heading";

const ExperienceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-ui="experience-layout" className="h-full flex flex-col">
      <ScreenHeading prefix="these are my" title="experiences" />

      <div className="overflow-hidden flex flex-col pb-12 lg:flex-row lg:pb-0 lg:flex-1 xl:gap-x-16 xl:justify-between">
        <ListOfExperiences />

        {children}
      </div>
    </div>
  );
};

export default ExperienceLayout;
