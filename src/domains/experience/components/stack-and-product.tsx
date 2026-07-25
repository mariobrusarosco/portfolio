export const Stack = ({ stack }: { stack: string[] }) => {
	return (
		<div className="flex flex-col gap-2">
			<p className="text-background  font-bold font-display uppercase text-xl">
				tech
			</p>
			<ul className="flex flex-wrap gap-4 mt-2">
				{stack.map((item) => (
					<p
						key={item}
						className="p-2 text-background bg-surface font-display text-lg font-semibold uppercase"
					>
						{item}
					</p>
				))}
			</ul>
		</div>
	);
};

export const Tools = ({ tools }: { tools?: string[] }) => {
	if (tools === undefined || tools.length === 0) return null;

	return (
		<div className="flex flex-col gap-2">
			<p className="text-background  font-bold font-display uppercase text-xl">
				tools
			</p>
			<ul className="flex flex-wrap gap-4 mt-2">
				{tools.map((item) => (
					<p
						key={item}
						className="p-2 text-background bg-primary font-display text-lg font-semibold uppercase"
					>
						{item}
					</p>
				))}
			</ul>
		</div>
	);
};
