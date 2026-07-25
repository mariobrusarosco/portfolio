import { useState } from "react";
import { PageHeading } from "@/domains/global/components/page-heading";
import { ProjectDetails } from "@/domains/projects/components/project-details";
import { ProjectsSelector } from "@/domains/projects/components/projects-selector";
import { PROJECTS } from "@/domains/projects/constants";
import type { Project } from "@/domains/projects/types";

export const ProjectsMainScreen = () => {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	return (
		<div
			data-ui="projects-main-screen"
			className="flex h-full w-full flex-col items-center px-8 pt-20 font-body"
		>
			<PageHeading title="Projects" />

			<div className="h-full  grid place-content-center">
				{selectedProject ? (
					<ProjectDetails
						project={selectedProject}
						onBack={() => setSelectedProject(null)}
					/>
				) : (
					<ProjectsSelector projects={PROJECTS} onSelect={setSelectedProject} />
				)}
			</div>
		</div>
	);
};
