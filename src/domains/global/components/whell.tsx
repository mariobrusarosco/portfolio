import { useLocation, useNavigate } from "@tanstack/react-router";
import type * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface WheelProps {
	colors?: [string, string, string, string];
	className?: string;
	children?: React.ReactNode;
}

const POSITION_BY_SCREEN: Record<string, string> = {
	"/": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
	"/skills": "top-0 left-0 translate-x-6 -translate-y-[2/3]",
	"/projects": "top-0 left-0 translate-x-6 -translate-y-[2/3]",
	"/experience": "top-0 left-0 translate-x-6 translate-y-[2/3]",
	"/about": "top-0 left-0 translate-x-6 translate-y-[2/3]",
};

const POSITION_BY_STATE = {
	IS_OPEN: "translate-y-[10px]",
	IS_CLOSED: "translate-y-[-65px]",
};

const defineWhellInnerLabel = (
	hoveredPart: string | null,
	isHomePage: boolean,
	isOpen: boolean,
) => {
	if (hoveredPart) {
		return hoveredPart;
	}
	if (isHomePage) {
		return "push to start";
	}
	return isOpen ? "Close" : "Open";
};

export const Wheel = ({
	className,
	children,
	colors = ["#254441", "#5B98A5", "#6A9B96", "#35626B"],
}: WheelProps) => {
	// Injected dependencies
	const location = useLocation();
	const navigate = useNavigate();
	// Internal state
	const [isOpen, setIsOpen] = useState(true);
	const [hoveredPart, setHoveredPart] = useState<string | null>(null);
	// Derived state
	const currentLocation = location.pathname;
	const isHomePage = currentLocation === "/";
	const whellText = defineWhellInnerLabel(hoveredPart, isHomePage, isOpen);
	// Handlers
	const handleWhellHover = (part: string) => {
		setHoveredPart(part);
	};

	const handleWhellLeave = () => {
		setHoveredPart(null);
	};

	return (
		<div
			data-ui="global-wheel"
			className={cn(
				"absolute grid place-items-center",
				POSITION_BY_SCREEN[currentLocation],
				{
					[POSITION_BY_STATE.IS_OPEN]: isOpen,
					[POSITION_BY_STATE.IS_CLOSED]: !isOpen,
				},
				className,
			)}
		>
			<svg
				data-ui="wheel"
				viewBox="0 0 138 136"
				fill="none"
				aria-label="Wheel"
				className={cn(
					"w-full h-full origin-center transition-colors duration-300",
				)}
			>
				<title>Wheel</title>

				<path
					d="M69 0C30.8464 0.268824 0 31.2801 0 69.4971C0 69.6639 0.00175476 69.8305 0.00292969 69.9971H25C25 45.6965 44.6995 25.9971 69 25.9971V0Z"
					fill={colors[1]}
					className="origin-center transition-colors duration-300 cursor-pointer pointer-events-auto"
					onMouseEnter={() => handleWhellHover("projects")}
					onMouseLeave={handleWhellLeave}
					onClick={() => navigate({ to: "/projects" })}
				/>
				<path
					d="M69 0C107.154 0.268824 138 31.2801 138 69.4971C138 69.6639 137.998 69.8305 137.997 69.9971H113C113 45.6965 93.3005 25.9971 69 25.9971V0Z"
					fill={colors[0]}
					className="origin-center transition-colors duration-300 cursor-pointer pointer-events-auto"
					onMouseEnter={() => handleWhellHover("experience")}
					onMouseLeave={handleWhellLeave}
					onClick={() => navigate({ to: "/experience" })}
				/>
				<path
					d="M69 135.997C107.154 135.728 138 104.717 138 66.5C138 66.3332 137.998 66.1665 137.997 66H113C113 90.3005 93.3005 110 69 110V135.997Z"
					fill={colors[2]}
					className="origin-center transition-colors duration-300 cursor-pointer pointer-events-auto"
					onMouseEnter={() => handleWhellHover("skills")}
					onMouseLeave={handleWhellLeave}
					onClick={() => navigate({ to: "/skills" })}
				/>
				<path
					d="M69 135.997C30.8464 135.728 0 104.717 0 66.5C0 66.3332 0.00175476 66.1665 0.00292969 66H25C25 90.3005 44.6995 110 69 110V135.997Z"
					fill={colors[3]}
					className="origin-center transition-colors duration-300 cursor-pointer pointer-events-auto"
					onMouseEnter={() => handleWhellHover("about")}
					onMouseLeave={handleWhellLeave}
					onClick={() => navigate({ to: "/about" })}
				/>
			</svg>

			{children && isHomePage && (
				<div
					className="absolute inset-0 flex items-center justify-center pointer-events-none"
					onClick={() => navigate({ to: "/experience" })}
				>
					<div className="pointer-events-auto">{children}</div>
				</div>
			)}

			{!isHomePage ? (
				<div
					className={cn(
						"cursor-pointer z-10 font-semibold uppercase font-display text-background",
						isOpen ? "absolute" : "",
					)}
					onClick={() => setIsOpen(!isOpen)}
				>
					{whellText}
				</div>
			) : null}
		</div>
	);
};
