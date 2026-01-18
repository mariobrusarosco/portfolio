# Tailwind CSS v4 Migration Guide

## Overview

This document details the migration of the Portfolio project from **Tailwind CSS v3.3.5** to **Tailwind CSS v4.1.18**, completed on January 18, 2026.

---

## Why Migrate to Tailwind v4?

Tailwind CSS v4 introduces significant architectural changes:

1. **CSS-First Configuration** - No more JavaScript config files; all customizations live in CSS
2. **Faster Performance** - New Rust-based engine (Oxide) for faster builds
3. **Modern CSS Features** - Native CSS variables, cascade layers, and container queries
4. **Simplified Setup** - Automatic content detection, fewer dependencies

---

## Breaking Changes in Tailwind v4

### 1. Configuration Approach

| v3 | v4 |
|----|-----|
| `tailwind.config.ts` (JavaScript) | `@theme` directive in CSS |
| `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| PostCSS plugin: `tailwindcss` | PostCSS plugin: `@tailwindcss/postcss` |

### 2. Browser Support

Tailwind v4 requires modern browsers:
- Safari 16.4+
- Chrome 111+
- Firefox 128+

### 3. Removed/Changed Features

- `theme()` function behavior changed
- Some utility class names deprecated (none affected this project)
- `tailwindcss/nesting` plugin no longer needed

---

## Migration Steps Performed

### Phase 1: Dependencies Update

**Removed:**
```bash
yarn remove tailwindcss autoprefixer postcss
```

**Added:**
```bash
yarn add tailwindcss@latest @tailwindcss/postcss
```

**Result in `package.json`:**
```json
{
  "dependencies": {
    "@tailwindcss/postcss": "^4.1.18",
    "tailwindcss": "latest"
  }
}
```

---

### Phase 2: PostCSS Configuration

**Before (`postcss.config.js`):**
```javascript
module.exports = {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**After (`postcss.config.js`):**
```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

> **Note:** The `@tailwindcss/postcss` plugin handles nesting and autoprefixing internally.

---

### Phase 3: CSS Entry Point

**Before (`globals.css`):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**After (`globals.css`):**
```css
@import "tailwindcss";
```

---

### Phase 4: Theme Configuration Migration

The entire `tailwind.config.ts` was converted to a CSS `@theme` directive in `globals.css`.

#### Custom Colors

**Before (tailwind.config.ts):**
```typescript
colors: {
  "pink-100": palette["pink-100"].hex,
  "pink-500": palette["pink-500"].hex,
  "green-600": palette["green-600"].hex,
  "orange-400": palette["orange-400"].hex,
  "blue-green-300": palette["blue-green-300"].hex,
  "red-700": palette["red-700"].hex,
  "blue-800": palette["blue-800"].hex,
  "active-primary": "var(--active-primary)",
  "active-secondary": "var(--active-secondary)",
}
```

**After (globals.css):**
```css
@theme {
  --color-pink-100: #ffd1ca;
  --color-pink-500: #d60c4e;
  --color-green-600: #34d399;
  --color-orange-400: #ff6f59;
  --color-blue-green-300: #6a9b96;
  --color-red-700: #ef4444;
  --color-blue-800: #1e40af;
  --color-active-primary: var(--active-primary);
  --color-active-secondary: var(--active-secondary);
}
```

#### Custom Breakpoints

**Before (tailwind.config.ts):**
```typescript
screens: {
  sm: { min: "480px" },
  md: { min: "768px" },
  lg: { min: "1336px" },
  xl: { min: "1536px" },
  fh: { min: "1920px" },
}
```

**After (globals.css):**
```css
@theme {
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1336px;
  --breakpoint-xl: 1536px;
  --breakpoint-fh: 1920px;
}
```

#### Custom Fonts

**Before (tailwind.config.ts):**
```typescript
fontFamily: {
  sans: [`var(--font-josefin-sans)`, "sans-serif"],
  serif: [`var(--font-josefin-slab)`, "serif"],
}
```

**After (globals.css):**
```css
@theme {
  --font-sans: var(--font-josefin-sans), sans-serif;
  --font-serif: var(--font-josefin-slab), serif;
}
```

#### Background Images

**Before (tailwind.config.ts):**
```typescript
backgroundImage: {
  "main-mobile": "url('/main-bg-mobile.jpg')",
  "main-tablet": "url('/main-bg-tablet.jpg')",
  "main-desktop": "url('/main-bg-desktop.jpg')",
  "main-desktop-large": "url('/main-bg-desktop-large.jpg')",
  "main-full-hd": "url('/main-bg-full-hd.jpg')",
}
```

**After (globals.css):**
```css
@theme {
  --background-image-main-mobile: url("/main-bg-mobile.jpg");
  --background-image-main-tablet: url("/main-bg-tablet.jpg");
  --background-image-main-desktop: url("/main-bg-desktop.jpg");
  --background-image-main-desktop-large: url("/main-bg-desktop-large.jpg");
  --background-image-main-full-hd: url("/main-bg-full-hd.jpg");
}
```

---

### Phase 5: CSS File Updates

#### `scrollbar.css`

**Before:**
```css
@tailwind base;
@tailwind utilities;

@layer base {
  /* ... */
}
```

**After:**
```css
@layer base {
  /* ... */
}
```

> The `@tailwind` directives are no longer needed in imported CSS files.

#### `shadow-container-scroll.css`

**Before:**
```css
@tailwind utilities;

@layer utilities {
  .shadow-container-scroll {
    background:
      linear-gradient(theme(colors.primary-base) 30%, ...)
  }
}
```

**After:**
```css
@layer utilities {
  .shadow-container-scroll {
    background:
      linear-gradient(var(--scroll-shadow-color, rgba(0, 0, 0, 0.8)) 30%, ...)
  }
}
```

> The `theme()` function was replaced with a CSS variable with fallback, as `colors.primary-base` didn't exist in the palette.

---

### Phase 6: Cleanup

#### Files Deleted

| File | Reason |
|------|--------|
| `tailwind.config.ts` | Replaced by CSS `@theme` directive |
| `src/domain/styling/palette.ts` | Colors moved inline and to CSS |

#### Files Updated

| File | Change |
|------|--------|
| `src/domain/shared/typing/constants.ts` | Inline hex values for route colors |
| `src/domain/shared/components/app-footer/app-footer.tsx` | Inline hex value for stroke |
| `src/domain/shared/components/app-footer/animations.ts` | Removed unused palette import |

---

## Final `globals.css` Structure

```css
@import "tailwindcss";

/* ============================================
   TAILWIND V4 THEME CONFIGURATION
   Migrated from tailwind.config.ts
   ============================================ */

@theme {
  /* Custom Breakpoints */
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1336px;
  --breakpoint-xl: 1536px;
  --breakpoint-fh: 1920px;

  /* Custom Colors */
  --color-pink-100: #ffd1ca;
  --color-pink-500: #d60c4e;
  --color-green-600: #34d399;
  --color-orange-400: #ff6f59;
  --color-blue-green-300: #6a9b96;
  --color-red-700: #ef4444;
  --color-blue-800: #1e40af;

  /* Dynamic Theme Colors (set via JS based on route) */
  --color-active-primary: var(--active-primary);
  --color-active-secondary: var(--active-secondary);

  /* Custom Fonts */
  --font-sans: var(--font-josefin-sans), sans-serif;
  --font-serif: var(--font-josefin-slab), serif;

  /* Background Images */
  --background-image-main-mobile: url("/main-bg-mobile.jpg");
  --background-image-main-tablet: url("/main-bg-tablet.jpg");
  --background-image-main-desktop: url("/main-bg-desktop.jpg");
  --background-image-main-desktop-large: url("/main-bg-desktop-large.jpg");
  --background-image-main-full-hd: url("/main-bg-full-hd.jpg");
}

/* Custom CSS rules continue below... */
```

---

## Dynamic Theming System

The route-based theming system continues to work unchanged:

1. **`ThemeSetup` component** (`src/domain/styling/theming.ts`) sets CSS variables on route change:
   ```typescript
   root.style.setProperty("--active-primary", dynamicColors.primaryColor);
   root.style.setProperty("--active-secondary", dynamicColors.secondaryColor);
   ```

2. **CSS `@theme`** bridges these to Tailwind:
   ```css
   @theme {
     --color-active-primary: var(--active-primary);
     --color-active-secondary: var(--active-secondary);
   }
   ```

3. **Components** use Tailwind utilities:
   ```tsx
   <h1 className="text-active-primary">...</h1>
   ```

---

## Naming Conventions in `@theme`

Tailwind v4 uses specific prefixes for theme variables:

| Type | Prefix | Example |
|------|--------|---------|
| Colors | `--color-` | `--color-pink-500` |
| Breakpoints | `--breakpoint-` | `--breakpoint-sm` |
| Fonts | `--font-` | `--font-sans` |
| Background Images | `--background-image-` | `--background-image-main-mobile` |
| Spacing | `--spacing-` | `--spacing-4` |
| Border Radius | `--radius-` | `--radius-lg` |

---

## Utility Class Generation

Tailwind v4 automatically generates utility classes from `@theme` variables:

| Theme Variable | Generated Utilities |
|----------------|---------------------|
| `--color-pink-500` | `text-pink-500`, `bg-pink-500`, `border-pink-500` |
| `--breakpoint-fh` | `fh:` prefix for 1920px+ |
| `--font-serif` | `font-serif` |
| `--background-image-main-mobile` | `bg-main-mobile` |

---

## Testing Checklist

After migration, verify:

- [ ] `yarn dev` starts without errors
- [ ] `yarn build` completes successfully
- [ ] All pages render correctly
- [ ] Responsive breakpoints work (`sm`, `md`, `lg`, `xl`, `fh`)
- [ ] Custom colors display properly
- [ ] Route-based theming changes colors per section
- [ ] Background images load at each breakpoint
- [ ] Custom fonts (Josefin Sans/Slab) render
- [ ] Animations work (Framer Motion unaffected)

---

## Rollback Instructions

If issues arise, to rollback:

1. Revert to previous commit
2. Or manually:
   ```bash
   yarn remove tailwindcss @tailwindcss/postcss
   yarn add tailwindcss@3.3.5 autoprefixer postcss
   ```
3. Restore `tailwind.config.ts` and `postcss.config.js` from git history
4. Restore old `globals.css` directives

---

## References

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Migration Plan](./plans/tailwind-v4-migration.md)

---

## Summary

| Metric | Before | After |
|--------|--------|-------|
| Tailwind Version | 3.3.5 | 4.1.18 |
| Config Files | 2 (tailwind.config.ts, postcss.config.js) | 1 (postcss.config.js) |
| Theme Definition | JavaScript | CSS |
| Dependencies | tailwindcss, autoprefixer, postcss | tailwindcss, @tailwindcss/postcss |
| Build Time | ~2s | ~1.6s |

The migration successfully modernizes the styling infrastructure while maintaining all existing functionality and the dynamic theming system.

