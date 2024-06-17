import { ListOfKnowledge } from "@/domain/knowledge/components/list-of-knowledge";
import { ScreenHeading } from "@/domain/shared/components/screen-heading";

const KnowledgeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-ui="knowledge-layout" className="h-full flex flex-col">
      <ScreenHeading prefix="this is my" title="knowledge" />

      <div className="relative">
        <ListOfKnowledge />

        {/* {children} */}
      </div>
    </div>
  );
};

export default KnowledgeLayout;
