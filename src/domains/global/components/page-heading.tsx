import { cn } from "@/lib/utils";

export const PageHeading = ({
	title,
	className,
}: {
	title: string;
	className?: string;
}) => {
	return (
		<div
			data-ui="page-heading"
			className={cn(
				"absolute top-0 left-1/2 z-10 -translate-x-1/2 px-12 py-3 text-background",
				className,
			)}
		>
			<h2 className="w-fit h-fit text-6xl font-display font-thin uppercase">
				{title}
			</h2>
		</div>
	);
};
