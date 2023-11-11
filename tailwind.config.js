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
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
      themes: ['lofi']
    }
}

