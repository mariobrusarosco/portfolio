import type * as React from "react";
import { cn } from "@/lib/utils";

interface WheelProps {
	colors?: [string, string, string, string];
	className?: string;
	children?: React.ReactNode;
	style?: React.CSSProperties;
	hideCenterDot?: boolean;
}

export const Wheel = ({
	className,
	colors = ["#254441", "#5B98A5", "#6A9B96", "#35626B"],
	style,
	hideCenterDot = false,
}: WheelProps) => {
	return (
		<div
			data-ui="experience-wheel"
			className={cn("relative", className)}
			style={style}
		>
			<svg
				data-ui="wheel"
				viewBox="0 0 138 136"
				fill="none"
				aria-label="Wheel"
				className={cn(
					"w-full h-full origin-center transition-colors duration-300 ",
				)}
			>
				<title>Wheel</title>
				<path
					d="M69 0C107.154 0.268824 138 31.2801 138 69.4971C138 69.6639 137.998 69.8305 137.997 69.9971H113C113 45.6965 93.3005 25.9971 69 25.9971V0Z"
					fill={colors[0]}
					className={cn(
						"origin-center transition-colors duration-300 cursor-pointer pointer-events-auto",
					)}
				/>
				<path
					d="M69 0C30.8464 0.268824 0 31.2801 0 69.4971C0 69.6639 0.00175476 69.8305 0.00292969 69.9971H25C25 45.6965 44.6995 25.9971 69 25.9971V0Z"
					fill={colors[1]}
					className={cn(
						"origin-center transition-colors duration-300 cursor-pointer pointer-events-auto",
					)}
				/>
				<path
					d="M69 135.997C107.154 135.728 138 104.717 138 66.5C138 66.3332 137.998 66.1665 137.997 66H113C113 90.3005 93.3005 110 69 110V135.997Z"
					fill={colors[2]}
					className={cn(
						"origin-center transition-colors duration-300 cursor-pointer pointer-events-auto",
					)}
				/>
				<path
					d="M69 135.997C30.8464 135.728 0 104.717 0 66.5C0 66.3332 0.00175476 66.1665 0.00292969 66H25C25 90.3005 44.6995 110 69 110V135.997Z"
					fill={colors[3]}
					className={cn(
						"origin-center transition-colors duration-300 cursor-pointer pointer-events-auto",
					)}
				/>
			</svg>

			{!hideCenterDot && (
				<circle
					className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-background rounded-full w-1 h-1"
					cx="0"
					cy="0"
					r="12"
				/>
			)}
		</div>
	);
};
