interface ExperienceCalendarProps {
	date: string | undefined;
}

export const ExperienceCalendar = ({
	date,
}: ExperienceCalendarProps) => {
	return (
		<div data-ui="calendar-container" className="">


			<div data-ui="calendar-body" className="">
				<div data-ui="calendar-header" className="l" />
				<div data-ui="calendar-content" className="">
					<span
						data-ui="calendar-date"
						className="font-display font-bold text-background tracking-wide uppercase"
					>
						{date || "Present"}
					</span>
				</div>
			</div>
		</div>
	);
};
