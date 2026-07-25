import { PackageSearch } from "lucide-react";
import { DotConnector } from "@/domains/skills/components/dot-connector";
import { SKILLS } from "@/domains/skills/constants";
import { cn } from "@/lib/utils";

interface ProductSkillsProps {
	selected: boolean;
	mostRecent: boolean;
}

export const ProductSkills = ({ selected, mostRecent }: ProductSkillsProps) => {
	const productSkills = SKILLS.product;

	return (
		<div
			data-ui="product-skill-set"
			data-selected={selected}
			data-most-recent={mostRecent}
			className={cn(
				"flex h-full items-stretch gap-2 transition-opacity",
				!selected && "opacity-20",
			)}
		>
			<div className="flex gap-2 self-center bg-gray-100 px-3 py-8 rounded-md h-fit">
				<ul className="flex flex-col gap-4">
					{productSkills.map((skill) => {
						const Icon = skill.icon;

						return (
							<li
								key={`skill-${skill.label}`}
								className="grid gap-1 place-items-center transition-opacity"
								style={{ opacity: mostRecent ? skill.recentUsage : 1 }}
							>
								<span className="text-center text-background max-w-[60px]">
									{skill.label}
								</span>
								<div className="grid h-10 w-10 place-items-center rounded-sm border border-primary p-2">
									<Icon className="h-6 w-6 text-primary" />
								</div>
							</li>
						);
					})}
				</ul>
			</div>

			<DotConnector className="w-15" />

			<div className="grid place-content-center gap-1">
				<div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-sm bg-primary">
					<PackageSearch className="h-7 w-7 text-neutral-white stroke-1" />
				</div>
				<span className="text-center text-xl font-semibold text-background">
					product
				</span>
			</div>
		</div>
	);
};
