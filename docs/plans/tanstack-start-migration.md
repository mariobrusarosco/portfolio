# TanStack Start Portfolio Migration Plan

## 📋 Final Stack Summary

| Layer            | Technology             | Notes                            |
| ---------------- | ---------------------- | -------------------------------- |
| **Framework**    | TanStack Start + React | Full-stack, type-safe            |
| **Routing**      | TanStack Router        | File-based, type-safe params     |
| **Hosting**      | Netlify                | Official partner, edge functions |
| **Styling**      | Tailwind CSS v4        | CSS-first configuration          |
| **Animations**   | Framer Motion          | With hydration-aware patterns    |
| **Content**      | Hardcoded TSX          | Type-safe, simple                |
| **Contact Form** | Server Functions       | TanStack Start RPC               |
| **Rendering**    | Selective SSR          | `data-only` for animated routes  |

### What We're NOT Including

- ❌ Blog
- ❌ Dark mode toggle (route-based theming only)
- ❌ External UI library (fully custom)
- ❌ CMS or MDX

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── main-bg-mobile.jpg
│   ├── main-bg-tablet.jpg
│   ├── main-bg-desktop.jpg
│   ├── main-bg-desktop-large.jpg
│   ├── main-bg-full-hd.jpg
│   └── favicon.ico
│
├── src/
│   ├── routes/                          # TanStack Router (file-based)
│   │   ├── __root.tsx                   # Root layout + page transitions
│   │   ├── index.tsx                    # Home page (/)
│   │   ├── experience/
│   │   │   ├── index.tsx                # /experience
│   │   │   └── $slug.tsx                # /experience/:slug
│   │   ├── knowledge/
│   │   │   ├── index.tsx                # /knowledge
│   │   │   └── $slug.tsx                # /knowledge/:slug
│   │   └── side-projects/
│   │       ├── index.tsx                # /side-projects
│   │       └── $slug.tsx                # /side-projects/:slug
│   │
│   ├── domain/                          # Business logic (domain-driven)
│   │   ├── experience/
│   │   │   ├── components/
│   │   │   │   ├── ExperienceCard.tsx
│   │   │   │   ├── ExperienceList.tsx
│   │   │   │   └── ExperienceDetail.tsx
│   │   │   ├── data/
│   │   │   │   └── experiences.ts       # Hardcoded experience data
│   │   │   ├── typing/
│   │   │   │   └── index.ts
│   │   │   └── animations.ts
│   │   │
│   │   ├── knowledge/
│   │   │   ├── components/
│   │   │   │   ├── KnowledgeCard.tsx
│   │   │   │   ├── KnowledgeGrid.tsx
│   │   │   │   └── KnowledgeDetail.tsx
│   │   │   ├── data/
│   │   │   │   └── knowledge.ts
│   │   │   ├── typing/
│   │   │   │   └── index.ts
│   │   │   └── animations.ts
│   │   │
│   │   ├── side-projects/
│   │   │   ├── components/
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   ├── ProjectGrid.tsx
│   │   │   │   └── ProjectDetail.tsx
│   │   │   ├── data/
│   │   │   │   └── projects.ts
│   │   │   ├── typing/
│   │   │   │   └── index.ts
│   │   │   └── animations.ts
│   │   │
│   │   ├── contact/
│   │   │   ├── components/
│   │   │   │   └── ContactForm.tsx
│   │   │   ├── typing/
│   │   │   │   └── index.ts
│   │   │   └── actions.ts               # Server function for form
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Navigation.tsx
│   │   │   │   ├── PageTransition.tsx
│   │   │   │   └── SEOHead.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useHydrated.ts
│   │   │   │   └── useRouteTheme.ts
│   │   │   ├── utils/
│   │   │   │   ├── classnames.ts        # cn() helper
│   │   │   │   └── animations.ts
│   │   │   └── typing/
│   │   │       └── constants.ts         # Route config + themes
│   │   │
│   │   └── styling/
│   │       ├── fonts.ts                 # Font configuration
│   │       └── theming.ts               # ThemeSetup component
│   │
│   ├── server/
│   │   └── functions/
│   │       └── contact.ts               # Contact form server function
│   │
│   ├── styles/
│   │   └── globals.css                  # Tailwind v4 + theme
│   │
│   ├── router.tsx                       # Router configuration
│   └── entry-client.tsx                 # Client entry point
│
├── app.config.ts                        # TanStack Start config
├── vite.config.ts                       # Vite + plugins
├── tailwind.config.ts                   # Tailwind v4 (minimal)
├── tsconfig.json
├── netlify.toml                         # Netlify deployment config
├── package.json
└── .env.example
```

---

## 📦 Dependencies

### Core Dependencies

```json
{
  "dependencies": {
    "@tanstack/react-router": "^1.95.0",
    "@tanstack/start": "^1.95.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.15.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  }
}
```

### Dev Dependencies

```json
{
  "devDependencies": {
    "@netlify/vite-plugin-tanstack-start": "^1.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "typescript": "^5.7.0",
    "vite": "^6.0.0",
    "prettier": "^3.4.0",
    "prettier-plugin-tailwindcss": "^0.6.0",
    "eslint": "^9.0.0"
  }
}
```

### Optional (for Contact Form)

```json
{
  "dependencies": {
    "resend": "^4.0.0"
  }
}
```

---

## ⚙️ Configuration Files

### `vite.config.ts`

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  plugins: [tanstackStart(), react(), tailwindcss(), netlify()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
```

### `app.config.ts`

```typescript
import { defineConfig } from "@tanstack/start/config";

export default defineConfig({
  server: {
    preset: "netlify",
  },
});
```

### `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist/client"

[build.environment]
  NODE_VERSION = "22"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

### `src/styles/globals.css` (Tailwind v4)

```css
@import "tailwindcss";

@theme {
  /* Breakpoints */
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1336px;
  --breakpoint-xl: 1536px;
  --breakpoint-fh: 1920px;

  /* Fonts */
  --font-sans: var(--font-josefin-sans), ui-sans-serif, system-ui, sans-serif;
  --font-serif: var(--font-josefin-slab), ui-serif, Georgia, serif;

  /* Base Colors */
  --color-pink-500: #d60c4e;
  --color-purple-500: #7c3aed;
  --color-blue-500: #3b82f6;
  --color-green-500: #22c55e;
  --color-orange-500: #f97316;

  /* Dynamic Theme Colors (set via JS) */
  --color-active-primary: var(--color-pink-500);
  --color-active-secondary: var(--color-purple-500);

  /* Background Images */
  --background-image-main-mobile: url("/main-bg-mobile.jpg");
  --background-image-main-tablet: url("/main-bg-tablet.jpg");
  --background-image-main-desktop: url("/main-bg-desktop.jpg");
  --background-image-main-desktop-large: url("/main-bg-desktop-large.jpg");
  --background-image-main-full-hd: url("/main-bg-full-hd.jpg");
}

/* Base styles */
@layer base {
  html {
    @apply antialiased;
  }

  body {
    @apply bg-black text-white font-sans;
    background-image: var(--background-image-main-mobile);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  @media (min-width: theme(--breakpoint-md)) {
    body {
      background-image: var(--background-image-main-tablet);
    }
  }

  @media (min-width: theme(--breakpoint-lg)) {
    body {
      background-image: var(--background-image-main-desktop);
    }
  }

  @media (min-width: theme(--breakpoint-xl)) {
    body {
      background-image: var(--background-image-main-desktop-large);
    }
  }

  @media (min-width: theme(--breakpoint-fh)) {
    body {
      background-image: var(--background-image-main-full-hd);
    }
  }
}
```

---

## 🗂️ Key Implementation Examples

### Root Layout with Page Transitions (`src/routes/__root.tsx`)

```tsx
import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/domain/shared/components/Header";
import { Footer } from "@/domain/shared/components/Footer";
import { ThemeSetup } from "@/domain/styling/theming";
import "@/styles/globals.css";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mario Brusarosco | Front End Developer</title>
      </head>
      <body>
        <ThemeSetup />
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
```

### Hydration-Aware Hook (`src/domain/shared/hooks/useHydrated.ts`)

```tsx
import { useState, useEffect } from "react";

export function useHydrated() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
}
```

### Route with Selective SSR (`src/routes/index.tsx`)

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useHydrated } from "@/domain/shared/hooks/useHydrated";

export const Route = createFileRoute("/")({
  ssr: "data-only", // Server fetches data, client renders UI
  component: HomePage,
});

function HomePage() {
  const isHydrated = useHydrated();

  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={isHydrated ? { opacity: 0, scale: 0.95 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-active-primary">
          Mario Brusarosco
        </h1>
        <p className="text-xl text-gray-300 mt-4">Front End Developer</p>
      </motion.div>
    </section>
  );
}
```

### Contact Form Server Function (`src/server/functions/contact.ts`)

```tsx
import { createServerFn } from "@tanstack/start";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: ContactFormData) => {
    if (!data.name || !data.email || !data.message) {
      throw new Error("All fields are required");
    }
    if (!data.email.includes("@")) {
      throw new Error("Invalid email address");
    }
    return data;
  })
  .handler(async ({ data }) => {
    // Option 1: Use Resend
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'your@email.com',
    //   subject: `Contact from ${data.name}`,
    //   text: data.message,
    // })

    // Option 2: Log for now (replace with your email service)
    console.log("Contact form submission:", data);

    return { success: true, message: "Message sent successfully!" };
  });
```

### Route-Based Theming (`src/domain/styling/theming.ts`)

```tsx
import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

const routeThemes = {
  "/": { primary: "#d60c4e", secondary: "#7c3aed" },
  "/experience": { primary: "#3b82f6", secondary: "#06b6d4" },
  "/knowledge": { primary: "#22c55e", secondary: "#84cc16" },
  "/side-projects": { primary: "#f97316", secondary: "#eab308" },
} as const;

export function ThemeSetup() {
  const location = useLocation();

  useEffect(() => {
    const basePath = "/" + (location.pathname.split("/")[1] || "");
    const theme =
      routeThemes[basePath as keyof typeof routeThemes] || routeThemes["/"];

    document.documentElement.style.setProperty(
      "--color-active-primary",
      theme.primary,
    );
    document.documentElement.style.setProperty(
      "--color-active-secondary",
      theme.secondary,
    );
  }, [location.pathname]);

  return null;
}
```

---

## 🚀 Implementation Roadmap

### Phase 1: Foundation (Day 1-2)

#### 1.1 Project Initialization

- [x] Create `package.json` with all dependencies
- [x] Set up `.yarnrc.yml` to use `node_modules` (avoid PnP)
- [x] Create `.gitignore` with proper exclusions
- [x] Install dependencies (`yarn install`)
- [x] Verify project runs (`yarn dev`)

#### 1.2 Build Configuration

- [x] Create `vite.config.ts` with TanStack Start + Netlify plugins
- [x] Create `app.config.ts` for TanStack Start
- [x] Create `netlify.toml` for deployment configuration
- [x] Create `tsconfig.json` with path aliases
- [x] Test build process (`yarn build`)

#### 1.3 Styling Setup

- [x] Create `src/styles/globals.css` with Tailwind v4
- [x] Configure Tailwind v4 `@theme` directive
- [x] Define color palette and custom properties
- [x] Verify Tailwind classes work in components

#### 1.4 Folder Structure

- [ ] Create `src/routes/` directory structure
- [ ] Create `src/domain/` directory structure
- [ ] Create `src/domain/shared/` with utilities
- [ ] Create `src/domain/styling/` for theming
- [ ] Create `src/styles/` for global styles
- [ ] Create placeholder directories for future domains (experience, knowledge, side-projects, contact)

#### 1.5 Core Utilities & Hooks

- [ ] Create `cn()` utility (`src/domain/shared/utils/classnames.ts`)
- [ ] Create `useHydrated()` hook (`src/domain/shared/hooks/useHydrated.ts`)
- [ ] Create route theme constants (`src/domain/shared/typing/constants.ts`)
- [ ] Create shared animation utilities (if needed)

#### 1.6 Root Layout & Routing

- [ ] Create `src/routes/__root.tsx` with HTML structure
- [ ] Implement page transitions with Framer Motion `AnimatePresence`
- [ ] Create `src/routes/index.tsx` (home page)
- [ ] Set up selective SSR (`ssr: 'data-only'` for animated routes)
- [ ] Test page transitions work correctly

#### 1.7 Theming System

- [ ] Create `ThemeSetup` component (`src/domain/styling/theming.tsx`)
- [ ] Implement route-based color theme switching
- [ ] Configure CSS custom properties for active theme colors
- [ ] Test theme changes on route navigation

#### 1.8 Development Environment

- [ ] Verify dev server starts without errors
- [ ] Test hot module replacement (HMR)
- [ ] Verify TypeScript compilation
- [ ] Check for any linting errors

#### 1.9 Netlify Deployment Setup

- [ ] Connect repository to Netlify
- [ ] Configure build settings in Netlify dashboard
- [ ] Set environment variables (if needed)
- [ ] Deploy empty shell to Netlify
- [ ] Verify deployment works and site is accessible
- [ ] Test production build locally (`yarn build && yarn start`)

### Phase 2: Core Pages (Day 3-5)

- [ ] Home page with hero section
- [ ] Experience list + detail pages
- [ ] Knowledge grid + detail pages
- [ ] Side Projects grid + detail pages
- [ ] Navigation component

### Phase 3: Polish (Day 6-7)

- [ ] Page transition animations
- [ ] Component-level animations (cards, reveals)
- [ ] Responsive design across breakpoints
- [ ] SEO meta tags per route
- [ ] Contact form with server function

### Phase 4: Launch (Day 8)

- [ ] Final testing across devices
- [ ] Performance audit (Lighthouse)
- [ ] Domain configuration
- [ ] Go live! 🎉

---

## 🔗 Useful Resources

- [TanStack Start Docs](https://tanstack.com/start/latest)
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [Netlify TanStack Start Guide](https://docs.netlify.com/frameworks/tanstack-start/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## 📝 Notes

- Node.js 22.x required
- Use `yarn` for package management (per user preference)
- Domain: mario.productions (to be configured in Netlify)
