/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#4CAF4F",
          "primary-hover": "#388E3C",
          secondary: "#263238",
        },
        tint: {
          t5: "#E8F5E9",
        },
        neutral: {
          "d-grey": "#4D4D4D",
          grey: "#717171",
          "l-grey": "#89939E",
          silver: "#F5F7FA",
          white: "#FFFFFF",
          black: "#263238",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        navbar: "0px 4px 8px 0px rgba(171, 190, 209, 0.4)",
        card: "0px 2px 4px 0px rgba(171, 190, 209, 0.2)",
        "card-hover": "0px 10px 20px 0px rgba(171, 190, 209, 0.35)",
        "floating-card": "0px 8px 16px 0px rgba(171, 190, 209, 0.4)",
      },
    },
  },
  plugins: [],
};
