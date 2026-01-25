# Mario Brusarosco

## Front End Developer

Hi, this is my personal portfolio project. It's under construction so new things will be shipped to
"production" pretty soon!

## Motivation

To make it easier for people to understand my work, interests, skills, projects, and experiences.

## Production URL

https://mario.productions

## Stack

- **Framework**: TanStack Start + React
- **Routing**: TanStack Router (file-based, type-safe)
- **Hosting**: Netlify
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript

## Package Management

This project uses **Yarn with `node_modules`** (traditional approach) instead of Yarn PnP. The `.yarnrc.yml` file configures this:

```yaml
nodeLinker: node-modules
```

**Why this matters:**
- Prevents Yarn from generating `.pnp.cjs` and `.pnp.loader.mjs` files in the project root
- Uses the familiar `node_modules/` directory that most tools expect
- Better compatibility with build tools and deployment platforms (Netlify, Vite, etc.)
- Standard practice for most JavaScript projects

## Development Commands

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Type checking
yarn typecheck
```

## Architecture

This portfolio uses a **domain-driven architecture** with TanStack Start:

- **`src/routes/`** - File-based routing (TanStack Router)
- **`src/domain/`** - Business logic organized by domain
  - `experience/` - Work experience domain
  - `knowledge/` - Technical knowledge domain
  - `side-projects/` - Personal projects domain
  - `shared/` - Shared components, hooks, utilities
  - `styling/` - Design system (theming, fonts)
- **`src/server/`** - Server functions (RPC)
- **`src/styles/`** - Global styles (Tailwind v4)

### Key Features

- **Route-based theming** - Colors change per section
- **Page transitions** - Smooth animations between routes
- **Selective SSR** - Optimized rendering for animations
- **Type-safe** - End-to-end type safety with TanStack Start