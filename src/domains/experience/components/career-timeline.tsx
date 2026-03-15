import { ExperienceWheel } from "@/domains/experience/components/whell";
import { EXPERIENCES } from "@/domains/experience/constants";
import type { Experience } from "@/domains/experience/types";

export const CareerTimeline = ({
	selectedExperience,
	handleSelectExperience,
}: {
	selectedExperience: Experience;
	handleSelectExperience: (experience: Experience) => void;
}) => {
	return (
		<div data-ui="experience-timeline" className="relative">
			<ul data-ui="experience-timeline-list" className="flex justify-between">
				{EXPERIENCES.map((experience) => {
					const isSelected = selectedExperience.id === experience.id;
					return (
						<li
							key={experience.id}
							data-ui="experience-timeline-item"
							className="grid place-items-center relative cursor-pointer gap-2"
							onClick={() => handleSelectExperience(experience)}
						>
							<p
								data-ui="experience-timeline-item-date"
								className="text-uppercase font-display text-background"
							>
								{experience.startDate}
							</p>
							<ExperienceWheel isSelected={isSelected} className="w-7 h-7" />
							<p
								data-ui="experience-timeline-item-company"
								className="text-2xl uppercase font-display font-bold text-background w-fit"
							>
								{experience.company}
							</p>
						</li>
					);
				})}
			</ul>
			<hr
				aria-hidden
				className="h-[1px] border-background absolute top-[45px] left-7 w-[calc(100%-64px)]"
			/>
		</div>
	);
};
