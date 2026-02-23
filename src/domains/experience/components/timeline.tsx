import { useState } from "react";
import { ExperienceWheel } from "@/domains/experience/components/whell";
import { EXPERIENCES } from "@/domains/experience/constants";
import { cn } from "@/lib/utils";

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
							key={experience.id}
							data-ui="experience-timeline-item"
							className="grid place-items-center relative cursor-pointer"
							onClick={() => handleSelectExperience(experience)}
						>
							<p
								data-ui="experience-timeline-item-date"
								className="text-sm uppercase font-secondary  text-light-gray"
							>
								{experience.startDate}
							</p>
							<ExperienceWheel
								isSelected={isSelected}
								className="w-7 h-7"
							/>
							<p data-ui="experience-timeline-item-company" className="text-2xl uppercase font-display font-bold text-background w-fit">
								{experience.company}
							</p>

						</li>
					);
				})}
			</ul>
			<hr
				aria-hidden
				className="h-[1px] border-background absolute top-[33px] left-7 w-[calc(100%-64px)]"
			/>
		</div>
	);
};
