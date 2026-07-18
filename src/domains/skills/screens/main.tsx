import { PageHeading } from "@/domains/global/components/page-heading";
import { SkillsContent } from "@/domains/skills/components/skills-content";
import { SkillsNavigationBar } from "@/domains/skills/components/skills-navigation-bar";
import { SKILLS } from "@/domains/skills/constants";
import { useSkillAspect } from "@/domains/skills/hooks/use-skill-aspect";

export const SkillsMainScreen = () => {
	const { selectedAspect } = useSkillAspect();
	// const skillsByAspect = SKILLS[selectedAspect];

	return (
		<div data-ui="skills-main-screen" className="h-fullflex pt-[150px] gap-18">
			<PageHeading title="Skills" />

			<SkillsContent />
		</div>
	);
};
