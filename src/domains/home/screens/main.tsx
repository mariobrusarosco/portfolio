import Header from "@/domains/global/components/header";

export const HomeMainScreen = () => {
	return (
		<main
			data-ui="home-main-screen"
			className="h-screen px-10 grid place-items-center "
		>
			<div data-ui="home-page-heading" className="justify-between gap-4">
				<div>
					<h2
						data-ui="home-page-title"
						className="max-w-[662px] leading-24 trim-boundary text-9xl text-background font-display uppercase font-semibold tracking-wide"
					>
						Mario Brusarosco
					</h2>
					<h3
						data-ui="home-page-subtitle"
						className="mt-2 text-4xl text-background trim-boundary font-display lowercase tracking-wide"
					>
						software Developer
					</h3>
				</div>
				<Header />
			</div>
		</main>
	);
};
("");
