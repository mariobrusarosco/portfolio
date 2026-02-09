import { ExperienceTimeline } from "@/domains/experience/components/timeline";
import { ExperienceCalendar } from "../components/calendar";

export const ExperienceMainScreen = () => {
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
				<ExperienceTimeline />

				<hr className="w-full h-[1px] border-b border-background/20 dashed my-4" />
				<div
					data-ui="experience-selected"
					className="flex gap-4 items-center flex-1"
				>
					<h3
						data-ui="experience-selected-title"
						className="text-lg font-bold  font-display bg-background uppercase text-white px-3 py-2 pr-6 w-fit"
					>
						Versive
					</h3>

					<div
						data-ui="experience-role-location-and-date"
						className="flex gap-4"
					>
						<div className="grid">
							<span className="text-background font-bold font-display uppercase">
								remote from
							</span>
							<span className="text-background/50 font-light font-body text-sm">
								São Paulo, Brazil
							</span>
						</div>

						<hr className="w-[1px] h-full border-l border-background/20 dashed" />

						<div className="grid">
							<span className="text-background font-bold font-display uppercase">
								role
							</span>
							<span className="text-background/50 font-light font-body text-sm">
								Software Developer
							</span>
						</div>

						<hr className="w-[1px] h-full border-l border-background/20 dashed" />

						<div className="flex gap-4">
							<div className="grid">
								<span className="text-background font-bold font-display uppercase">
									start
								</span>
								<ExperienceCalendar month="JAN" day="20" />
							</div>
							<div className="grid">
								<span className="text-background font-bold font-display uppercase">
									end
								</span>
								<ExperienceCalendar month="DEC" day="20" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
