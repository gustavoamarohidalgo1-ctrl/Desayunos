import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        "primary-hover": "#E6C200",
        secondary: "#4B2C20",
        background: "#FFFBF5",
        accent: "#D11141",
        text: "#1A1A1A",
        "text-light": "#666666",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))',
      }
    },
  },
  plugins: [],
};
export default config;
