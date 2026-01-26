# Tailwind CSS v4 - Custom Color Palette Guide

## Overview

This guide covers best practices for defining custom color palettes in Tailwind CSS v4, based on official documentation and community resources.

**Last Updated:** January 18, 2026  
**Tailwind Version:** v4.1.18

---

## Official References

| Resource | URL | Description |
|----------|-----|-------------|
| **Theme Variables** | https://tailwindcss.com/docs/theme | Official `@theme` directive documentation |
| **Colors** | https://tailwindcss.com/docs/colors | Color customization guide |
| **Upgrade Guide** | https://tailwindcss.com/docs/upgrade-guide | v3 to v4 migration |

---

## Community Resources

| Resource | URL | Description |
|----------|-----|-------------|
| Tailkits Blog | https://tailkits.com/blog/tailwind-v4-custom-colors/ | Custom colors deep-dive |
| Ni18 Blog | https://blog.ni18.in/how-to-use-custom-color-themes-in-tailwindcss-v4/ | Theme switching patterns |

---

## Tools for Palette Generation

| Tool | URL | Use Case |
|------|-----|----------|
| **UI Colors** | https://uicolors.app/create | Generate full 50-950 scales from a base color |
| **OKLCH Picker** | https://oklch.com | Design perceptually uniform color scales |
| **Realtime Colors** | https://www.realtimecolors.com | Preview palettes in realistic UI context |
| **Tailwind Color Generator** | https://javisperez.github.io/tailwindcolorshades/ | Quick shade generation |

---

## Key Concepts

### 1. The `@theme` Directive

In Tailwind v4, all theme customization happens in CSS using `@theme`:

```css
@import "tailwindcss";

@theme {
  --color-brand: #d60c4e;
}
```

This automatically creates utility classes like `bg-brand`, `text-brand`, `border-brand`.

### 2. Theme Variable Namespaces

| Namespace | Generated Utilities | Example |
|-----------|---------------------|---------|
| `--color-*` | `bg-*`, `text-*`, `border-*`, etc. | `--color-primary` → `bg-primary` |
| `--font-*` | `font-*` | `--font-display` → `font-display` |
| `--breakpoint-*` | Responsive variants | `--breakpoint-sm` → `sm:*` |
| `--spacing-*` | `p-*`, `m-*`, `gap-*`, etc. | `--spacing-4` → `p-4` |
| `--radius-*` | `rounded-*` | `--radius-lg` → `rounded-lg` |
| `--shadow-*` | `shadow-*` | `--shadow-md` → `shadow-md` |

### 3. OKLCH Color Format

Tailwind v4 uses OKLCH by default for perceptually uniform colors:

```css
@theme {
  /* OKLCH: oklch(lightness chroma hue) */
  --color-primary-500: oklch(0.55 0.24 350);
}
```

**Benefits:**
- Consistent perceived brightness across hues
- Better color interpolation
- More predictable shade generation

**Browser Support:** All modern browsers (Safari 15.4+, Chrome 111+, Firefox 113+)

### 4. Resetting Default Colors

To use only custom colors:

```css
@theme {
  /* Reset all default colors */
  --color-*: initial;
  
  /* Define your custom palette */
  --color-primary: #d60c4e;
  --color-secondary: #6a9b96;
}
```

Or disable specific color families:

```css
@theme {
  --color-slate-*: initial;
  --color-gray-*: initial;
  --color-zinc-*: initial;
}
```

---

## Best Practices

### 1. Use Semantic Color Names

```css
/* ✅ Good - Purpose-based */
@theme {
  --color-primary: #d60c4e;
  --color-surface: #ffffff;
  --color-foreground: #18181b;
}

/* ❌ Avoid - Hue-based */
@theme {
  --color-pink: #d60c4e;
  --color-white: #ffffff;
}
```

### 2. Define Shade Scales

```css
@theme {
  --color-primary-50: oklch(0.97 0.02 350);
  --color-primary-100: oklch(0.94 0.04 350);
  --color-primary-200: oklch(0.88 0.08 350);
  --color-primary-300: oklch(0.78 0.14 350);
  --color-primary-400: oklch(0.65 0.20 350);
  --color-primary-500: oklch(0.55 0.24 350);  /* Base */
  --color-primary-600: oklch(0.48 0.22 350);
  --color-primary-700: oklch(0.40 0.18 350);
  --color-primary-800: oklch(0.32 0.14 350);
  --color-primary-900: oklch(0.24 0.10 350);
  --color-primary-950: oklch(0.15 0.06 350);
}
```

### 3. Organize by Category

```css
@theme {
  /* ═══════════════════════════════════
     BRAND COLORS
     ═══════════════════════════════════ */
  --color-brand: #d60c4e;
  --color-brand-light: #f46d93;
  --color-brand-dark: #860731;

  /* ═══════════════════════════════════
     SEMANTIC COLORS
     ═══════════════════════════════════ */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;

  /* ═══════════════════════════════════
     NEUTRALS
     ═══════════════════════════════════ */
  --color-neutral-50: oklch(0.985 0 0);
  --color-neutral-100: oklch(0.970 0 0);
  /* ... */
  --color-neutral-950: oklch(0.145 0 0);

  /* ═══════════════════════════════════
     SURFACE / BACKGROUND
     ═══════════════════════════════════ */
  --color-surface: #ffffff;
  --color-surface-elevated: #fafafa;

  /* ═══════════════════════════════════
     TEXT / FOREGROUND
     ═══════════════════════════════════ */
  --color-foreground: #18181b;
  --color-foreground-muted: #71717a;
}
```

### 4. Dark Mode Support

```css
/* Light mode (default) */
@theme {
  --color-background: #ffffff;
  --color-foreground: #18181b;
  --color-primary: #d60c4e;
}

/* Dark mode via class */
@theme dark {
  --color-background: #09090b;
  --color-foreground: #fafafa;
  --color-primary: #f46d93;  /* Lighter for dark backgrounds */
}

/* Or via media query */
@media (prefers-color-scheme: dark) {
  @theme {
    --color-background: #09090b;
    --color-foreground: #fafafa;
  }
}
```

### 5. Dynamic Theme Variables

For runtime theme switching (like route-based theming):

```css
@theme {
  /* Bridge CSS variables to Tailwind */
  --color-active-primary: var(--active-primary);
  --color-active-secondary: var(--active-secondary);
}
```

```typescript
// Set via JavaScript
document.documentElement.style.setProperty('--active-primary', '#d60c4e');
```

---

## Starter Template

```css
@import "tailwindcss";

@theme {
  /* ═══════════════════════════════════
     CUSTOM COLOR PALETTE
     ═══════════════════════════════════ */

  /* Brand Primary */
  --color-primary-50: oklch(0.97 0.013 350);
  --color-primary-100: oklch(0.94 0.032 350);
  --color-primary-200: oklch(0.88 0.062 350);
  --color-primary-300: oklch(0.78 0.114 350);
  --color-primary-400: oklch(0.65 0.191 350);
  --color-primary: oklch(0.55 0.237 350);
  --color-primary-600: oklch(0.48 0.245 350);
  --color-primary-700: oklch(0.40 0.213 350);
  --color-primary-800: oklch(0.32 0.177 350);
  --color-primary-900: oklch(0.24 0.141 350);
  --color-primary-950: oklch(0.15 0.092 350);

  /* Brand Secondary */
  --color-secondary: oklch(0.65 0.08 180);
  --color-secondary-light: oklch(0.80 0.06 180);
  --color-secondary-dark: oklch(0.45 0.10 180);

  /* Accent */
  --color-accent: oklch(0.70 0.18 45);

  /* Semantic */
  --color-success: oklch(0.72 0.19 145);
  --color-warning: oklch(0.80 0.18 85);
  --color-error: oklch(0.63 0.24 25);
  --color-info: oklch(0.62 0.21 260);

  /* Neutrals (true gray) */
  --color-neutral-50: oklch(0.985 0 0);
  --color-neutral-100: oklch(0.970 0 0);
  --color-neutral-200: oklch(0.922 0 0);
  --color-neutral-300: oklch(0.870 0 0);
  --color-neutral-400: oklch(0.708 0 0);
  --color-neutral-500: oklch(0.556 0 0);
  --color-neutral-600: oklch(0.439 0 0);
  --color-neutral-700: oklch(0.371 0 0);
  --color-neutral-800: oklch(0.269 0 0);
  --color-neutral-900: oklch(0.205 0 0);
  --color-neutral-950: oklch(0.145 0 0);

  /* Surface */
  --color-surface: #ffffff;
  --color-surface-elevated: oklch(0.985 0 0);
  --color-surface-sunken: oklch(0.970 0 0);

  /* Foreground */
  --color-foreground: oklch(0.205 0 0);
  --color-foreground-muted: oklch(0.556 0 0);
  --color-foreground-subtle: oklch(0.708 0 0);
}
```

---

## Usage Examples

### In HTML (Utility Classes)

```html
<button class="bg-primary text-white hover:bg-primary-600">
  Click me
</button>

<p class="text-foreground-muted">
  Secondary text
</p>

<div class="bg-surface-elevated border border-neutral-200 rounded-lg">
  Card content
</div>
```

### In Custom CSS

```css
.custom-component {
  background: var(--color-surface);
  color: var(--color-foreground);
  border: 1px solid var(--color-neutral-200);
}
```

### In JavaScript

```javascript
// Get computed value
const styles = getComputedStyle(document.documentElement);
const primaryColor = styles.getPropertyValue('--color-primary');

// Set dynamically
document.documentElement.style.setProperty('--color-primary', '#newcolor');
```

---

## Migration Notes

When migrating from Tailwind v3:

1. **Move colors from `tailwind.config.ts`** → CSS `@theme` directive
2. **Replace `theme()` function** → Use `var(--color-*)` CSS variables
3. **Update `@tailwind` directives** → `@import "tailwindcss"`
4. **Remove external palette files** → Inline colors in CSS or keep for JS-only usage

---

## Related Documentation

- [Tailwind v4 Migration Guide](./tailwind-v4-migration-guide.md)
- [Migration Plan](./plans/tailwind-v4-migration.md)




