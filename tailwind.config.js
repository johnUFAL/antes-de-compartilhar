/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zap: {
          header: "#075e54",
          verde: "#128c7e",
          claro: "#dcf8c6",
          fundo: "#ece5dd",
        },
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "dot-bounce": {
          "0%, 80%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "40%": { transform: "translateY(-4px)", opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.35s ease-out both",
        "slide-up": "slide-up 0.3s ease-out both",
        "fade-in": "fade-in 0.2s ease-out both",
        "dot-bounce": "dot-bounce 1.2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
}
