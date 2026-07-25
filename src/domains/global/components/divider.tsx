import { cn } from "@/lib/utils";

export const Divider = ({
	className,
	direction = "vertical",
}: {
	className?: string;
	direction?: "vertical" | "horizontal";
}) => {
	if (direction === "horizontal") {
		return (
			<div className={cn("h-[0.5px] w-full bg-background/40", className)} />
		);
	}

	return <div className={cn("w-[0.5px] h-full bg-background/40", className)} />;
};
