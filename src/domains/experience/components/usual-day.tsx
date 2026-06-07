export const UsualDay = ({ efforts }: UsualDayProps) => {
	return (
		<div className="flex flex-col ">
			<ul className="grid grid-cols-[repeat(3,1fr)] gap-8">
				{efforts.map((effort) => (
					<li key={effort.title} className="grid">
						<h4 className="text-lg font-light font-display uppercase text-background line-height-0.1">
							{effort.title}
						</h4>
						<div className="flex items-center gap-2 h-[39px]">
							<div
								className="bg-foreground h-full"
								style={{
									width: `${effort.percentage}%`,
								}}
							/>
							<p className="text-4xl font-semibold font-display uppercase text-background leading-none trim-boundary">
								{effort.percentage}%
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

interface UsualDayProps {
	efforts: UsualDayEffort[];
}

interface UsualDayEffort {
	title: string;
	percentage: number;
}
