interface ExperienceCalendarProps {
	date: string | undefined;
	label: string;
}

export const ExperienceCalendar = ({
	date,
	label,
}: ExperienceCalendarProps) => {
	return (
		<div className="grid gap-1 place-items-center">
			<span className="text-xs text-background font-bold font-display uppercase">
				{label}
			</span>
			<div data-ui="calendar-container" className="relative">
				<span
					data-ui="calendar-line"
					className="absolute -top-1 left-3 w-[1.5px] h-[7px] rounded-lg bg-surface "
				/>
				<span
					data-ui="calendar-line"
					className="absolute -top-1 right-3 w-[1.5px] h-[7px] rounded-lg bg-surface"
				/>
				<div
					data-ui="calendar-header"
					className="h-2 bg-background rounded-t-sm "
				/>
				<div
					data-ui="calendar-content"
					className="bg-background/10 p-1 rounded-b-sm"
				>
					<span
						data-ui="calendar-date"
						className="font-display font-bold text-sm text-background tracking-wide uppercase"
					>
						{date || "Present"}
					</span>
				</div>
			</div>
		</div>
	);
};
