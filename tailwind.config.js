/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      opacity: {
        muted: "var(--muted)",
      },
      colors: {
        dark: "var(--dark)",
        black: "var(--black)",
        light: "var(--light)",
      }
    },
  },
  plugins: [],
}

