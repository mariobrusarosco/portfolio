import { useState } from "react";
import { PageHeading } from "@/domains/global/components/page-heading";
import { SkillsContent } from "@/domains/skills/components/skills-content";
import { SkillsNavigationBar } from "@/domains/skills/components/skills-navigation-bar";
import type { SkillsFilters } from "@/domains/skills/types";

const INITIAL_FILTERS: SkillsFilters = {
	product: true,
	"front-end": false,
	"back-end": false,
	mostRecent: false,
};

export const SkillsMainScreen = () => {
	const [filters, setFilters] = useState(INITIAL_FILTERS);

	const updateFilter = (filter: keyof SkillsFilters, checked: boolean) => {
		setFilters((current) => ({ ...current, [filter]: checked }));
	};

	const updateAllCategories = (checked: boolean) => {
		setFilters((current) => ({
			...current,
			product: checked,
			"front-end": checked,
			"back-end": checked,
		}));
	};

	return (
		<div
			data-ui="skills-main-screen"
			className="flex h-full flex-col items-center px-8 pt-20"
		>
			<PageHeading title="Skills" />

			<SkillsNavigationBar
				filters={filters}
				onChange={updateFilter}
				onAllChange={updateAllCategories}
			/>

			<SkillsContent filters={filters} />
		</div>
	);
};
