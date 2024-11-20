/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F5F5DC",
        blush: "#E3B6B1",
        wine: "#845162",
        plum: "#522C5D",
        deepPurple: "#29104A",
        darkMaroon: "#150016",
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        tinos: ['Tinos', 'serif'],
      },
      
    },
  },
  plugins: [],
}

