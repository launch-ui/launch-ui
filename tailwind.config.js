/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DK01", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["DK01 ExtraBold", "ui-sans-serif", "system-ui", "sans-serif"],
        h1: ["DK01 ExtraBold", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#ff4c2d",
        blue: {
          primary: "#1d62d4",
        },
      },
    },
  },
};
