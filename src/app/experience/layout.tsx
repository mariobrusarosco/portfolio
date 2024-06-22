import { ListOfExperiences } from "@/domain/experience/components/list-of-experiences";
import { ScreenHeading } from "@/domain/shared/components/screen-heading";

const ExperienceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-ui="experience-layout" className="flex flex-col h-full">
      <ScreenHeading prefix="these are my" title="experiences" />

      <div
        data-ui="experience-main-content"
        className="flex flex-col overflow-hidden"
      >
        <ListOfExperiences />

        {children}
      </div>
    </div>
  );
};

export default ExperienceLayout;
