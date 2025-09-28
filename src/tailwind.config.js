/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          start: "#6aa2ff",
          mid:   "#b57bff",
          end:   "#ff7ad6",
        }
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,0.06)",
        soft: "0 12px 40px rgba(0,0,0,0.10)"
      },
      borderColor: {
        subtle: "rgb(226 232 240 / 0.60)" // slate-200/60
      }
    }
  },
  plugins: [],
}
