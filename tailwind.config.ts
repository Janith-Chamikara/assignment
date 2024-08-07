import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sign-in-main": "#3C1AB9",
        "sign-in-border": "#9888D3",
        "sign-up-main": "#165A0F",
        "sign-up-border": "#608B5B",
      },
    },
  },
  plugins: [],
};
export default config;
