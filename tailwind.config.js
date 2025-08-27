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
        primary: "#5B92E5", // skyBlue
        secondary: "#E63946", // fineRed
        accent: "#FFD60A", // bananaYellow
        tertiary: "#00CFC1", // oceanGreen
      },
    },
  },
  plugins: [],
};
