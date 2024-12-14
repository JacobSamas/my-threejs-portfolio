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
        deepSeaBlue: "#011627",   // Main background
        oceanBlue: "#1e3a8a",     // Accent color
        waveGreen: "#00b894",     // Secondary highlight
        coralRed: "#ff4b5c",      // Attention grabber
        lightSeafoam: "#c8f7f1",  // Soft highlight
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"], // Modern, clean font
      },
      backgroundImage: {
        'deep-gradient': "linear-gradient(to bottom, #011627, #1e3a8a)",
      },
    },
  },
  plugins: [],
};

