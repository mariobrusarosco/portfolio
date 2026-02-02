export const HomeMainScreen = () => {
	return (
		<main data-ui="home-main-screen" className="pt-20">
			<div
				data-ui="home-page-heading"
				className="px-10 flex justify-between gap-4"
			>
				<div>
					<h2
						data-ui="home-page-title"
						className="text-6xl text-background font-display uppercase"
					>
						Mario Brusarosco
					</h2>
					<h3
						data-ui="home-page-subtitle"
						className="text-2xl text-secondary font-display uppercase"
					>
						Software Developer
					</h3>
				</div>
				<div data-ui="socials" className="grid gap-0">
					<span>LinkedIn</span>
					<span>GitHub</span>
				</div>
			</div>
		</main>
	);
};
("");
