import { ExperienceWheel } from "@/domains/experience/components/whell";
import { EXPERIENCES } from "@/domains/experience/constants";

export const ExperienceTimeline = () => {
	return (
		<div data-ui="experience-timeline" className="">
			<ul data-ui="experience-timeline-list" className="flex justify-between">
				{EXPERIENCES.map((experience) => (
					<ExperienceTimelineItem
						key={experience.startDate}
						experience={experience}
					/>
				))}
			</ul>
		</div>
	);
};

const ExperienceTimelineItem = ({
	experience,
}: {
	experience: (typeof EXPERIENCES)[number];
}) => {
	return (
		<li
			data-ui="experience-timeline-item"
			className="grid place-items-center relative"
		>
			<div
				data-ui="timeline-bar"
				className="absolute top-4 left-[30px] h-[1px]  bg-primary"
			/>
			<ExperienceWheel className="w-7 h-7" />
			<h3
				data-ui="experience-timeline-item-title"
				className="text-sm uppercase font-display font-bold text-background"
			>
				{experience.startDate}
			</h3>
		</li>
	);
};
