import type { Experience } from "@/domains/experience/types";
import { Divider } from "@/domains/global/components/divider";

export const ExperienceLocationAndDate = ({
	selectedExperience,
}: {
	selectedExperience?: Experience;
}) => {
	return (
		<div
			data-ui="experience-selected"
			className="flex flex-col min-w-[192px] gap-8"
		>
			{selectedExperience && (
				<>
					<h3
						data-ui="experience-selected-title"
						className="w-fit text-4xl font-bold text-background font-display uppercase"
					>
						{selectedExperience.company}
					</h3>

					<div
						data-ui="experience-role-location-and-date"
						className="flex flex-col gap-3"
					>
						<div className="flex flex-col">
							<span className="text-background  font-bold font-display uppercase text-xl">
								role
							</span>
							<span className="text-background  uppercase font-light font-body">
								{selectedExperience.role}
							</span>
						</div>

						<Divider direction="horizontal" />

						<div className="flex flex-col">
							<span className="text-background font-bold font-display uppercase text-xl">
								{selectedExperience.mode} from
							</span>
							<span className="text-background  uppercase font-light font-body">
								{selectedExperience.location}
							</span>
						</div>

						<Divider direction="horizontal" />

						<div className="flex gap-4">
							<div className="flex flex-col">
								<span className="text-background font-bold font-display uppercase text-xl">
									start
								</span>
								<span className="text-background  uppercase font-light font-body">
									{selectedExperience.startDate}
								</span>
							</div>

							<div className="flex flex-col">
								<span className="text-background font-bold font-display uppercase text-xl">
									end
								</span>
								<span className="text-background  uppercase font-light font-body">
									{selectedExperience.endDate ?? "present"}
								</span>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};
