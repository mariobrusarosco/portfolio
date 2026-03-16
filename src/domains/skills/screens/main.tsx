import { PageHeading } from "@/domains/global/components/page-heading";

export const SkillsMainScreen = () => {
	return (
		<main data-ui="skills-main-screen" className="h-full flex gap-20">
			<PageHeading title="Skills" />

			<div className="flex-1 text-2xl font-body font-light grid gap-12 text-background gap-6 max-w-[576px]">
				skills
			</div>
		</main>
	);
};
