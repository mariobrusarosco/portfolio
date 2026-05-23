import { Link } from "@tanstack/react-router";
import { ExperienceWheel } from "@/domains/experience/components/whell";
import { EXPERIENCES } from "@/domains/experience/constants";
import type { Experience } from "@/domains/experience/types";
import { cn } from "@/lib/utils";

export const CareerTimeline = ({
	selectedExperience,
}: {
	selectedExperience?: Experience;
}) => {
	return (
		<div data-ui="experience-timeline" className="relative">
			<ul data-ui="experience-timeline-list" className="flex  justify-between">
				{Object.values(EXPERIENCES).map((experience) => {
					const isSelected = selectedExperience?.id === experience.id;

					return (
						<Link
							key={experience.id}
							data-ui="experience-timeline-item"
							className="flex gap-2 items-center group cursor-pointer "
							to="/experience"
							search={{ company: experience.id }}
						>
							<p
								data-ui="experience-timeline-item-date"
								className="text-uppercase font-display font-semibold text-background"
							>
								{experience.startDate}
							</p>
							{isSelected ? (
								<ExperienceWheel className="w-7 h-7" />
							) : (
								<div className="w-7 h-7 grid place-items-center">
									<div className="w-1 h-1 rounded-full bg-background" />
								</div>
							)}
							<p
								data-ui="experience-timeline-item-company"
								className={cn(
									"text-2xl uppercase font-display font-bold text-background opacity-0 group-hover:opacity-100 transition-opacity",
									{
										"text-foreground opacity-100": isSelected,
									},
								)}
							>
								{experience.company}
							</p>
						</Link>
					);
				})}
			</ul>
			<hr
				aria-hidden
				className="w-[1px] h-full top-5 left-[85px] bg-background/10 absolute "
			/>
		</div>
	);
};
