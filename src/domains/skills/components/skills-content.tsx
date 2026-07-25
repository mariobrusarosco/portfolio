import { BackEndSkills } from "@/domains/skills/components/back-end-skills";
import { FrontEndSkills } from "@/domains/skills/components/front-end-skills";
import { ProductSkills } from "@/domains/skills/components/product-skills";
import type { SkillsFilters } from "@/domains/skills/types";

export const SkillsContent = ({ filters }: { filters: SkillsFilters }) => {
	return (
		<div className="flex items-center justify-strech uppercase text-background font-display mt-[150px] w-full">
			<ProductSkills
				selected={filters.product}
				mostRecent={filters.mostRecent}
			/>
			<div className="flex flex-col gap-10">
				<FrontEndSkills
					selected={filters["front-end"]}
					mostRecent={filters.mostRecent}
				/>
				<BackEndSkills
					selected={filters["back-end"]}
					mostRecent={filters.mostRecent}
				/>
			</div>
		</div>
	);
};
