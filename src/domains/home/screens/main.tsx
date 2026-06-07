import { GitHubLink } from "@/domains/global/components/github-link";
import { LinkedInLink } from "@/domains/global/components/linkedin-link";
import { Wheel } from "@/domains/home/components/whell";

export const HomeMainScreen = () => {
	return (
		<main data-ui="home-main-screen" className="h-screen flex w-full">
			<div className="h-full flex w-full mx-12 justify-between items-center border-r border-l border-gray-300">
				<div
					data-ui=""
					className="flex w-full px-18 py-20 gap-4 border-b border-t border-t-gray-300 border-b-gray-300 "
				>
					<div className="max-w-[662px]">
						<h2
							data-ui="home-page-title"
							className="w-full leading-24 trim-boundary text-9xl text-background font-display uppercase font-semibold tracking-wide"
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

					<Wheel />
				</div>
				<div className="h-full flex items-center border-t border-b border-l border-gray-300 group">
					<div className="flex flex-col flex-col  gap-4 gap-12 p-10  border-gray-300 border-y group-hover:bg-teal-900 transition-all duration-500">
						<LinkedInLink className="group-hover:fill-white" />
						<GitHubLink className="group-hover:fill-white" />
					</div>
				</div>
			</div>
		</main>
	);
};
