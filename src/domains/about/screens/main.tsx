import { PageHeading } from "@/domains/global/components/page-heading";

export const AboutMainScreen = () => {
	return (
		<div data-ui="about-main-screen" className="h-full flex pt-[200px] px-18">
			<PageHeading title="About Me" />

			<div className="text-xl font-display font-light text-background flex flex-col gap-8">
				<p className="">
					I am a Product Engineer who has worked for FinTechs and Startups,
					developing web apps.
				</p>
				<p>
					I'm more experience in{" "}
					<strong className="font-semibold">Front End</strong>, mainly using{" "}
					<strong className="font-semibold">React</strong>,{" "}
					<strong className="font-semibold">Typescript</strong>, pure CSS or
					<strong className="font-semibold">Tailwind CSS</strong>, Design
					Systems with{" "}
					<strong className="font-semibold">Styled Components</strong>. Wrapping
					it <strong className="font-semibold">CI/CD</strong>,{" "}
					<strong className="font-semibold">Hosting</strong> and{" "}
					<strong className="font-semibold">Unit Testing.</strong>
				</p>
				<p>
					I complement them with{" "}
					<strong className="font-semibold">Back End</strong> skills, such as{" "}
					<strong className="font-semibold">Python</strong>,{" "}
					<strong className="font-semibold">Node</strong>,{" "}
					<strong className="font-semibold">Fast API</strong>,{" "}
					<strong className="font-semibold">Express</strong>,{" "}
					<strong className="font-semibold">SQL Database</strong> using ORMs
					such as <strong className="font-semibold">Prisma/Supabase CLI</strong>
				</p>

				<p>
					Most recently I've been using{" "}
					<strong className="font-semibold">OpenAI SDKs</strong> -{" "}
					<strong>Python</strong> to create orchestrated{" "}
					<strong className="font-semibold">LLM</strong> flows.
				</p>
			</div>
		</div>
	);
};
