/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["var(--font-montserrat)", "sans-serif"]
      },
       backgroundImage: {
        "main": "url('/main-bg.svg')"
      },
      colors: {
        "neutral-white": "#FFF",
        "neutral-black": "#000",
        "primary-base": "#FF6D6D",
        "primary-dark": "#BB2253",
        "secondary-base": "#0D78A0",
      }
    },
  },
  plugins: [],
}

