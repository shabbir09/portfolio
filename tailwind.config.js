/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#0f172a", accent: "#7c3aed" } },
      boxShadow: { soft: "0 8px 30px rgba(2,8,23,0.08)" }
    },
  },
  plugins: [],
}
