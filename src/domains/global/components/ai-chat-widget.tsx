import { useSearch } from "@tanstack/react-router";
import { MessageCircle, RotateCcw, Send, Square, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import type { PortfolioChatMessages } from "@/domains/ai/use-portfolio-chat";
import { usePortfolioChat } from "@/domains/ai/use-portfolio-chat";
import { cn } from "@/lib/utils";

const starterPrompts = [
	"What kind of frontend work do you do?",
	"What was your role at Origin?",
	"Which technologies have you used professionally?",
	"How can I contact you?",
];

export const AiChatWidget = () => {
	const search = useSearch({ strict: false });
	const [isOpen, setIsOpen] = useState(false);
	const [input, setInput] = useState("");
	const messageInputId = useId();
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const { messages, sendMessage, isLoading, error, clear, stop } =
		usePortfolioChat();
	const messageTextSnapshot = messages.map(getMessageText).join("");
	const isChatEnabled = search["chat-enabled"] === "true";

	const submitMessage = async (message: string) => {
		const trimmedMessage = message.trim();

		if (!trimmedMessage || isLoading) {
			return;
		}

		setInput("");
		await sendMessage(trimmedMessage);
	};

	useEffect(() => {
		if (!isOpen || !messageTextSnapshot) {
			return;
		}

		messagesEndRef.current?.scrollIntoView({ block: "end" });
	}, [isOpen, messageTextSnapshot]);

	if (!isChatEnabled) return null;

	return (
		<div className="fixed right-5 bottom-5 z-50 font-secondary text-background sm:right-8 sm:bottom-8">
			{isOpen ? (
				<section
					aria-label="Portfolio AI chat"
					className="mb-4 flex h-[min(640px,calc(100vh-7rem))] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-lg border border-background/20 bg-neutral-white shadow-2xl"
				>
					<header className="flex min-h-14 items-center justify-between border-background/10 border-b px-4">
						<div>
							<h2 className="font-display font-semibold text-2xl leading-none tracking-wide">
								Mario AI
							</h2>
							<p className="mt-1 text-background/70 text-xs">
								Ask about my work, stack, or experience.
							</p>
						</div>

						<div className="flex items-center gap-1">
							<button
								type="button"
								title="Reset chat"
								aria-label="Reset chat"
								className="grid size-9 place-items-center rounded-md text-background transition hover:bg-background/10"
								onClick={clear}
							>
								<RotateCcw className="size-4" aria-hidden="true" />
							</button>
							<button
								type="button"
								title="Close chat"
								aria-label="Close chat"
								className="grid size-9 place-items-center rounded-md text-background transition hover:bg-background/10"
								onClick={() => setIsOpen(false)}
							>
								<X className="size-4" aria-hidden="true" />
							</button>
						</div>
					</header>

					<div className="flex-1 overflow-y-auto px-4 py-4">
						{messages.length === 0 ? (
							<div className="grid gap-3">
								<p className="text-background/75 text-sm leading-5">
									I can answer questions about my experience, stack, and how I
									work with product teams.
								</p>
								<div className="grid gap-2">
									{starterPrompts.map((prompt) => (
										<button
											key={prompt}
											type="button"
											className="min-h-10 rounded-md border border-background/15 px-3 py-2 text-left text-sm transition hover:border-background/35 hover:bg-background/5"
											onClick={() => submitMessage(prompt)}
										>
											{prompt}
										</button>
									))}
								</div>
							</div>
						) : (
							<div className="grid gap-3">
								{messages.map((message) => (
									<ChatBubble key={message.id} message={message} />
								))}
							</div>
						)}

						{isLoading ? (
							<p className="mt-3 text-background/60 text-xs">Thinking...</p>
						) : null}

						{error ? (
							<p className="mt-3 rounded-md border border-destructive/25 bg-destructive/10 px-3 py-2 text-destructive text-xs">
								{error.message}
							</p>
						) : null}

						<div ref={messagesEndRef} />
					</div>

					<form
						className="flex min-h-16 items-end gap-2 border-background/10 border-t p-3"
						onSubmit={(event) => {
							event.preventDefault();
							void submitMessage(input);
						}}
					>
						<label className="sr-only" htmlFor={messageInputId}>
							Message
						</label>
						<textarea
							id={messageInputId}
							value={input}
							rows={1}
							maxLength={1200}
							placeholder="Ask about my career..."
							className="max-h-28 min-h-10 flex-1 resize-none rounded-md border border-background/20 bg-transparent px-3 py-2 text-sm outline-none transition placeholder:text-background/45 focus:border-background"
							onChange={(event) => setInput(event.target.value)}
							onKeyDown={(event) => {
								if (event.key === "Enter" && !event.shiftKey) {
									event.preventDefault();
									void submitMessage(input);
								}
							}}
						/>

						{isLoading ? (
							<button
								type="button"
								title="Stop response"
								aria-label="Stop response"
								className="grid size-10 shrink-0 place-items-center rounded-md bg-background text-neutral-white transition hover:bg-background/85"
								onClick={stop}
							>
								<Square className="size-4" aria-hidden="true" />
							</button>
						) : (
							<button
								type="submit"
								title="Send message"
								aria-label="Send message"
								disabled={!input.trim()}
								className="grid size-10 shrink-0 place-items-center rounded-md bg-background text-neutral-white transition hover:bg-background/85 disabled:cursor-not-allowed disabled:opacity-45"
							>
								<Send className="size-4" aria-hidden="true" />
							</button>
						)}
					</form>
				</section>
			) : null}

			<button
				type="button"
				title="Open portfolio AI chat"
				aria-label="Open portfolio AI chat"
				className="ml-auto grid size-14 place-items-center rounded-full bg-background text-neutral-white shadow-xl transition hover:scale-105 hover:bg-background/90"
				onClick={() => setIsOpen((current) => !current)}
			>
				<MessageCircle className="size-6" aria-hidden="true" />
			</button>
		</div>
	);
};

function ChatBubble({ message }: { message: PortfolioChatMessages[number] }) {
	const isUser = message.role === "user";
	const text = getMessageText(message);

	if (!text) {
		return null;
	}

	return (
		<div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
			<p
				className={cn(
					"max-w-[85%] whitespace-pre-wrap rounded-md px-3 py-2 text-sm leading-5",
					isUser
						? "bg-background text-neutral-white"
						: "bg-background/10 text-background",
				)}
			>
				{text}
			</p>
		</div>
	);
}

function getMessageText(message: PortfolioChatMessages[number]) {
	return message.parts
		.filter((part) => part.type === "text")
		.map((part) => part.content)
		.join("");
}
