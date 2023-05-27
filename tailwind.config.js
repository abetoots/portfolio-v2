import tailwindColors from "tailwindcss/colors";

//Silences warnings
// @ts-ignore
delete tailwindColors["lightBlue"];
// @ts-ignore
delete tailwindColors["warmGray"];
// @ts-ignore
delete tailwindColors["trueGray"];
// @ts-ignore
delete tailwindColors["coolGray"];
// @ts-ignore
delete tailwindColors["blueGray"];

const colors = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  "secondary-foreground": "var(--secondary-foreground)",
  background: "var(--background)",
  foreground: "var(--foreground)",
  "accent-1": "var(--accent-1)",
  ...tailwindColors,
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors,
  },
  plugins: [],
};
