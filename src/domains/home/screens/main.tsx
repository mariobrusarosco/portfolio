import { GitHubLink } from "@/domains/global/components/github-link";
import { LinkedInLink } from "@/domains/global/components/linkedin-link";

export const HomeMainScreen = () => {
	return (
		<main
			data-ui="home-main-screen"
			className="h-screen px-10 grid place-items-center "
		>
			<div className="flex gap-10 justify-between pb-[350px]">
				<div data-ui="home-page-heading" className="justify-between gap-4">
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

				<div className="grid gap-6 place-content-start max-w-[465px]">
					{/* <p className="text-2xl text-background font-display lowercase tracking-wide">
						a front end developer who enjoys creating digital products
					</p> */}

					<div className="flex gap-4 align-end h-fit">
						<LinkedInLink />
						<GitHubLink />
					</div>
				</div>
			</div>
		</main>
	);
};
