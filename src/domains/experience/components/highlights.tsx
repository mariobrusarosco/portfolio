export const Hightlights = ({ description }: { description: string[][] }) => {
	return (
		<div className="flex flex-col gap-10">
			{description.map((item) => (
				<p
					key={item.slice(0, 5).join("")}
					className="text-background font-light font-body text-xl leading-light "
				>
					{item}
				</p>
			))}
		</div>
	);
};
