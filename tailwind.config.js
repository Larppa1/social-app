/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#fcd5ce",
        "secondary": "#ffb5a7",
        "accent": "#fec89a",
        "neutral": "#f9dcc4",
        "base-100": "#f8edeb",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
        },
      },
    ],
  },
}
