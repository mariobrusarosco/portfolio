import { Server } from "lucide-react";
import { Wheel } from "@/domains/experience/components/whell";
import { SkillsSet } from "@/domains/skills/components/skills-set";
import { SKILLS } from "@/domains/skills/constants";
import { cn } from "@/lib/utils";

interface BackEndSkillsProps {
	selected: boolean;
	mostRecent: boolean;
}

export const BackEndSkills = ({ selected, mostRecent }: BackEndSkillsProps) => {
	const backEndSkills = SKILLS["back-end"];

	return (
		<div
			data-ui="back-end-skill-set"
			data-selected={selected}
			data-most-recent={mostRecent}
			className={cn(
				"ml-[20px] flex h-[220px] gap-2 transition-opacity w-full",
				!selected && "opacity-20",
			)}
		>
			<div data-ui="dot-connector" className="flex items-center gap-2 relative">
				<svg
					aria-hidden="true"
					className="h-[60px] mb-[90px] pr-1 -rotate-17 w-px overflow-visible"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line
						x1="0.5"
						y1="0"
						x2="0.5"
						y2="100%"
						strokeDasharray="4px 4px"
						className="stroke-background"
					/>
				</svg>

				<div data-ui="wheel-switch" className="cursor-pointer">
					<Wheel className="h-5 w-5 flex-1" colors={["#254441"]} />
				</div>

				<svg
					aria-hidden="true"
					className="h-px w-[20px]"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line
						x1="0"
						y1="0.5"
						x2="100%"
						y2="0.5"
						strokeDasharray="4px 4px"
						className="stroke-background"
					/>
				</svg>
			</div>

			<SkillsSet data={backEndSkills} skillsAspect="back-end" />

			<div data-ui="dot-connector" className="flex items-center gap-2 relative">
				<svg
					aria-hidden="true"
					className="h-[60px] pr-1 rotate-60 w-px ml-[22px] mb-[30px] overflow-visible"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line
						x1="0.5"
						y1="0"
						x2="0.5"
						y2="100%"
						strokeDasharray="4px 4px"
						className="stroke-background"
					/>
				</svg>
			</div>

			<div className="flex flex-col items-center gap-1 ml-[10px] mb-auto w-[120px]">
				<div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-sm bg-surface">
					<Server className="h-7 w-7 text-neutral-white stroke-1" />
				</div>
				<span className="text-center text-xl font-semibold text-surface">
					back end
				</span>
			</div>
		</div>
	);
};
