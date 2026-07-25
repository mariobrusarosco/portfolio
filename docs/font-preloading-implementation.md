# Font Preloading Implementation Guide ✅ IMPLEMENTED

## 📋 Overview

This document explains the font optimization strategy implemented in this portfolio project, covering **what** we're doing, **how** we're doing it, and **why** each step matters.

---

## 🎯 Goals

1. **Eliminate FOUT** (Flash of Unstyled Text) - No visible text "jump" when fonts load
2. **Reduce CLS** (Cumulative Layout Shift) - Better Core Web Vitals scores
3. **Faster font loading** - Fonts available before first paint
4. **Reduced external dependencies** - No reliance on Google's CDN availability

---

## 🔍 Current State (Before)

### How fonts are loaded now:

```
src/routes/__root.tsx
└── head() → links[]
    ├── preconnect to fonts.googleapis.com
    ├── preconnect to fonts.gstatic.com
    └── stylesheet from Google Fonts API
        └── Loads: Barlow Condensed, Cormorant Garamond, Josefin Sans
            └── ALL weights (18+ variants!) ❌ Overkill
```

### Problems with current approach:

| Issue | Impact |
|-------|--------|
| **Late font discovery** | Browser only finds fonts after parsing CSS |
| **External dependency** | Relies on Google's servers being fast |
| **Too many weights** | Loading 18+ font variants we don't use |
| **No preloading** | Fonts compete with other resources |
| **FOUT visible** | Text flashes when fonts swap in |

---

## 🚀 New State (After)

### How fonts will be loaded:

```
public/fonts/
├── josefin-sans-regular.woff2      (body text)
├── josefin-sans-600.woff2          (semi-bold body)
├── barlow-condensed-700.woff2      (display headings)
└── cormorant-garamond-regular.woff2 (accent text)

src/styles.css
└── @font-face declarations with font-display: swap

src/routes/__root.tsx
└── beforeLoad() → ReactDOM.preload() for critical fonts
```

---

## 📚 Technical Explanation

### What is `ReactDOM.preload()`?

A React 19 API that tells the browser to start downloading a resource **immediately**, before it's actually needed.

```typescript
import { preload } from 'react-dom';

// This runs early in the React lifecycle
preload("/fonts/my-font.woff2", { 
  as: "font",           // Resource type (helps browser prioritize)
  type: "font/woff2",   // MIME type
  crossOrigin: "anonymous"  // Required for fonts, even self-hosted!
});
```

### Why `crossOrigin: "anonymous"` for self-hosted fonts?

This is a **critical gotcha**! Fonts are fetched with CORS by default. If the preload doesn't match the actual font request's CORS mode, the browser will download the font **twice**.

From the spec: *"Font fetching requires anonymous CORS mode, so the preload must match."*

### What is `font-display: swap`?

A CSS property that controls how fonts render while loading:

| Value | Behavior |
|-------|----------|
| `auto` | Browser decides (usually `block`) |
| `block` | Hide text until font loads (causes FOIT) |
| `swap` | Show fallback immediately, swap when ready |
| `fallback` | Short block period, then fallback forever |
| `optional` | Very short block, may never swap |

We use `swap` because:
- Text is always visible (good for UX)
- Combined with preloading, the swap happens so fast it's invisible

### Why self-host instead of Google Fonts CDN?

| Aspect | Google Fonts CDN | Self-Hosted |
|--------|------------------|-------------|
| **First visit** | 2 DNS lookups + 2 connections | Same origin |
| **Caching** | Shared cache (privacy concerns) | Your cache |
| **Privacy** | Google tracks requests | No tracking |
| **Control** | Google decides format/subsetting | Full control |
| **Reliability** | Depends on Google | Your server |

---

## 🛠️ Implementation Steps

### Step 1: Download Font Files

**Source:** [Google Webfonts Helper](https://gwfh.mranftl.com/fonts)

**Fonts to download:**

1. **Josefin Sans** - Regular (400), SemiBold (600)
   - Used for: Body text (`font-body`)
   
2. **Barlow Condensed** - Bold (700)
   - Used for: Display headings (`font-display`)
   
3. **Cormorant Garamond** - Regular (400), Italic (400i)
   - Used for: Accent/serif text

**Why only these weights?**
- Current CSS only uses these specific weights
- Each font file is ~20-40KB
- Loading unused weights wastes bandwidth

### Step 2: Add Font Files to Project

```
public/
└── fonts/
    ├── josefin-sans-v32-latin-regular.woff2
    ├── josefin-sans-v32-latin-600.woff2
    ├── barlow-condensed-v12-latin-700.woff2
    ├── cormorant-garamond-v16-latin-regular.woff2
    └── cormorant-garamond-v16-latin-italic.woff2
```

### Step 3: Define @font-face in CSS

```css
/* src/styles.css - Add BEFORE @import 'tailwindcss' */

@font-face {
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/josefin-sans-v32-latin-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/josefin-sans-v32-latin-600.woff2') format('woff2');
}

/* ... more @font-face declarations */
```

### Step 4: Add ReactDOM.preload() Calls

```typescript
// src/routes/__root.tsx
import { preload } from 'react-dom';

export const Route = createRootRoute({
  beforeLoad: () => {
    // Preload critical above-the-fold fonts
    preload("/fonts/josefin-sans-v32-latin-regular.woff2", {
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous"
    });
    preload("/fonts/barlow-condensed-v12-latin-700.woff2", {
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous"
    });
  },
  // ... rest of config
});
```

### Step 5: Remove Google Fonts Links

Remove from `head()`:
- `preconnect` to `fonts.googleapis.com`
- `preconnect` to `fonts.gstatic.com`  
- `stylesheet` link to Google Fonts API

---

## 📊 Expected Results

### Performance Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Font requests | 3 external | 0 external | -3 requests |
| DNS lookups | 2 | 0 | -2 lookups |
| Font file size | ~150KB+ | ~80KB | ~50% smaller |
| Time to font | ~300-500ms | ~50-100ms | 3-5x faster |
| CLS score | Variable | Near 0 | Significant |

### User Experience

- ✅ No visible text flash on page load
- ✅ Consistent typography from first paint
- ✅ Faster perceived load time
- ✅ Works offline (fonts cached locally)

---

## 🔗 References

- [React `preload` API Documentation](https://react.dev/reference/react-dom/preload)
- [web.dev: Preload web fonts](https://web.dev/articles/codelab-preload-web-fonts)
- [web.dev: Best practices for fonts](https://web.dev/articles/font-best-practices)
- [Google Webfonts Helper](https://gwfh.mranftl.com/fonts)
- [MDN: font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display)

---

## ⚠️ Important Notes

1. **Always include `crossOrigin: "anonymous"`** for font preloads, even for same-origin fonts
2. **Only preload critical fonts** - fonts needed for above-the-fold content
3. **Match preload options exactly** with how the font is requested in CSS
4. **Test with DevTools Network tab** - verify fonts load early and aren't duplicated
5. **Use `font-display: swap`** in @font-face for graceful fallback

---

*Document created: February 2026*
*Last updated: February 2026*
