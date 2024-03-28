/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "retro",
      "cyberpunk",
      "valentine",
      "aqua",
    ],
  },
  plugins: [require("daisyui")],
};
