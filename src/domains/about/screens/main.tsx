export const AboutMainScreen = () => {
	return (
		<main data-ui="about-main-screen" className="h-full flex gap-20 items-center ">
            <h2 data-ui="about-page-title" className="w-fit h-fit bg-foreground font-semibold text-6xl text-background font-display uppercase p-2 pr-20 line-height-0.5">
                About
            </h2>

            <div className="font-light text-background flex flex-col gap-6 text-sm pr-10">
                <p>Experience in FinTechs and startups, developing web apps using React, Typescript, Redux, CSS, and CSS-in-JS technologies.  </p>
                    <p>
I have worked closely with Product teams, using Analytics tools to build engagement dashboards and conversion reports so, the leadership could make product-related decisions.

                    </p>
                    <p>I have worked alongside Designers and Product Managers, mainly using Agile processes like Planning, Retros, and Refinement meetings.</p>
                </div>
		</main>
	);
}