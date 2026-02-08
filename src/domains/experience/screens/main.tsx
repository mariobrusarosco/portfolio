export const ExperienceMainScreen = () => {
	return (
		<main
			data-ui="experience-main-screen"
			className="h-full flex gap-20 items-center "
		>
			<h2
				data-ui="experience-page-title"
				className="w-fit h-fit bg-foreground font-semibold text-6xl text-background font-display uppercase py-4 pl-6 pr-20 line-height-0.5"
			>
				Experience
			</h2>

			<div data-ui="experience-timeline">
				<ul data-ui="experience-timeline-list">
					<li data-ui="experience-timeline-item">
						<h3 data-ui="experience-timeline-item-title">JAN 20</h3>
					</li>
					<li data-ui="experience-timeline-item">
						<h3 data-ui="experience-timeline-item-title">JUL 22</h3>
					</li>
					<li data-ui="experience-timeline-item">
						<h3 data-ui="experience-timeline-item-title">JAN 25</h3>
					</li>
				</ul>
			</div>

			<div data-ui="experience-selected" className="grid gap-2 flex-1">
				<h3
					data-ui="experience-selected-title"
					className="text-lg font-bold bg-background uppercase text-white p-3 pl-6"
				>
					Software Developer
				</h3>
				<p data-ui="experience-selected-description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					quos.
				</p>
			</div>
		</main>
	);
};
