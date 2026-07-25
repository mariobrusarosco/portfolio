import {
	createChatClientOptions,
	fetchServerSentEvents,
	type InferChatMessages,
	useChat,
} from "@tanstack/ai-react";

const portfolioChatOptions = createChatClientOptions({
	connection: fetchServerSentEvents("/api/chat"),
});

export type PortfolioChatMessages = InferChatMessages<
	typeof portfolioChatOptions
>;

export const usePortfolioChat = () => {
	return useChat(portfolioChatOptions);
};
