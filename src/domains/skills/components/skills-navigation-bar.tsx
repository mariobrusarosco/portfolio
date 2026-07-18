import { Link } from "@tanstack/react-router";
import { useLayoutEffect, useRef, useState } from "react";
import { Wheel } from "@/domains/experience/components/whell";
import { SKILLS_ASPECTS_LIST } from "@/domains/skills/constants";
import type { SkillsAspect } from "@/domains/skills/types";
import { cn } from "@/lib/utils";

interface SkillsNavigationBarProps {
	selectedAspect: SkillsAspect;
}

export const SkillsNavigationBar = ({
	selectedAspect,
}: SkillsNavigationBarProps) => {
	const activeAspectRef = useRef<HTMLAnchorElement>(null);
	const [offset, setOffset] = useState({ left: 0, top: 0 });

	useLayoutEffect(() => {
		if (!selectedAspect || !activeAspectRef.current) return;

		setOffset(() => calculateWheelOffset(activeAspectRef.current!));
	}, [selectedAspect]);

	return (
		<div className="relative">
			<Wheel
				className={cn(
					"w-7 h-7 absolute left-[88px] transition-all duration-300 ease-in-out",
					{ "opacity-0": !activeAspectRef.current },
				)}
				style={{
					left: `${offset.left}px`,
					top: `-${offset.top}px`,
				}}
				hideCenterDot
			/>

			<ul className="grid grid-cols-4 gap-20 uppercase text-background font-display">
				{SKILLS_ASPECTS_LIST.map((aspect) => (
					<li key={aspect}>
						<Link
							to="/skills"
							search={{ aspect }}
							className={cn("flex gap-4 flex-col items-center", {
								"font-bold": selectedAspect === aspect,
							})}
							ref={aspect === selectedAspect ? activeAspectRef : undefined}
						>
							<div
								data-ui="aspect-item-dot"
								className="w-1 h-1 rounded-full bg-background"
							/>
							{aspect}
						</Link>
					</li>
				))}
			</ul>

			<span
				data-ui="skills-navigation-bar-line"
				className="absolute top-[2px] left-[105px] h-[1px] w-[calc(100%-210px)] bg-background/40"
			/>
		</div>
	);
};

const calculateWheelOffset = (node: HTMLAnchorElement) => {
	return {
		left: node.offsetLeft + node.offsetWidth / 2 - 14,
		top: node.offsetTop + 12,
	};
};
