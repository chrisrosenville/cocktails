import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        DancingScript: ["Dancing_Script", "cursive"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
