import { ListOfKnowledge } from "@/domain/knowledge/components/list-of-knowledge";
import { ScreenHeading } from "@/domain/shared/components/screen-heading";

const KnowledgeLayout = () => {
  return (
    <div data-ui="knowledge-layout" className="h-full flex flex-col">
      <ScreenHeading prefix="this is my" title="knowledge" />

      <ListOfKnowledge />
    </div>
  );
};

export default KnowledgeLayout;
