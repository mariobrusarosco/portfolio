import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { DotConnector } from "@/domains/skills/components/dot-connector";
import { SKILLS_PRESENTATION_CONFIG } from "@/domains/skills/constants";
import type { Skill, SkillsAspect } from "@/domains/skills/types";
import { cn } from "@/lib/utils";

interface SkillsSetProps {
	data: Skill[];
	levelClassName?: string;
	skillsAspect: SkillsAspect;
}

export const SkillsSet = ({
	data,
	levelClassName,
	skillsAspect,
}: SkillsSetProps) => {
	const scrollAreaRef = useRef<HTMLDivElement>(null);
	const [scrollFades, setScrollFades] = useState({
		left: false,
		right: false,
	});
	const byLevel = Object.groupBy(data, (skill) => skill.level);
	const levels = Object.entries(byLevel).sort(([levelA], [levelB]) => {
		return Number(levelA) - Number(levelB);
	});

	const updateScrollFades = useCallback(() => {
		const scrollArea = scrollAreaRef.current;

		if (!scrollArea) return;

		const edgeThreshold = 1;

		setScrollFades({
			left: scrollArea.scrollLeft > edgeThreshold,
			right:
				scrollArea.scrollLeft + scrollArea.clientWidth <
				scrollArea.scrollWidth - edgeThreshold,
		});
	}, []);

	useLayoutEffect(() => {
		const scrollArea = scrollAreaRef.current;

		if (!scrollArea) return;

		const resizeObserver = new ResizeObserver(updateScrollFades);

		updateScrollFades();
		resizeObserver.observe(scrollArea);

		return () => resizeObserver.disconnect();
	}, [updateScrollFades]);

	return (
		<div className="relative w-full max-w-[780px]">
			<div
				ref={scrollAreaRef}
				className="flex w-full items-center gap-2 overflow-x-auto overflow-y-hidden rounded-md bg-gray-100 p-4"
				data-ui="skill-set"
				onScroll={updateScrollFades}
			>
				{levels.map(([level, skills]) => {
					if (!skills) return null;
					const isLastLevel = Number(level) > levels.length - 1;

					return (
						<div key={`level-${level}`} className="flex gap-2">
							<SkillsLevel
								skills={skills}
								className={levelClassName}
								skillsAspect={skillsAspect}
							/>
							{!isLastLevel ? <DotConnector className="w-[60px]" /> : null}
						</div>
					);
				})}
			</div>

			<span
				aria-hidden="true"
				data-ui="scroll-fade-left"
				className={cn(
					"pointer-events-none absolute inset-y-0 left-0 w-[10px] rounded-l-md bg-[linear-gradient(to_right,#25444126,transparent)] transition-opacity",
					scrollFades.left ? "opacity-100" : "opacity-0",
				)}
			/>
			<span
				aria-hidden="true"
				data-ui="scroll-fade-right"
				className={cn(
					"pointer-events-none absolute inset-y-0 right-0 w-[10px] rounded-r-md bg-[linear-gradient(to_left,#25444126,transparent)] transition-opacity",
					scrollFades.right ? "opacity-100" : "opacity-0",
				)}
			/>
		</div>
	);
};

interface SkillsLevelProps {
	skills: Skill[];
	className?: string;
	skillsAspect: SkillsAspect;
}

const SkillsLevel = ({ skills, className, skillsAspect }: SkillsLevelProps) => (
	<ul
		className={cn(
			"grid h-full grid-flow-col grid-rows-2 auto-cols-max gap-x-2 gap-y-4",
			className,
		)}
	>
		{skills.map((skill) => {
			const Icon = skill.icon;
			const iconVariant = SKILLS_PRESENTATION_CONFIG[skillsAspect].iconVariant;

			return (
				<li
					key={`skill-${skill.label}`}
					className="grid self-center gap-1 only:row-span-2 place-items-center"
				>
					<span className="text-center text-background max-w-[85px]">
						{skill.label}
					</span>
					<div
						className={`grid h-10 w-10 place-items-center rounded-sm border border-${iconVariant} p-2`}
					>
						<Icon className={`h-6 w-6 text-${iconVariant}`} />
					</div>
				</li>
			);
		})}
	</ul>
);
