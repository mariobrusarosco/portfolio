import { Wheel } from "@/domains/experience/components/whell";
import type { SkillsAspect, SkillsFilters } from "@/domains/skills/types";
import { cn } from "@/lib/utils";

const CATEGORIES = [
	{ value: "product", label: "Product" },
	{ value: "front-end", label: "Front End" },
	{ value: "back-end", label: "Back End" },
] satisfies Array<{
	value: SkillsAspect;
	label: string;
}>;

interface SkillsNavigationBarProps {
	filters: SkillsFilters;
	onChange: (filter: keyof SkillsFilters, checked: boolean) => void;
	onAllChange: (checked: boolean) => void;
}

export const SkillsNavigationBar = ({
	filters,
	onChange,
	onAllChange,
}: SkillsNavigationBarProps) => {
	const allSelected = CATEGORIES.every(({ value }) => filters[value]);

	return (
		<nav aria-label="Skills filters" className="font-display text-background">
			<fieldset className="flex items-center gap-10 uppercase">
				<legend className="sr-only">Filter skills</legend>

				<FilterCheckbox
					label="All"
					checked={allSelected}
					onChange={onAllChange}
				/>

				{CATEGORIES.map(({ value, label }) => (
					<FilterCheckbox
						key={value}
						label={label}
						checked={filters[value]}
						onChange={(checked) => onChange(value, checked)}
					/>
				))}
			</fieldset>
		</nav>
	);
};

interface FilterCheckboxProps {
	label: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
}

const FilterCheckbox = ({ label, checked, onChange }: FilterCheckboxProps) => (
	<label className="relative flex cursor-pointer items-center gap-2 py-2 font-semibold">
		<input
			type="checkbox"
			className="peer sr-only"
			checked={checked}
			onChange={(event) => onChange(event.currentTarget.checked)}
		/>
		<span
			aria-hidden="true"
			className="grid h-5 w-5 shrink-0 place-items-center"
		>
			<Wheel
				colors={["#254441"]}
				className={cn(
					"h-5 w-5 transition-opacity duration-200",
					checked ? "opacity-100" : "opacity-25",
				)}
			/>
		</span>
		<span
			className={cn(
				"block border-b-2 border-transparent px-1 transition-opacity",
				checked ? "opacity-100" : "opacity-45",
			)}
		>
			{label}
		</span>
	</label>
);
