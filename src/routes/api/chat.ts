import {
	chat,
	convertMessagesToModelMessages,
	type ModelMessage,
	maxIterations,
	toServerSentEventsResponse,
	type UIMessage,
} from "@tanstack/ai";
import {
	OPENAI_CHAT_MODELS,
	type OpenAIChatModel,
	openaiText,
} from "@tanstack/ai-openai";
import { createFileRoute } from "@tanstack/react-router";

import { portfolioTools } from "@/domains/ai/portfolio-tools";

const DEFAULT_MODEL: OpenAIChatModel = "gpt-5-mini";
const MAX_MESSAGES = 12;
const MAX_USER_MESSAGE_LENGTH = 1200;

const systemPrompt = [
	"You are Mario Brusarosco's portfolio assistant.",
	"Answer in first person when it feels natural, as if Mario is speaking through the portfolio.",
	"Stay grounded in the provided portfolio tools and profile data.",
	"Do not invent facts, URLs, private details, salary expectations, availability, or confidential company information.",
	"If a detail is not available in the portfolio data, say so briefly and suggest contacting Mario through the portfolio.",
	"Keep answers concise, warm, technically precise, and useful to recruiters, founders, and engineering teams.",
	"Only answer questions about Mario's portfolio, career, technical background, work style, projects, skills, and contact paths. Politely redirect unrelated questions.",
].join("\n");

export const Route = createFileRoute("/api/chat")({
	server: {
		handlers: {
			POST: async ({ request }) => {
				if (!process.env.OPENAI_API_KEY) {
					return Response.json(
						{ error: "OPENAI_API_KEY is not configured on the server." },
						{ status: 500 },
					);
				}

				const body = await request.json().catch(() => null);

				if (!body || !Array.isArray(body.messages)) {
					return Response.json(
						{ error: "Expected a JSON body with a messages array." },
						{ status: 400 },
					);
				}

				const lastUserMessage = getLastUserMessageText(body.messages);

				if (lastUserMessage.length > MAX_USER_MESSAGE_LENGTH) {
					return Response.json(
						{ error: "Message is too long for this portfolio chat." },
						{ status: 413 },
					);
				}

				const messages = convertMessagesToModelMessages(
					body.messages.slice(-MAX_MESSAGES),
				) as Array<ModelMessage>;

				const stream = chat({
					adapter: openaiText(getOpenAIModel()),
					systemPrompts: [systemPrompt],
					messages,
					tools: portfolioTools,
					maxTokens: 900,
					agentLoopStrategy: maxIterations(5),
				});

				return toServerSentEventsResponse(stream);
			},
		},
	},
});

function getOpenAIModel() {
	const configuredModel = process.env.OPENAI_MODEL;

	if (
		configuredModel &&
		OPENAI_CHAT_MODELS.includes(configuredModel as OpenAIChatModel)
	) {
		return configuredModel as OpenAIChatModel;
	}

	return DEFAULT_MODEL;
}

function getLastUserMessageText(messages: Array<ModelMessage | UIMessage>) {
	for (let index = messages.length - 1; index >= 0; index -= 1) {
		const message = messages[index];

		if (message?.role !== "user") {
			continue;
		}

		if ("parts" in message) {
			return message.parts
				.filter((part) => part.type === "text")
				.map((part) => part.content)
				.join("");
		}

		if (typeof message.content === "string") {
			return message.content;
		}
	}

	return "";
}
