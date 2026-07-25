# Gemini Context for Portfolio Project

## Project Overview
This project is a modern web application for a conference (Haute Pâtisserie 2026), built using the **TanStack Start** framework. It features a file-based routing system, markdown-based content management for speakers and talks, and an AI-powered assistant named "Remy".

## Tech Stack
*   **Framework:** [TanStack Start](https://tanstack.com/start/latest) (React, Vite, TanStack Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
*   **Data Content:** `@content-collections` (Markdown based)
*   **AI Integration:** `@tanstack/ai` (Supports Anthropic, OpenAI, Gemini, Ollama)
*   **State Management:** `@tanstack/store`
*   **Linting/Formatting:** Biome
*   **Testing:** Vitest

## Key Commands
*   **Development:** `npm run dev` (Starts dev server on port 3000)
*   **Build:** `npm run build`
*   **Test:** `npm run test`
*   **Lint:** `npm run lint`
*   **Format:** `npm run format`
*   **Check:** `npm run check`

## Project Structure
*   `content/`: Contains Markdown files for `speakers` and `talks`.
*   `src/routes/`: File-based routes for TanStack Router.
    *   `__root.tsx`: Main layout (Header, Shell).
    *   `index.tsx`: Homepage.
    *   `api.remy-chat.ts`: API endpoint for the AI assistant.
*   `src/domains/`: Domain-driven component architecture.
    *   `global/`: Shared components (Header, RemyAssistant, Cards) and hooks.
    *   `components-library/`: Low-level UI components.
*   `src/lib/`: Utility functions and hooks (e.g., `conference-ai-hook.ts`).
*   `content-collections.ts`: Schema definition for content collections.

## Development Conventions
*   **Routing:** New pages should be added to `src/routes/`. Use `createFileRoute` for type-safe routing.
*   **Data Access:** Content is accessed via imports from `content-collections` (e.g., `import { allSpeakers } from "content-collections"`).
*   **AI Components:** The AI assistant uses Server-Sent Events (SSE). Logic resides in `src/lib/conference-ai-hook.ts`.
*   **Styling:** Use Tailwind utility classes. Combine classes using `cn()` (clsx + tailwind-merge) if available or standard template literals.
*   **State:** Use `@tanstack/store` for global client-state (like toggling the AI assistant visibility).
*   **Naming:** All filenames must use `kebab-case` (e.g., `user-profile.tsx`, `use-auth.ts`), including components.
*   **Imports:** **Always use** absolute imports with the `@/` alias (e.g., `@/lib/utils`). Relative imports are strictly forbidden.
