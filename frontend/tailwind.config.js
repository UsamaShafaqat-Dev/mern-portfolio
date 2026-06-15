/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#030014", // Deep dark background from UI
        primary: "#7C3AED", // Glowing purple accent
        cardBg: "#111115", // Dark cards background
      },
    },
  },
  plugins: [],
};
