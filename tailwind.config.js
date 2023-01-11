/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heading': '#442e4c',
        'text': '#7b707f',
        'purple': '#7f3d98',
        'yellow': '#eeb100',
        'green': '#1db78e',
        'secondary': '#645b67',
        'background': '#f2f0ec',
      },
      fontFamily: {
        heading: ["museo-sans-rounded-900"],
        text: ["museo-sans-rounded-500"]
      },
    },
  },
  plugins: [],
}
