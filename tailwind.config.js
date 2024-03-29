/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#23262F",
        Highlight: "#ABC241",
        primary: "#D0CED1",
      },
      boxShadow: {
        "outline-glow": "0 0 10px #ABC241",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
    },
  },
  plugins: [],
};
