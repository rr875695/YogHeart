/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        dark: "#0f172a"
      },
      boxShadow: {
        glow: "0 0 40px rgba(6,182,212,0.35)"
      }
    }
  },
  plugins: []
};
