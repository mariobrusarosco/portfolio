import { Divider } from "@/domains/global/components/divider";
import { SKILLS } from "@/domains/skills/constants";
import type { Skill } from "@/domains/skills/types";

export const SkillsContent = () => {
	const productSkills = SKILLS.product;
	const frontEndSkills = SKILLS["front-end"];
	const backEndSkills = SKILLS["back-end"];

	return (
		<div className="grid grid-cols-[120px_1px_1fr] uppercase text-background font-display">
			<Skills data={productSkills} />

			<Divider />
			<div className="grid grid-rows-2 gap-20 pl-10">
				<Skills data={frontEndSkills} />

				<Skills data={backEndSkills} />
			</div>
		</div>
	);
};

interface SkillsProps {
	data: Skill[];
}

const Skills = ({ data }: SkillsProps) => {
	const byLevel = Object.groupBy(data, (skill) => skill.level);

	return (
		<div className="flex gap-8 items-center">
			{Object.entries(byLevel).map(([level, skills]) => (
				<div key={`level-${level}`} className="flex items-stretch gap-5">
					<ul className="flex flex-col justify-center gap-4 py-1">
						{skills?.map((skill) => (
							<li key={`skill-${skill.label}`}>{skill.label}</li>
						))}
					</ul>

					<Bracket />
				</div>
			))}
		</div>
	);
};

const Bracket = () => {
	return (
		<div
			aria-hidden="true"
			className="flex w-8 shrink-0 flex-col items-end justify-between py-1"
		>
			<span
				data-ui="open-bracket"
				className="h-[2px] w-full rounded-full bg-background/70"
			/>
			<span
				data-ui="vertical-bar"
				className="w-[2px] flex-1 rounded-full bg-background/70"
			/>
			<span
				data-ui="close-bracket"
				className="h-[2px] w-full rounded-full bg-background/70"
			/>
		</div>
	);
};
