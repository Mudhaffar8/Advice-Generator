/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
      fontFamily: {
        primary: ["Manrope", "sans"],
      },
      fontSize: {
        base: "28px",
      },
      colors: {
        primary : {
          one: "var(--c-primary-one)",
          two: "var(--c-primary-two)",
        },
        neutral: {
          one: "var(--c-neutral-one)",
          two: "var(--c-neutral-two)",
          three: "var(--c-neutral-three)",
        }
      }
    },
  },
  plugins: [],
}

