import { ListOfExperiences } from "@/domain/experience/components/list-of-experiences";
import { ScreenHeading } from "@/domain/shared/components/screen-heading";

const ExperienceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section data-ui="experience-layout" className="h-full flex flex-col">
      <ScreenHeading prefix="these are my" title="experiences" />

      <div className="overflow-hidden flex flex-col pb-12">
        <ListOfExperiences />

        {children}
      </div>
    </section>
  );
};

export default ExperienceLayout;
