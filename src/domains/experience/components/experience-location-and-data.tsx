import type { Experience } from "@/domains/experience/types";
import { ExperienceCalendar } from "./calendar";

export const ExperienceLocationAndDate = ({
	selectedExperience,
}: {
	selectedExperience: Experience;
}) => {
	return (
		<div
			data-ui="experience-selected"
			className="flex gap-8 items-center flex-1 my-6"
		>
			<h3
				data-ui="experience-selected-title"
				className="text-lg font-bold font-display bg-background uppercase text-white px-3 py-2 pr-12 w-[180px]"
			>
				{selectedExperience.company}
			</h3>

			<div data-ui="experience-role-location-and-date" className="flex gap-4">
				<div className="grid">
					<span className="text-background font-bold font-display uppercase">
						{selectedExperience.mode} from
					</span>
					<span className="text-background font-light font-body">
						{selectedExperience.location}
					</span>
				</div>

				<hr className="w-[1px] h-full border-l border-background/20 dashed" />

				<div className="grid">
					<span className="text-background font-bold font-display uppercase">
						{selectedExperience.mode}
					</span>
					<span className="text-background font-light font-body">
						{selectedExperience.location}
					</span>
				</div>

				<hr className="w-[1px] h-full border-l border-background/20 dashed" />

				<div className="flex gap-4">
					<div className="grid">
						<span className="text-background font-bold font-display uppercase">
							start
						</span>
						<ExperienceCalendar date={selectedExperience.startDate} />
					</div>
					<div className="grid">
						<span className="text-background font-bold font-display uppercase">
							end
						</span>
						<ExperienceCalendar date={selectedExperience.endDate} />
					</div>
				</div>
			</div>
		</div>
	);
};
