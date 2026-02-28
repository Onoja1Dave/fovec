/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004080", // Deep Royal Blue from Logo
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#4b5563", // Charcoal Grey from Text
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#84bd00", // Vibrant Green from Logo Bar
          foreground: "#ffffff",
        },
        background: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Outfit", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
