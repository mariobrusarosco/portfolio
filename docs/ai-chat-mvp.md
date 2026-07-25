# AI Chat MVP

## Goal

Add a small AI chat experience to the portfolio where visitors can ask about Mario Brusarosco's career, projects, skills, experience, and contact paths.

The assistant should feel like Mario is available to answer questions, but it should stay grounded in curated portfolio data instead of inventing details.

## Core Decision

Use a backend route. Do not call model providers directly from browser code.

```txt
Portfolio UI
  -> server endpoint
  -> provider adapter
  -> AI model
  -> portfolio data/tools
  -> streamed response
```

The API key must live only in server-side environment variables. The browser should only know the chat endpoint URL.

## Preferred Architecture: TanStack Start API Route

This repo already uses TanStack Start, TanStack Router, Netlify, React, and TanStack AI packages. The cleanest MVP path is a TanStack Start API route.

```txt
src/domains/ai/
  portfolio-profile.ts
  portfolio-tools.ts
  use-portfolio-chat.ts

src/domains/global/components/
  ai-chat-widget.tsx

src/routes/api/chat.ts
```

Expected flow:

```txt
ai-chat-widget.tsx
  -> usePortfolioChat()
  -> fetchServerSentEvents("/api/chat")
  -> src/routes/api/chat.ts
  -> chat({ adapter, messages, tools })
  -> toServerSentEventsResponse(stream)
```

## Fallback Architecture: Netlify Function

If TanStack Start API routing or Netlify streaming creates friction, use a Netlify function instead.

```txt
src/domains/ai/
  portfolio-profile.ts
  portfolio-tools.ts
  use-portfolio-chat.ts

src/domains/global/components/
  ai-chat-widget.tsx

netlify/functions/chat.ts
```

Expected flow:

```txt
ai-chat-widget.tsx
  -> usePortfolioChat()
  -> fetchServerSentEvents("/.netlify/functions/chat")
  -> netlify/functions/chat.ts
  -> provider call
  -> streamed response
```

Use this only if Option 1 becomes awkward. The app is already built around TanStack Start, so the API route should be tried first.

## Dependency Safety First

Before changing or installing AI dependencies:

1. Pick one package manager.
2. Remove the unused lockfile.
3. Replace `"latest"` AI package versions with exact pinned versions.
4. Run one clean install.
5. Confirm `npm run build` passes.

Current cleanup candidate:

```txt
package-lock.json
yarn.lock
```

Decision: standardize on PNPM and keep a single `pnpm-lock.yaml`.

Avoid floating package versions for alpha AI packages:

```json
{
  "@tanstack/ai": "0.x.x",
  "@tanstack/ai-openai": "0.x.x",
  "@tanstack/ai-react": "0.x.x"
}
```

Pin exact versions after choosing the known-good install state.

## Provider Key Handling

Use server-only environment variables:

```txt
OPENAI_API_KEY=...
```

Never use public client env prefixes for provider keys:

```txt
VITE_OPENAI_API_KEY
NEXT_PUBLIC_OPENAI_API_KEY
PUBLIC_OPENAI_API_KEY
```

Rules:

1. Read provider keys only in server route/function code.
2. Never pass provider keys to React components.
3. Never serialize keys through route loaders, props, logs, or responses.
4. Keep provider calls inside the server endpoint.
5. Add the key in Netlify environment variables for production.

## MVP Assistant Behavior

The assistant should:

1. Answer questions about Mario's experience, skills, stack, work style, and projects.
2. Explain career history using the existing portfolio data.
3. Suggest relevant projects or experiences when visitors ask hiring-style questions.
4. Share contact links when asked how to reach Mario.
5. Say when information is not available in the portfolio data.
6. Avoid pretending to know private details, salary expectations, availability, or confidential company information unless explicitly provided.

Suggested system style:

```txt
You are Mario Brusarosco's portfolio assistant.
Answer in first person when it feels natural, but do not invent facts.
Use the provided portfolio tools and profile data as your source of truth.
Be concise, warm, technically precise, and helpful to recruiters, founders, and engineering teams.
If a detail is not available, say so and suggest how the visitor can contact Mario.
```

## Portfolio Knowledge Layer

Start with structured local data. Do not add embeddings or a vector database for the MVP.

Initial source files:

```txt
src/domains/about/screens/main.tsx
src/domains/experience/constants.ts
src/domains/projects/screens/main.tsx
src/domains/skills/screens/main.tsx
src/domains/global/components/github-link.tsx
src/domains/global/components/linkedin-link.tsx
```

The portfolio currently has richer experience data than project or skill data. The MVP should probably create a normalized AI profile file instead of scraping JSX.

Suggested file:

```txt
src/domains/ai/portfolio-profile.ts
```

Suggested shape:

```ts
export const PORTFOLIO_PROFILE = {
  name: "Mario Brusarosco",
  title: "Software Developer",
  summary: "...",
  location: "Sao Paulo, Brazil",
  links: {
    github: "...",
    linkedin: "...",
  },
  skills: [...],
  experience: [...],
  projects: [...],
}
```

## MVP Tools

Create server tools that expose curated data to the model.

Suggested tools:

```txt
getProfile()
getExperience()
getSkills()
getProjects()
getContactLinks()
searchPortfolio(query)
```

Tool principles:

1. Return compact, structured data.
2. Prefer exact portfolio facts over generated prose.
3. Keep sensitive/private info out of the data layer.
4. Make missing data explicit.

## Chat UI

Add a compact global widget that can be opened from any route.

Suggested placement:

```txt
src/routes/__root.tsx
  -> <AiChatWidget />
```

UI expectations:

1. Floating trigger button.
2. Compact chat panel.
3. Streamed assistant responses.
4. Loading state.
5. Error state.
6. Reset conversation action.
7. Suggested starter prompts.

Starter prompt examples:

```txt
What kind of frontend work does Mario do?
What was Mario's role at Origin?
Which technologies has Mario used professionally?
How can I contact Mario?
What projects should I look at first?
```

## Server Endpoint

Preferred route:

```txt
src/routes/api/chat.ts
```

Expected responsibilities:

1. Validate request shape.
2. Check provider API key.
3. Add the system prompt.
4. Attach portfolio tools.
5. Stream the response.
6. Return clear errors without leaking secrets.

Provider priority for MVP:

```txt
OpenAI first
Anthropic optional later
Ollama optional for local experiments
```

Decision: use OpenAI for the MVP, with `OPENAI_API_KEY` configured only on the server and `OPENAI_MODEL` optionally overriding the default model.

## Production Guardrails

Add lightweight protection before shipping publicly:

1. Basic rate limiting.
2. Max message length.
3. Max conversation turns.
4. Tool output size limits.
5. No secret values in logs.
6. Friendly refusal for unrelated or abusive prompts.

For MVP, rate limiting can be simple and serverless-friendly. If that is too much for the first pass, add at least message length and max-turn limits.

## Analytics Ideas

Optional after MVP:

1. Track opened chat count.
2. Track starter prompt clicks.
3. Track anonymous topic categories.
4. Track contact-intent moments.

Do not log full conversations until there is an explicit privacy decision.

## Acceptance Criteria

MVP is done when:

1. The chat widget appears globally.
2. The provider API key is only read server-side.
3. Visitors can ask career/profile questions and receive streamed responses.
4. The assistant can answer from Mario's portfolio data.
5. The assistant admits when a detail is unavailable.
6. The app builds successfully.
7. Production deployment can set the provider key through Netlify environment variables.

## Suggested Implementation Order

1. Standardize dependency management and pin AI packages.
2. Create `PORTFOLIO_PROFILE`.
3. Create portfolio tools.
4. Create the `/api/chat` server route.
5. Create the chat hook.
6. Create the chat widget.
7. Mount the widget in the root route.
8. Test locally with a server env key.
9. Build and verify production output.
10. Configure Netlify environment variables.

## Open Questions

1. Should project data be expanded before the chat launches?
2. Should final GitHub and LinkedIn URLs be encoded in the portfolio data/components?
3. Should chat analytics be added in the first release or postponed?
