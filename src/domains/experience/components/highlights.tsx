export const Hightlights = ({ description }: { description: string }) => {
	return (
		<div className="grid">
			<h3 className="text-2xl font-bold font-display uppercase text-background mb-2">
				highlights
			</h3>
			<p className="text-background font-light font-body text-xl  leading-light">
				{description}
			</p>
		</div>
	);
};
