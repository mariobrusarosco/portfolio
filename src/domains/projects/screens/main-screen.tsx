export const ProjectsMainScreen = () => {
	return (
		<main data-ui="projects-main-screen" className="h-full flex gap-20 items-center">
			<h2
				data-ui="projects-page-title"
				className="w-fit h-fit bg-foreground font-semibold text-6xl text-background font-display uppercase p-2 pr-20 line-height-0.5"
			>
				Projects
			</h2>
			<div className="font-light text-background flex flex-col gap-6 text-sm pr-10">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					vehicula, purus in commodo finibus, leo mi euismod massa, in
					tincidunt nibh libero a sapien.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
					ullamcorper, libero a tincidunt pulvinar, sapien est cursus odio,
					ut tristique lorem massa sed nunc.
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
