/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'line' : "url('../public/images/line.svg')",
      },
      colors: {
        primary: {
          "main": "#D2DE32", //#4ca0ff
        },
      },
    },
    fontFamily: {
      'body': ['PPTelegraf'],
      'display': ['PPRightDidone'],
    },
  },
  plugins: [],
}