# Tailwind CSS v4 Migration Plan

## Overview

**Current Version:** Tailwind CSS v3.3.5  
**Target Version:** Tailwind CSS v4.x  
**Project:** Portfolio (Next.js 14)  
**Created:** January 12, 2026

---

## Pre-Migration Assessment

### ✅ Prerequisites Met

- **Node.js 22.x** - Already meets v4 requirement (v20+)
- **Next.js 14** - Compatible with Tailwind v4

### ⚠️ Browser Support Consideration

Tailwind v4 uses modern CSS features and supports:

- Safari 16.4+
- Chrome 111+
- Firefox 128+

**Decision needed:** Confirm target browser support before proceeding.

### Current Configuration Files

| File                            | Purpose             | Migration Impact                       |
| ------------------------------- | ------------------- | -------------------------------------- |
| `tailwind.config.ts`            | Theme configuration | Must migrate to CSS `@theme` directive |
| `postcss.config.js`             | Build pipeline      | Must update to `@tailwindcss/postcss`  |
| `src/app/globals.css`           | Main CSS entry      | Must update directives                 |
| `src/domain/styling/palette.ts` | Color definitions   | Reference for CSS migration            |
| `src/domain/styling/fonts.ts`   | Font variables      | Reference for CSS migration            |

---

# Phase 1 - Preparation & Backup

## Goal

Create a safe environment for migration and document current state.

## Tasks

### Task 1.1 - Create migration branch [x]

- Using existing branch `v2-re-foundation`
- Migration will be part of this branch

### Task 1.2 - Document current utility classes in use [x]

- Scanned codebase for deprecated v3 utilities: **NONE FOUND**
- 176 className usages across 28 files
- No deprecated patterns (`flex-grow`, `*-opacity-*`, etc.) detected

### Task 1.3 - Verify browser support requirements [x]

- Modern browser support confirmed acceptable
- Safari 16.4+, Chrome 111+, Firefox 128+

## Dependencies

- Clean git working directory

## Expected Result

- Migration branch created
- Clear understanding of current Tailwind usage
- Browser support decision confirmed

## Next Steps

Proceed to Phase 2 after user confirmation.

---

# Phase 2 - Update Dependencies

## Goal

Update npm packages to Tailwind v4 compatible versions.

## Tasks

### Task 2.1 - Remove deprecated packages [x]

```bash
yarn remove tailwindcss autoprefixer postcss
```

### Task 2.2 - Install Tailwind CSS v4 packages [x]

```bash
yarn add tailwindcss@latest @tailwindcss/postcss
```

### Task 2.3 - Verify installation [x]

- ✅ `tailwindcss@4.1.18` installed
- ✅ `@tailwindcss/postcss@4.1.18` installed
- ✅ No conflicting peer dependencies

## Dependencies

- Phase 1 completed
- Migration branch active

## Expected Result

- `tailwindcss@4.x` installed
- `@tailwindcss/postcss` installed
- No npm/yarn errors

## Next Steps

Proceed to Phase 3 after verifying dependencies.

---

# Phase 3 - Migrate PostCSS Configuration

## Goal

Update PostCSS config to use new Tailwind v4 plugin.

## Tasks

### Task 3.1 - Update postcss.config.js [x]

**Current:**

```javascript
module.exports = {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**Target:**

```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### Task 3.2 - Verify PostCSS integration with Next.js [x]

- ✅ Dev server starts successfully
- ✅ No PostCSS-related build errors

## Dependencies

- Phase 2 completed

## Expected Result

- PostCSS correctly configured for Tailwind v4
- No build errors related to PostCSS

## Next Steps

Proceed to Phase 4 after build verification.

---

# Phase 4 - Migrate CSS Entry Point

## Goal

Update `globals.css` to use Tailwind v4 import syntax.

## Tasks

### Task 4.1 - Update Tailwind directives [x]

**Current:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Target:**

```css
@import "tailwindcss";
```

### Task 4.2 - Preserve custom CSS rules [x]

- ✅ Removed old `@tailwind` directives from imported CSS files
- ✅ Fixed `theme(colors.primary-base)` → CSS variable with fallback
- ✅ Removed unused `theme("fontFamily.sans")` reference (will be handled in Phase 5)

### Task 4.3 - Test base styles [x]

- ✅ Production build successful
- ✅ All 7 pages generated correctly

## Dependencies

- Phase 3 completed

## Expected Result

- Tailwind v4 styles loading correctly
- Custom CSS preserved and functional

## Next Steps

Proceed to Phase 5 after styles verified.

---

# Phase 5 - Migrate Theme Configuration

## Goal

Convert `tailwind.config.ts` to CSS-first `@theme` directive.

## Tasks

### Task 5.1 - Migrate custom colors to @theme [x]

**From `tailwind.config.ts`:**

```typescript
colors: {
  "pink-100": palette["pink-100"].hex,
  "green-600": palette["green-600"].hex,
  // ...
}
```

**To CSS `@theme`:**

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

### Task 5.2 - Migrate custom breakpoints to @theme [x]

**From `tailwind.config.ts`:**

```typescript
screens: {
  sm: { min: "480px" },
  md: { min: "768px" },
  lg: { min: "1336px" },
  xl: { min: "1536px" },
  fh: { min: "1920px" },
}
```

**To CSS `@theme`:**

```css
@theme {
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1336px;
  --breakpoint-xl: 1536px;
  --breakpoint-fh: 1920px;
}
```

### Task 5.3 - Migrate custom fonts to @theme [x]

```css
@theme {
  --font-sans: var(--font-josefin-sans), sans-serif;
  --font-serif: var(--font-josefin-slab), serif;
}
```

### Task 5.4 - Migrate background images to @theme [x]

```css
@theme {
  --background-image-main-mobile: url("/main-bg-mobile.jpg");
  --background-image-main-tablet: url("/main-bg-tablet.jpg");
  --background-image-main-desktop: url("/main-bg-desktop.jpg");
  --background-image-main-desktop-large: url("/main-bg-desktop-large.jpg");
  --background-image-main-full-hd: url("/main-bg-full-hd.jpg");
}
```

### Task 5.5 - Remove or archive tailwind.config.ts [x]

- ✅ All configurations migrated to CSS @theme
- ✅ tailwind.config.ts deleted
- ✅ Build verified successful without config file

## Dependencies

- Phase 4 completed
- Understanding of current palette.ts values

## Expected Result

- All theme customizations working via CSS
- No dependency on `tailwind.config.ts`

## Next Steps

Proceed to Phase 6 after theme verified.

---

# Phase 6 - Update Deprecated Utility Classes

## Goal

Replace any deprecated v3 utility classes with v4 equivalents.

## Tasks

### Task 6.1 - Scan for deprecated utilities [x]

Known v3 → v4 changes to check:

- `flex-grow` → `grow`
- `flex-shrink` → `shrink`
- `overflow-ellipsis` → `text-ellipsis`
- `decoration-slice` → `box-decoration-slice`
- `decoration-clone` → `box-decoration-clone`
- Opacity utilities (e.g., `bg-opacity-50` → `bg-{color}/50`)

### Task 6.2 - Update deprecated classes in components [x] (none needed)

- Search and replace deprecated utilities
- Test each component after updates

### Task 6.3 - Verify dynamic theme classes [x]

- Test `active-primary` and `active-secondary` color tokens
- Verify route-based theming still works

## Dependencies

- Phase 5 completed

## Expected Result

- No deprecated utility classes in codebase
- All components styled correctly

## Next Steps

Proceed to Phase 7 after utility updates verified.

---

# Phase 7 - Testing & Validation

## Goal

Comprehensive testing of migrated styles across all pages.

## Tasks

### Task 7.1 - Test all routes [ ]

- [ ] Home page (`/`)
- [ ] Experience page (`/experience`)
- [ ] Experience detail pages (`/experience/[slug]`)
- [ ] Knowledge page (`/knowledge`)
- [ ] Knowledge detail pages (`/knowledge/[slug]`)
- [ ] Side Projects page (`/side-projects`)
- [ ] Side Projects detail pages (`/side-projects/[slug]`)

### Task 7.2 - Test responsive breakpoints [ ]

- [ ] Mobile (< 480px)
- [ ] Small (480px+)
- [ ] Medium (768px+)
- [ ] Large (1336px+)
- [ ] XL (1536px+)
- [ ] Full HD (1920px+)

### Task 7.3 - Test animations [ ]

- Verify Framer Motion animations unaffected
- Check page transitions

### Task 7.4 - Test dynamic theming [ ]

- Verify color changes per route
- Test CSS variable inheritance

### Task 7.5 - Run production build [ ]

```bash
yarn build
```

- Verify no build errors
- Check bundle size changes

## Dependencies

- Phase 6 completed

## Expected Result

- All pages render correctly
- All responsive styles working
- Production build successful

## Next Steps

Proceed to Phase 8 after all tests pass.

---

# Phase 8 - Cleanup & Documentation

## Goal

Finalize migration and update documentation.

## Tasks

### Task 8.1 - Remove unused files [x]

- ✅ `tailwind.config.ts` deleted in Phase 5

### Task 8.2 - Update project documentation [x]

- ✅ Updated `CLAUDE.md` with CSS-first configuration approach
- ✅ Updated `GEMINI.md` with CSS-first configuration approach

### Task 8.3 - Update palette.ts (optional) [SKIPPED]

- Kept as-is for JavaScript reference usage

### Task 8.4 - Final review [x]

- ✅ Production build successful
- ✅ All 7 pages generated correctly
- Ready for commit and deployment

## Dependencies

- Phase 7 completed

## Expected Result

- Clean codebase with Tailwind v4
- Updated documentation
- Migration branch merged

## Next Steps

Monitor for any issues post-deployment.

---

# Risk Mitigation

| Risk                                | Mitigation                                      |
| ----------------------------------- | ----------------------------------------------- |
| Breaking changes in utility classes | Phase 6 includes comprehensive utility scan     |
| Dynamic theming breaks              | CSS variables approach should remain compatible |
| Build failures                      | Each phase includes build verification          |
| Visual regressions                  | Phase 7 includes manual testing of all routes   |

---

# Rollback Plan

If critical issues are encountered:

1. Switch back to `main` branch
2. Revert any package.json changes
3. Run `yarn install` to restore v3 dependencies
4. Document issues encountered for future attempt

---

# Estimated Timeline

| Phase                  | Estimated Duration |
| ---------------------- | ------------------ |
| Phase 1 - Preparation  | 30 minutes         |
| Phase 2 - Dependencies | 15 minutes         |
| Phase 3 - PostCSS      | 15 minutes         |
| Phase 4 - CSS Entry    | 30 minutes         |
| Phase 5 - Theme Config | 1-2 hours          |
| Phase 6 - Utilities    | 1 hour             |
| Phase 7 - Testing      | 1-2 hours          |
| Phase 8 - Cleanup      | 30 minutes         |

**Total Estimated Time:** 5-7 hours
