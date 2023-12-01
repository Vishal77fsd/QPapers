/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        gabarito: ["Gabarito", "sans-serif"],
        phuda: ["Phudu", "sans-serif"],
        foldit: ["Foldit", "sans-serif"],
        tourney: ["Tourney", "sans-serif"],
      },

      backgroundColor: {
        grad: "linear-gradient(0deg, #030033 2%, #6746b4 73%)",
      },
    },
  },
  plugins: [],
};
