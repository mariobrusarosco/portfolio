import { ExperienceTimeline } from "@/domains/experience/components/timeline";
import { ExperienceCalendar } from "@/domains/experience/components/calendar";
import { useExperience } from "@/domains/experience/hooks/use-experience";

export const ExperienceMainScreen = () => {
	const { selectedExperience, handleSelectExperience } = useExperience();
	const { role, mode, location } = selectedExperience;
	
	return (
		<main
			data-ui="experience-main-screen"
			className="h-full flex gap-20 items-start"
		>
			<h2
				data-ui="experience-page-title"
				className="w-fit h-fit bg-foreground font-semibold text-6xl text-background font-display uppercase py-6 pl-6 pr-20 line-height-0.5"
			>
				Experience
			</h2>

			<div className="grid gap-4">
				<ExperienceTimeline selectedExperience={selectedExperience} handleSelectExperience={handleSelectExperience} />

				<div
					data-ui="experience-selected"
					className="flex gap-4 items-center flex-1 my-6"
				>
					<h3
						data-ui="experience-selected-title"
						className="text-lg font-bold  font-display bg-background uppercase text-white px-3 py-2 pr-6 w-fit"
					>
						{selectedExperience.company}
					</h3>

					<div
						data-ui="experience-role-location-and-date"
						className="flex gap-4"
					>
						<div className="grid">
							<span className="text-background font-bold font-display uppercase">
								{mode} from
							</span>
							<span className="text-background/50 font-light font-body text-sm">
								{location}
							</span>
						</div>

						<hr className="w-[1px] h-full border-l border-background/20 dashed" />

						<div className="grid">
							<span className="text-background font-bold font-display uppercase">
								role
							</span>
							<span className="text-background/50 font-light font-body text-sm">
								{role}
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
			</div>
		</main>
	);
};
