import { PageHeading } from "@/domains/global/components/page-heading";

export const AboutMainScreen = () => {
	return (
		<main data-ui="about-main-screen" className="h-full flex gap-20">
			<PageHeading title="About" />

			<div className="flex-1 text-2xl font-body font-light grid gap-12 text-background gap-6 max-w-[576px]">
				<p className="">
					Experience in FinTechs and startups, developing web apps using React,
					<strong className="font-semibold">Typescript</strong>,{" "}
					<strong className="font-semibold">Redux</strong>,{" "}
					<strong className="font-semibold">CSS</strong>, and
					<strong className="font-semibold">CSS-in-JS</strong> technologies.
				</p>
				<p>
					I have worked closely with Product teams, using Analytics tools to
					build engagement dashboards and conversion reports so, the leadership
					could make product-related decisions.
				</p>
				<p>
					I have worked alongside{" "}
					<strong className="font-semibold">Designers</strong> and{" "}
					<strong className="font-semibold">Product Managers</strong>, mainly
					using <strong className="font-semibold">Agile</strong> processes like{" "}
					<strong className="font-semibold">Planning</strong>,{" "}
					<strong className="font-semibold">Retros</strong>, and{" "}
					<strong className="font-semibold">Refinement</strong> meetings.
				</p>
			</div>
		</main>
	);
};
