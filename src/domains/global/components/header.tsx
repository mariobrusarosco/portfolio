import { Link } from "@tanstack/react-router";
import { GitHubLink } from "@/domains/global/components/github-link";
import { LinkedInLink } from "@/domains/global/components/linkedin-link";

export default function Header() {
	return (
		<header className="flex items-center justify-end gap-10 text-background px-10 pt-6 pb-14">
			<Link to="/">
				<h1 className="text-xl font-bold font-display uppercase tracking-wide">
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
