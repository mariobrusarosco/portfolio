export const UsualDay = ({ efforts }: UsualDayProps) => {
	return (
		<div>
			<h3 className="text-2xl font-bold font-display uppercase text-background mb-4">
				usual day
			</h3>
			<ul className="grid grid-cols-[repeat(2,1fr)] gap-4">
				{efforts.map((effort) => (
					<li key={effort.title} className="grid">
						<h4 className="text-xl font-bold font-display uppercase text-foreground line-height-0.1">
							{effort.title}
						</h4>
						<div className="flex items-center gap-2 h-[39px]">
							<div
								className="bg-foreground h-full"
								style={{
									width: `${effort.percentage}%`,
								}}
							/>
							<p className="text-4xl font-bold font-display uppercase text-foreground leading-none trim-boundary">
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
