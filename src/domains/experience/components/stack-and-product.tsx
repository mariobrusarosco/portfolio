export const Stack = ({ stack }: { stack: string[] }) => {
	return (
		<div className="h-fit">
			<h3 className="text-2xl font-bold font-display uppercase text-background mb-2">
				stack
			</h3>

			<div className="flex flex-wrap gap-4">
				{stack.map((item) => (
					<p
						key={item}
						className="p-2 text-background bg-foreground font-display text-lg font-semibold uppercase"
					>
						{item}
					</p>
				))}
			</div>
		</div>
	);
};

export const Tools = ({ tools }: { tools?: string[] }) => {
	if (tools === undefined || tools.length === 0) return null;

	return (
		<div className="h-fit">
			<h3 className="text-2xl font-bold font-display uppercase text-background">
				tools
			</h3>

			<div className="flex flex-wrap gap-4 font-display text-lg font-semibold uppercase text-background">
				{tools.map((item) => (
					<p key={item} className="p-2 bg-primary">
						{item}
					</p>
				))}
			</div>
		</div>
	);
};
