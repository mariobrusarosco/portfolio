import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { preload } from "react-dom";

import Header from "@/domains/global/components/header";
import { Wheel } from "@/domains/global/components/whell";
import appCss from "../styles.css?url";

// Preload fonts to prevent FOUT (Flash of Unstyled Text) and reduce CLS
// These are called at module load time for earliest possible preloading
preload("/fonts/josefin-sans-v34-latin-regular.woff2", {
	as: "font",
	type: "font/woff2",
	crossOrigin: "anonymous",
});
preload("/fonts/josefin-sans-v34-latin-600.woff2", {
	as: "font",
	type: "font/woff2",
	crossOrigin: "anonymous",
});
preload("/fonts/barlow-condensed-v13-latin-regular.woff2", {
	as: "font",
	type: "font/woff2",
	crossOrigin: "anonymous",
});
preload("/fonts/barlow-condensed-v13-latin-700.woff2", {
	as: "font",
	type: "font/woff2",
	crossOrigin: "anonymous",
});
preload("/fonts/cormorant-garamond-v21-latin-regular.woff2", {
	as: "font",
	type: "font/woff2",
	crossOrigin: "anonymous",
});
preload("/fonts/cormorant-garamond-v21-latin-700.woff2", {
	as: "font",
	type: "font/woff2",
	crossOrigin: "anonymous",
});

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Mario Brusaro Portfolio",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="relative">
				{children}
				<Wheel className="w-30 h-30">
					<p className="text-background text-sm p-4 w-20 text-center">
						push to start
					</p>
				</Wheel>
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
