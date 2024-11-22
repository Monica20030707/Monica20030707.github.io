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

      // Will soon get rid of this when each part have a color
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #F5F5DC, #E3B6B1, #845162, #522C5D, #29104A, #150016)',
      },
    },
  },
  plugins: [],
}

