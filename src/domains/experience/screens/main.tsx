import { CareerTimeline } from "@/domains/experience/components/career-timeline";
import { ExperienceDynamicDisplay } from "@/domains/experience/components/experience-dynamic-display";
import { ExperienceLocationAndDate } from "@/domains/experience/components/experience-location-and-data";
import { useExperience } from "@/domains/experience/hooks/use-experience";
import { PageHeading } from "@/domains/global/components/page-heading";

export const ExperienceMainScreen = () => {
	const { experience } = useExperience();

	return (
		<div
			data-ui="experience-main-screen"
			className="h-full flex pt-[200px] gap-18"
		>
			<PageHeading title="Experience" className="text-background" />
			<CareerTimeline selectedExperience={experience} />

			<div className="flex flex-1 gap-18">
				<ExperienceLocationAndDate selectedExperience={experience} />
				<ExperienceDynamicDisplay selectedExperience={experience} />
			</div>
		</div>
	);
};
