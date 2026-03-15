import { CareerTimeline } from "@/domains/experience/components/career-timeline";
import { ExperienceLocationAndDate } from "@/domains/experience/components/experience-location-and-data";
import { Hightlights } from "@/domains/experience/components/highlights";
import {
	Stack,
	Tools,
} from "@/domains/experience/components/stack-and-product";
import { UsualDay } from "@/domains/experience/components/usual-day";
import { useExperience } from "@/domains/experience/hooks/use-experience";

export const ExperienceMainScreen = () => {
	const { selectedExperience, handleSelectExperience } = useExperience();

	return (
		<main
			data-ui="experience-main-screen"
			className="h-full flex gap-20 items-start pr-12"
		>
			<h2
				data-ui="experience-page-title"
				className="w-fit h-fit bg-foreground font-semibold text-6xl text-background font-display uppercase py-6 pl-6 pr-20 line-height-0.5"
			>
				Experience
			</h2>

			<div className="grid gap-4">
				<CareerTimeline
					selectedExperience={selectedExperience}
					handleSelectExperience={handleSelectExperience}
				/>

				<ExperienceLocationAndDate selectedExperience={selectedExperience} />

				<div className="grid grid-cols-2">
					<div className="grid gap-6 pr-12">
						<Hightlights description={selectedExperience.description} />
						<UsualDay efforts={selectedExperience.efforts} />
					</div>

					<div className="grid gap-6 pr-12">
						<Stack stack={selectedExperience.stack} />
						<Tools tools={selectedExperience.tools} />
					</div>
				</div>
			</div>
		</main>
	);
};
