import { Link } from "@tanstack/react-router";
import { GitHubLink } from "@/domains/global/components/github-link";
import { LinkedInLink } from "@/domains/global/components/linkedin-link";
import { Wheel } from "@/domains/global/components/whell";

export function AppSidebar() {
	return (
		<aside
			data-ui="app-sidebar"
			className="flex flex-col justify-center items-center gap-4 px-6 border-r border-background/20 w-[180px]"
		>
			{/* <Wheel /> */}
			<ul data-ui="social" className="flex justify-center gap-4 mt-[120px]">
				<li>
					<LinkedInLink className="w-4" />
				</li>
				<li>
					<GitHubLink className="w-4" />
				</li>
			</ul>
		</aside>
	);
}
