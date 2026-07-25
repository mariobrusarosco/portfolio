import type { ExperienceHighlight } from "@/domains/experience/types";

export const Highlights = ({
	highlights,
}: {
	highlights: ExperienceHighlight[];
}) => {
	return (
		<div className="flex flex-col gap-5">
			{highlights.map((highlight) => (
				<div key={highlight.title}>
					<h4 className="font-display font-semibold text-background text-lg uppercase">
						{highlight.title}
					</h4>
					<p className="font-body font-light text-background text-xl leading-light">
						{highlight.description}
					</p>
				</div>
			))}
		</div>
	);
};
