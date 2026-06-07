import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { preload } from "react-dom";

import { AiChatWidget } from "@/domains/global/components/ai-chat-widget";
import { Wheel } from "@/domains/global/components/whell";
import appCss from "../styles.css?url";

// Preload only the critical fonts used in the first viewport.
// TODO Ex:
// preload("/fonts/afacad-flux-v4-latin-regular.woff2", {
// 	as: "font",
// 	type: "font/woff2",
// 	crossOrigin: "anonymous",
// });

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
			<body className="relative bg-[#bcbcbc1a]">
				{children}
				{/* <Wheel /> */}
				<AiChatWidget />
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
