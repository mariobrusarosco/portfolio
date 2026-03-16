import { PageHeading } from "@/domains/global/components/page-heading";

export const ProjectsMainScreen = () => {
	return (
		<main
			data-ui="projects-main-screen"
			className="h-full flex gap-20 items-start pr-12"
		>
			<PageHeading title="Projects" />

			<div className="flex-1 font-light text-background flex flex-col gap-6 text-sm pr-10">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula,
					purus in commodo finibus, leo mi euismod massa, in tincidunt nibh
					libero a sapien.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
					ullamcorper, libero a tincidunt pulvinar, sapien est cursus odio, ut
					tristique lorem massa sed nunc.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					euismod, velit sed ultrices commodo, nisl nunc viverra orci, non
					pharetra turpis lacus sed erat.
				</p>
			</div>
		</main>
	);
};
