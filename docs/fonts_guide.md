# Staatliches Font Alternatives & Self-Hosting Guide

## 10 Alternatives to Staatliches

Here are 10 excellent alternatives, focusing on the same tall, bold, and geometric aesthetic as Staatliches.

### Google Fonts (Easiest to implement)

1.  **Bebas Neue**: The most popular alternative. It's a clean, condensed, all-caps font that is very versatile.
2.  **Teko**: A square, geometric, and high-contrast typeface. Very similar "techno" and industrial feel.
3.  **Anton**: Tall and bold. It has slightly more curves than Staatliches but fits the same "impactful display" role well.
4.  **Fjalla One**: Carefully adjusted to the restrictions of the screen. A medium-contrast display sans that is slightly more humanist but distinct.
5.  **Barlow Condensed**: Part of the "Barlow" super-family. The "ExtraBold" or "Black" weights are very close to Staatliches in feel.
6.  **Oswald**: A classic web font redesign of the "Alternate Gothic" style. It’s a bit more "news-y" but works great for headers.
7.  **Saira Extra Condensed**: Another geometric sans that offers many weights. The heavy weights are a great match.
8.  **Antonio**: Designed specifically for web browsers, good readability in uppercase.
9.  **Pathway Gothic One**: A narrow, condensed grotesque. It has a slightly more "art nouveau" or quirky character like Staatliches.
10. **Six Caps**: An extremely condensed tight display font, for when you want that very tall, narrow 19th-century wood type look.

---

## Guide: How to Self-Host Fonts (Netlify + Vite)

Since this project uses **Vite** and **Tailwind CSS v4**, the best way to host these fonts is to serve them as static assets. This ensures they load instantly without relying on Google's servers, which is great for performance and privacy.

### Step 1: Download the Files

1.  Go to [Google Webfonts Helper](https://gwfh.mranftl.com/fonts).
2.  Search for your chosen font (e.g., "Bebas Neue").
3.  Select the styles you need (usually just "Regular" or "400" for these display fonts).
4.  Scroll down to "Download files" and download the zip.
5.  Extract the `.woff2` files.

### Step 2: Add Files to Your Project

1.  Navigate to your project's `public` folder.
2.  Create a new folder named `fonts`.
3.  Paste the `.woff2` files there (e.g., `public/fonts/bebas-neue-v10-latin-regular.woff2`).

### Step 3: Define the Font in CSS

Open your `src/styles.css` file and add the `@font-face` definition **before** your theme configuration.

```css
/* src/styles.css */

/* 1. Define the font face */
@font-face {
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  /* /fonts/ path works because it is in the public folder */
  src: url("/fonts/bebas-neue-v10-latin-regular.woff2") format("woff2");
  font-display: swap;
}

@import "tailwindcss";
@plugin "tailwindcss-animate";

/* ... existing config ... */

@theme inline {
  /* 2. Register it in your Tailwind Theme */
  /* You can replace an existing font or add a new one */

  /* Example: Replacing the display font */
  --font-display: "Bebas Neue", "Playfair Display", sans-serif;

  /* ... existing theme variables ... */
}
```

### Step 4: Use it in your code

Now you can use the class `font-display` in your HTML/React components, and it will use your self-hosted font.

```tsx
<h1 className="font-display text-4xl">HEADLINE TEXT</h1>
```

### Why this works for Netlify

Netlify automatically serves everything in the `public/` directory at the root URL. So your CSS asking for `/fonts/name.woff2` will find the file correctly once deployed.
