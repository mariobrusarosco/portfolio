import { Link } from "@tanstack/react-router";
import { useLayoutEffect, useRef, useState } from "react";
import { Hightlights } from "@/domains/experience/components/highlights";
import {
	Stack,
	Tools,
} from "@/domains/experience/components/stack-and-product";
import { UsualDay } from "@/domains/experience/components/usual-day";
import { Wheel } from "@/domains/experience/components/whell";
import { EXPERIENCE_ASPECTS_LIST } from "@/domains/experience/constants";
import { useExperienceAspect } from "@/domains/experience/hooks/use-experience-aspect";
import type { Experience, ExperienceAspect } from "@/domains/experience/types";
import { cn } from "@/lib/utils";

interface ExperienceDynamicDisplayProps {
	selectedExperience?: Experience;
}

export const ExperienceDynamicDisplay = ({
	selectedExperience,
}: ExperienceDynamicDisplayProps) => {
	const { selectedAspect } = useExperienceAspect();

	return (
		<div className="flex flex-1 flex-col gap-14  pr-16">
			<AspectsNavigationBar selectedAspect={selectedAspect} />
			{selectedExperience ? (
				<div className="">
					{selectedAspect === "usual-day" && (
						<UsualDay efforts={selectedExperience.efforts} />
					)}
					{selectedAspect === "accomplished" && (
						<Hightlights description={selectedExperience.description} />
					)}
					{selectedAspect === "using" && (
						<div className="flex flex-col gap-8">
							<Stack stack={selectedExperience.stack} />
							<Tools tools={selectedExperience.tools} />
						</div>
					)}
				</div>
			) : null}
		</div>
	);
};

const AspectsNavigationBar = ({
	selectedAspect,
}: {
	selectedAspect: ExperienceAspect;
}) => {
	const activeAspectRef = useRef<HTMLAnchorElement>(null);
	const [offset, setOffset] = useState({ left: 0, top: 0 });

	useLayoutEffect(() => {
		if (!selectedAspect || !activeAspectRef.current) return;

		setOffset(() => calculateWheelOffset(activeAspectRef.current!));
	}, [selectedAspect]);

	return (
		<div className="relative w-fit">
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

			<ul className="flex gap-6 uppercase text-background font-display">
				{EXPERIENCE_ASPECTS_LIST.map((aspect) => (
					<li key={aspect}>
						<Link
							to="/experience"
							search={{ aspect }}
							className={cn("flex flex-col items-center gap-4", {
								"font-bold": selectedAspect === aspect,
							})}
							ref={selectedAspect === aspect ? activeAspectRef : undefined}
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
				data-ui="timeline-line"
				className="absolute top-[2px] left-[30px] h-[1px] w-[calc(100%-48px)] bg-background/40"
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
