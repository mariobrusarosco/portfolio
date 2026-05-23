import { Link } from "@tanstack/react-router";
import { GitHubLink } from "@/domains/global/components/github-link";
import { LinkedInLink } from "@/domains/global/components/linkedin-link";

export default function Header() {
	return (
		<header
			data-ui="app-main-header"
			className="flex items-center justify-end gap-10 text-background p-10"
		>
			<Link to="/">
				<h1 className="text-base font-semibold font-display uppercase tracking-wide">
					mario brusarosco
				</h1>
			</Link>
			<ul data-ui="social" className="flex items-center gap-4">
				<li>
					<LinkedInLink className="w-4" />
				</li>
				<li>
					<GitHubLink className="w-4" />
				</li>
			</ul>
		</header>
	);
}
