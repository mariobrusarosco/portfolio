# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚨 CRITICAL: Documentation-First Rule

**BEFORE implementing ANY task or making ANY assumption:**

1. **ALWAYS navigate to and read the official documentation FIRST**
2. **Verify package names, imports, configurations, and APIs against official docs**
3. **Show what the documentation says before proceeding**
4. **NEVER guess or assume - only use verified information from official sources**

This applies to:

- ✅ ALL tasks
- ✅ ALL conversations
- ✅ ALL frameworks, libraries, and tools
- ✅ ALL configuration files
- ✅ ALL package installations

**If you don't know something, navigate to the docs and learn. Do not make assumptions.**

**Example workflow:**

1. User asks about TanStack Start setup
2. Navigate to `https://tanstack.com/start/latest/docs`
3. Read the relevant documentation section
4. Show the user what the docs say
5. Then implement based on verified information

**This rule is non-negotiable. Violating it defeats the purpose of having an AI agent.**

## Core Mandates

90% of the time, AI guidance is sloppy and workaround-based. How can I make you think less as bad engineer and incresase your level of competence?
Instead of "I recommend another workaround" as you do," you MUST BEHAVE as
"Oh, I see that you wanna level this up to enterprise techicniques, so let's finish the uncompleted work of XPTO.
Actually, let's improve the structure to become even better. Let me show a better plan, maybe we can write less code if we are smarter"...

See the difference?

1 - **Strict Scope Adherence:** Do not fix unrelated bugs, refactor code, or change naming conventions outside the explicit scope of the user's request, even if you find errors. If you
discover critical issues that block the requested task, report them to the user and ask for permission before proceeding
2 - **Strict Scope Adherence:** Focus exclusively on the user's request. Do not fix unrelated bugs, refactor code, or change naming conventions unless explicitly asked. If a deviation
adds significant value or is critical, ask for permission first.
3 - **Think Before You Act:** DO NOT RUSH. Analyze the request, reason through the solution, and plan your steps. If a request is vague, ask for clarification. Only proceed with
implementation when the path is clear and agreed upon.
4 - **Verify Assumptions:** Never guess APIs or library functionality. Always read documentation or search for examples before writing code. "Sloppy solutions" based on assumptions are
strictly forbidden.
5 - **Context Awareness:** Understand the project's existing architecture and conventions before making changes. Your goal is to provide high-quality, integrated code that respects the
current codebase
6 - **Full Context Analysis**: Read and understand ALL relevant files in their entirety
7 - **System Flow Understanding**: Map out how components interact and affect each other
8 - **Research First**: Look up official documentation and current best practices
9 - **Impact Assessment**: Analyze how proposed changes affect upstream and downstream systems
10 - **Multiple Approaches**: Present 2-3 different solution approaches with trade-offs
11 - **Evidence-Based**: Never guess - provide research and evidence for recommendations

**NEVER:**

- Jump to quick fixes without understanding the full system
- Make isolated changes without considering broader impacts
- Propose solutions based on assumptions
- Skip research and documentation review
- Run GIT 'push', 'stash', 'add' or 'commit' commands

## Planner Mode

- DO NOT WRITE THE IMPLEMENTATION CODE
- Breakdown the feature into Phases and provide a clear plan of action.
- Breakdown Phases into small tasks and provide a clear plan of action.
- Breakdown Tasks into sub tasks and provide a clear plan of action.
- Create a `.md` file for the plan. Store in the `/docs/plans` folder.
- Fprmat

```
# Phase 1

## Goal

## Tasks

### Task 1 - lorem ipsum dolor sit amet []
#### Task 1.1 - lorem ipsum dolor sit amet []
#### Task 1.1.a - lorem ipsum dolor sit amet []
#### Task 1.1.b - lorem ipsum dolor sit amet []
#### Task 1.2 - lorem ipsum dolor sit amet []
#### Task 1.2.a - lorem ipsum dolor sit amet []
#### Task 1.2.b - lorem ipsum dolor sit amet []

...


## Dependencies

## Expected Result

## Next Steps

```

- Once you finish a task or subtask, ask user to review your work.
- Wait for user's confirmation before proceeding to the next task or subtask.
- Be patient and don't rush into fixes and implementations.
- Be ready to do fixes.
- Once confirmed by the user, mark the current sub-task or task as done.
- If you need to do a fix, mark the current sub-task or task as in progress.

## Project Overview

This is a personal portfolio website built with TanStack Start + React 19, showcasing Mario Brusarosco's work as a Front End Developer. The site is deployed at https://mario.productions/.

## Development Commands

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn start

# Type checking
yarn typecheck

# Run linter
yarn lint
```

## Architecture & Structure

### TanStack Start Architecture

The project uses **TanStack Start** with **TanStack Router** for file-based routing. The structure follows a domain-driven approach:

- **`src/routes/`** - File-based routing (TanStack Router)
  - `__root.tsx` - Root route (document shell, global layout)
  - `index.tsx` - Home page (`/`)
  - `experience/` - Experience section routes
  - `knowledge/` - Knowledge section routes
  - `side-projects/` - Side projects section routes
  - `routeTree.gen.ts` - Auto-generated route tree (do not edit manually)

- **`src/domain/`** - Business logic organized by domain
  - `experience/` - Work experience domain
  - `knowledge/` - Technical knowledge domain
  - `side-projects/` - Personal projects domain
  - `shared/` - Shared components, hooks, utilities
  - `styling/` - Design system (fonts, palette, theming)

- **`src/server/`** - Server functions (RPC-style server logic)

- **`src/styles/`** - Global styles (Tailwind v4 configuration)

### Key Architectural Patterns

**Domain-Driven Organization**: Each feature domain (`experience`, `knowledge`, `side-projects`) contains:

- `components/` - Domain-specific React components
- `hooks/` - Custom React hooks
- `typing/` - TypeScript interfaces and types
- `constants.tsx` - Domain constants and configuration
- `animations.ts` - Framer Motion animation variants

**File-Based Routing (TanStack Router)**:

- Routes defined as files in `src/routes/` directory
- `__root.tsx` - Root route containing document shell (`<html>`, `<body>`, global layouts)
- `index.tsx` - Index routes (e.g., `experience/index.tsx` → `/experience`)
- `$paramName.tsx` - Dynamic route segments (e.g., `posts/$postId.tsx` → `/posts/:postId`)
- `_layout.tsx` - Layout routes that don't add URL segments (prefix with underscore)
- Auto-generated `routeTree.gen.ts` provides full type-safety

**Dynamic Theming System**:

- Route-based color themes defined in domain constants
- Theme component dynamically sets CSS variables (`--active-primary`, `--active-secondary`) based on current route
- Tailwind classes use these variables via `active-primary` and `active-secondary` color tokens

**Responsive Background Images**:

- Five breakpoint-specific background images in `public/`
- Configured via CSS `@theme` directive in `src/styles/globals.css`
- Breakpoints: mobile (480px), tablet (768px), desktop (1336px), desktop-large (1536px), full-hd (1920px)

### Styling

- **Tailwind CSS v4** with CSS-first configuration (no `tailwind.config.ts`)
- All theme customizations defined in `src/styles/globals.css` using the `@theme` directive:
  ```css
  @theme {
    --breakpoint-sm: 480px;
    --color-pink-500: #d60c4e;
    --font-sans: var(--font-josefin-sans), sans-serif;
    --background-image-main-mobile: url("/main-bg-mobile.jpg");
    /* ... */
  }
  ```
- Path alias: `@/*` maps to `./src/*` (configured in `vite.config.ts`)
- Custom breakpoints: `sm` (480px), `md` (768px), `lg` (1336px), `xl` (1536px), `fh` (1920px)
- Custom fonts: Josefin Sans (sans-serif) and Josefin Slab (serif)
- Base colors: pink, purple, blue, green, orange (500 shades)
- Dynamic theme colors: `active-primary` and `active-secondary` (set via JS based on route)
- Prettier with `prettier-plugin-tailwindcss` for class sorting

### Utilities

- **`cn()` helper**: Located in `src/domain/shared/utils/classnames.ts` - combines `clsx` and `tailwind-merge` for conditional className handling

### Animations

- **Framer Motion** for all animations
- Animation variants organized per domain (e.g., `src/domain/side-projects/animations.ts`)
- Shared animation utilities in `src/domain/shared/utils/animations.ts`

## TypeScript Configuration

- Strict mode enabled
- Path alias `@/*` for `./src/*`
- Target: ES5 with modern lib support

## Build Configuration

- **Bundler**: Vite 6 with React plugin
- **Deployment**: Netlify with `@netlify/vite-plugin-tanstack-start`
- **Server preset**: Netlify (configured in `app.config.ts`)
- **Type generation**: Automatic route tree generation via TanStack Router

## Node Version

- Required: Node.js 22.x (specified in `package.json` engines)

## Package Management

- **Yarn** with traditional `node_modules` (not Yarn PnP)
- Configuration: `.yarnrc.yml` sets `nodeLinker: node-modules`
- Ensures compatibility with Vite, Netlify, and build tools
