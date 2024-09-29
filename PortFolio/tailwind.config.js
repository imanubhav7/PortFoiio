/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        myFont: ["Poppins", "sans-serif"],
        myFont2: ["Oswald", "sans-serif"],
      }
    },

  },
  plugins: [],
}

