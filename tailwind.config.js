/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "text-primary-dark-100": "#D3E3F8",
        "text-primary-dark-200": "#A7C7F0",
        "text-primary-dark-300": "#7BABE9",
        "text-primary-dark-400": "#4F8FE1",
        "text-primary-dark-500": "#2373DA",
        "text-primary-dark-600": "#1C5CAE",
        "text-primary-dark-700": "#154583",
        "text-primary-dark-800": "#0E2E57",
        "text-primary-dark-900": "#07172C",

        "accent-500": "#0EA5E9",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(250px, 1fr))",
        fluid2: "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
