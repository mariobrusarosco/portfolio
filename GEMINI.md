# GEMINI.md

This file serves as a context and instruction manual for the Gemini AI agent working on this project.

## Project Overview

This is a personal portfolio website for Mario Brusarosco, built using **Next.js 14** (App Router) and **TypeScript**. It showcases professional experience, technical knowledge, and side projects.

### Key Technologies
-   **Framework:** Next.js 14 (App Router)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS (with `prettier-plugin-tailwindcss`)
-   **Animation:** Framer Motion
-   **Package Manager:** Yarn (implied by `yarn.lock`)

## Architecture

The project follows a **Domain-Driven Design** approach within the Next.js App Router structure.

### Directory Structure
-   **`src/app/`**: Next.js App Router file-system based routing.
    -   Routes correspond to domains: `/experience`, `/knowledge`, `/side-projects`.
    -   Uses `layout.tsx` for global and nested layouts.
    -   Uses `page.tsx` for route content.
    -   Uses `loading.tsx` for suspense boundaries.
-   **`src/domain/`**: Contains the business logic and UI components organized by feature/domain.
    -   **`experience/`**, **`knowledge/`**, **`side-projects/`**: Feature-specific domains.
    -   **`shared/`**: Common components (`app-header`, `app-footer`), hooks, and utilities.
    -   **`styling/`**: Global design tokens, fonts, and theming logic.

### Domain Structure
Each domain directory typically contains:
-   `components/`: React components specific to that domain.
-   `hooks/`: Custom hooks.
-   `typing/`: TypeScript interfaces and types.
-   `constants.ts`: Configuration data (often driving the UI).
-   `animations.ts`: Framer Motion variants.

## Development Conventions

### Styling & Theming
-   **Tailwind CSS v4**: Used for all styling with CSS-first configuration.
-   **Theme Configuration**: All customizations (colors, breakpoints, fonts, backgrounds) are defined in `src/app/globals.css` using the `@theme` directive (no `tailwind.config.ts`).
-   **Dynamic Theming**: The application uses a route-based theming system.
    -   **`ThemeSetup` component** (`src/domain/styling/theming.ts`): Listens to route changes and updates CSS variables `--active-primary` and `--active-secondary`.
    -   **Usage**: Use `text-active-primary`, `bg-active-secondary`, etc., in Tailwind classes.
    -   **Configuration**: Route colors are defined in `src/domain/shared/typing/constants.ts` (`portfolioRouting`).
-   **Responsive Backgrounds**: Different background images are loaded based on breakpoints (configured in `@theme` directive).
-   **Fonts**: Josefin Sans (sans) and Josefin Slab (serif).

### Animations
-   **Framer Motion**: Used for page transitions and component reveals.
-   **Patterns**: Animation variants are stored in `animations.ts` files within their respective domains.

### Utilities
-   **`cn()`**: Use the `cn` utility (from `src/domain/shared/utils/classnames.ts`) for conditional class joining (merges `clsx` and `tailwind-merge`).

## Building and Running

The project requires **Node.js 22.x**.

| Command | Description |
| :--- | :--- |
| `yarn dev` | Starts the development server. |
| `yarn build` | Builds the application for production. |
| `yarn start` | Starts the production server. |
| `yarn lint` | Runs ESLint. |

> **Note:** No unit testing framework (like Jest or Vitest) is currently configured in `scripts`.
