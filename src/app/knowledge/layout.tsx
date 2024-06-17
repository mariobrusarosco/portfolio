import { ListOfKnowledges } from "@/domain/knowledge/components/list-of-knowledges";
import { ScreenHeading } from "@/domain/shared/components/screen-heading";

const KnowledgeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-ui="knowledge-layout" className="h-full flex flex-col">
      <ScreenHeading prefix="this is my" title="knowledge" />

      <div className="">
        <ListOfKnowledges />

        {children}
      </div>
    </div>
  );
};

export default KnowledgeLayout;
