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
        deepSeaBlue: "#011627",
        oceanBlue: "#1e3a8a",
        waveGreen: "#00b894",
        coralRed: "#ff4b5c",
        lightSeafoam: "#c8f7f1",
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      backgroundImage: {
        "deep-gradient": "linear-gradient(to bottom, #011627, #1e3a8a)",
      },
    },
  },
  plugins: [],
};

