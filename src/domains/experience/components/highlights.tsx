export const Hightlights = ({ description }: { description: string[][] }) => {
	return (
		<div className="flex gap-2">
			{description.map((item) => (
				<p
					key={item.slice(0, 5)}
					className="text-background font-light font-body text-2xl leading-light "
				>
					{item}
				</p>
			))}
		</div>
	);
};
