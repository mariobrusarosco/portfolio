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
				className="text-xl font-bold font-display bg-background uppercase text-white px-3 py-4 pr-12 w-[180px]"
			>
				{selectedExperience.company}
			</h3>

			<div
				data-ui="experience-role-location-and-date"
				className="flex gap-4 justify-around"
			>
				<div className="grid place-content-center">
					<span className="text-background font-bold font-display uppercase">
						{selectedExperience.mode} from
					</span>
					<span className="text-background  text-xl font-light font-body">
						{selectedExperience.location}
					</span>
				</div>

				<hr className="w-[1px] h-14 border-1 border-dashed border-background/10" />

				<div className="grid place-content-center">
					<span className="text-background  font-bold font-display uppercase ">
						role
					</span>
					<span className="text-background text-xl font-light font-body">
						{selectedExperience.role}
					</span>
				</div>

				<hr className="w-[0.5px] h-14 border-1 border-dashed border-background/10" />

				<div className="flex gap-4">
					<ExperienceCalendar
						label="from"
						date={selectedExperience.startDate}
					/>
					<ExperienceCalendar label="to" date={selectedExperience.endDate} />
				</div>
			</div>
		</div>
	);
};
