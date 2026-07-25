import { Code2, DoorOpen, MoveLeft, Palette } from "lucide-react";
import { useId } from "react";
import { ProjectHexagon } from "@/domains/projects/components/project-hexagon";
import type { Project } from "@/domains/projects/types";
import { cn } from "@/lib/utils";

interface ProjectDetailsProps {
	project: Project;
	onBack: () => void;
}

const ACTIONS = [
	{ key: "demo", label: "Try it", icon: DoorOpen },
	{ key: "design", label: "Design", icon: Palette },
	{ key: "code", label: "Code", icon: Code2 },
] as const;

export const ProjectDetails = ({ project, onBack }: ProjectDetailsProps) => {
	const introHeadingId = useId();

	return (
		<div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[160px_minmax(280px,350px)_1fr]">
			<button
				type="button"
				className="cursor-pointer w-fit self-center font-display font-semibold text-2xl text-background uppercase transition-opacity hover:opacity-70 lg:self-start lg:pt-18"
				onClick={onBack}
			>
				Go back
				<span className="">
					<MoveLeft />
				</span>
			</button>

			<section aria-labelledby={introHeadingId} className="text-background">
				<h1 className="font-display font-semibold text-6xl text-background uppercase">
					{project.name}
				</h1>

				<div className="mt-3 grid gap-4 font-display font-light text-lg leading-6">
					{project.intro.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>
			</section>

			<ul className="flex flex-wrap items-start gap-10 lg:pt-12">
				{ACTIONS.map(({ key, label, icon: Icon }) => {
					const href = project.links[key];
					const content = (
						<>
							<span className="font-display font-semibold text-lg uppercase">
								{label}
							</span>
							<ProjectHexagon className="mt-2 h-13 w-12 bg-background text-neutral-white">
								<Icon aria-hidden="true" className="h-5 w-5 stroke-1" />
							</ProjectHexagon>
						</>
					);

					return (
						<li key={key}>
							{href ? (
								<a
									href={href}
									target={href.startsWith("http") ? "_blank" : undefined}
									rel={
										href.startsWith("http") ? "noopener noreferrer" : undefined
									}
									className="group block text-center text-background focus-visible:outline-none"
								>
									{content}
								</a>
							) : (
								<span
									aria-disabled="true"
									className={cn("block text-center text-background opacity-40")}
								>
									{content}
								</span>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
