interface ExperienceCalendarProps {
	month?: string;
	day?: string | number;
}

export const ExperienceCalendar = ({
	month = "JAN",
	day = "25",
}: ExperienceCalendarProps) => {
	return (
		<div data-ui="calendar-container" className="">
			<div data-ui="calendar-rings" className="">
				{/* <div
					data-ui="calendar-ring"
					className="w-3 h-5 bg-secondary rounded-md shadow-md"
				/>
				<div
					data-ui="calendar-ring"
					className="w-3 h-5 bg-secondary rounded-md shadow-md"
				/> */}
			</div>

			<div data-ui="calendar-body" className="">
				<div data-ui="calendar-header" className="l" />
				<div data-ui="calendar-content" className="">
					<span
						data-ui="calendar-date"
						className="font-display font-bold text-background tracking-wide uppercase"
					>
						{month} {day}
					</span>
				</div>
			</div>
		</div>
	);
};
