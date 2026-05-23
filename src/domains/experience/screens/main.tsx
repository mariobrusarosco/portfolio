import { CareerTimeline } from "@/domains/experience/components/career-timeline";
import { ExperienceDynamicDisplay } from "@/domains/experience/components/experience-dynamic-display";
import { ExperienceLocationAndDate } from "@/domains/experience/components/experience-location-and-data";
import { useExperience } from "@/domains/experience/hooks/use-experience";
import { PageHeading } from "@/domains/global/components/page-heading";

export const ExperienceMainScreen = () => {
	const { experience } = useExperience();

	return (
		<main
			data-ui="experience-main-screen"
			className="h-full justify-between items-start relative"
		>
			<PageHeading title="Experience" />

			<div className="grid grid-cols-2 justify-between p-6">
				<ExperienceLocationAndDate selectedExperience={experience} />
				<CareerTimeline selectedExperience={experience} />
			</div>

			<ExperienceDynamicDisplay selectedExperience={experience} />
		</main>
	);
};
