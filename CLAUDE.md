# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 14, showcasing Mario Brusarosco's work as a Front End Developer. The site is deployed at https://mariobrusarosco.com/.

## Development Commands

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linter
yarn lint
```

## Architecture & Structure

### Next.js App Router Architecture

The project uses Next.js 14 with the App Router. The structure follows a domain-driven approach:

- **`src/app/`** - Next.js App Router pages and layouts
  - Routes: `/`, `/experience`, `/knowledge`, `/side-projects`
  - Each route has dynamic segments via `[slug]` directories
  - Global layout with header/footer in `app/layout.tsx`

- **`src/domain/`** - Business logic organized by domain
  - `experience/` - Work experience domain
  - `knowledge/` - Technical knowledge domain
  - `side-projects/` - Personal projects domain
  - `shared/` - Shared components, hooks, utilities
  - `styling/` - Design system (fonts, palette, theming)

### Key Architectural Patterns

**Domain-Driven Organization**: Each feature domain (`experience`, `knowledge`, `side-projects`) contains:
- `components/` - Domain-specific React components
- `hooks/` - Custom React hooks
- `typing/` - TypeScript interfaces and types
- `constants.tsx` - Domain constants and configuration
- `animations.ts` - Framer Motion animation variants

**Dynamic Theming System**:
- Route-based color themes defined in `src/domain/shared/typing/constants.ts` (see `portfolioRouting`)
- `ThemeSetup` component in `src/domain/styling/theming.ts` dynamically sets CSS variables (`--active-primary`, `--active-secondary`) based on current route
- Tailwind classes use these variables via `active-primary` and `active-secondary` color tokens

**Responsive Background Images**:
- Five breakpoint-specific background images in `public/`
- Configured in `tailwind.config.ts` and applied in root layout
- Breakpoints: mobile, tablet, desktop, desktop-large, full-hd

### Styling

- **Tailwind CSS** with custom configuration in `tailwind.config.ts`
- Path alias: `@/*` maps to `./src/*`
- Custom breakpoints: `sm` (480px), `md` (768px), `lg` (1336px), `xl` (1536px), `fh` (1920px)
- Custom fonts: Josefin Sans (sans-serif) and Josefin Slab (serif)
- Color palette in `src/domain/styling/palette.ts`
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

## Node Version

- Required: Node.js 22.x (specified in `package.json` engines)
