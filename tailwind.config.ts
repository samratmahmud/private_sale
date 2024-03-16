import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: {
               "600": "#5200FF",
            },
            gray: {
               "50": "#ffffff",
               "100": "#FCFFFF",
               "800": "#0B0C19",
               "950": "#020202",
            },
            neutral: {"200": "#E8E8E8"},
            red: {"600": "#FF0000"},
            amber: {"300": "#EEBE44", "600": "#D97D24"},
            emerald: {"600": "#00A478"},
            indigo: {"400": "#7C75FF"},
         },
         fontFamily: {
            inter: ["var(--font-inter)", ...fontFamily.sans],
            outfit: ["var(--font-outfit)", ...fontFamily.sans],
         },
      },
      fontSize: {
         xs: ["12px", {lineHeight: "1.25em"}],
         sm: ["13px", {}],
         md: ["14px", {}],
         base: ["15px", {lineHeight: "1.47em"}],
         lg: ["16px", {lineHeight: "1.38em"}],
         xl: ["18px", {lineHeight: "1.22em"}],
         "2xl": ["20px", {lineHeight: "1.1em"}],
         "3xl": ["21px", {lineHeight: "1.43em"}],
         "4xl": ["23px", {lineHeight: "1.3em"}],
         "5xl": ["26px", {lineHeight: "1.23em"}],
         "6xl": ["28px", {lineHeight: "1.07em"}],
         "7xl": ["48px", {lineHeight: "1.25em"}],
         "8xl": ["60px", {lineHeight: "1.2em"}],
         "9xl": ["64px", {lineHeight: "0.94em"}],
      },
      boxShadow: {
         sm: "300px 300px 300px",
         md: "0px 4px 50px #BD9EFF",
         lg: "0px 4px 4px rgba(0, 0, 0, 0.52)",
         xl: "200px 200px 200px",
      },
      backgroundImage: {
         "header-title": "linear-gradient(#fff 30%, #0B0C19 150%)",
         "gray-black":
            "linear-gradient(180deg, rgba(13, 13, 13, 0.20) 0%, rgba(13, 13, 13, 0.06) 100%)",
      },
      container: {
         center: true,
         padding: {
            DEFAULT: "1rem",
         },
      },
      screens: {
         sm: "600px",
         md: "768px",
         lg: "992px",
         xl: "1200px",
         "2xl": "1362px",
      },
   },
   plugins: [],
};
export default config;
