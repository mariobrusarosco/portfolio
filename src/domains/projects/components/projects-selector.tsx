import { ProjectHexagon } from "@/domains/projects/components/project-hexagon";
import type { Project } from "@/domains/projects/types";
import { cn } from "@/lib/utils";

interface ProjectsSelectorProps {
	projects: Project[];
	onSelect: (project: Project) => void;
}

export const ProjectsSelector = ({
	projects,
	onSelect,
}: ProjectsSelectorProps) => (
	<div className="flex gap-30">
		{projects.map((project) => (
			<button
				key={project.id}
				type="button"
				className="group h-38 w-34 cursor-pointer focus-visible:outline-none"
				onClick={() => onSelect(project)}
			>
				<ProjectHexagon
					className={cn(
						"h-full w-full px-5 text-center font-display font-medium text-neutral-white text-xl uppercase transition-all duration-400",
						project.accent === "primary" ? "bg-primary" : "bg-background",
					)}
				>
					{project.name}
				</ProjectHexagon>
			</button>
		))}
	</div>
);
