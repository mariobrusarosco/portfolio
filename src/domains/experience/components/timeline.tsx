import { ExperienceWheel } from "@/domains/experience/components/whell";
import { EXPERIENCES } from "@/domains/experience/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

const firstExperience = EXPERIENCES[0];

export const ExperienceTimeline = ({
	selectedExperience,
	handleSelectExperience,
}: {
	selectedExperience: typeof firstExperience;
	handleSelectExperience: (experience: typeof firstExperience) => void;
}) => {
	return (
		<div data-ui="experience-timeline" className="relative">
			<ul data-ui="experience-timeline-list" className="flex justify-between">
				{EXPERIENCES.map((experience) => {
					const isSelected = selectedExperience.id === experience.id;
					return (
							<li
							data-ui="experience-timeline-item"
							className="grid place-items-center relative cursor-pointer"
							onClick={() => handleSelectExperience(experience)}
						>
							<div
								data-ui="timeline-bar"
								className="absolute top-4 left-[30px] h-[1px] bg-primary"
							/>
							{<ExperienceWheel className={cn("w-7 h-7", {
								'opacity-0': !isSelected,
							})} />}
							<h3
								data-ui="experience-timeline-item-title"
								className="text-sm uppercase font-display font-bold text-background"
							>
								{experience.startDate}
								</h3>
							</li>
					);
				})}	
			</ul>
			<hr aria-hidden className="h-0 border-b border-dashed border-background/20 absolute top-[13px] left-4 w-[calc(100%-32px)]" />
		</div>
	);
};
