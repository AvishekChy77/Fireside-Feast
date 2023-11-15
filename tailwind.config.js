/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        txt: "rgba(21, 21, 21, 0.50)",
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'foo': "url('./src/assets/home/featured.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
      themes: ['light']
    }
}

