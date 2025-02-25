import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl.5': '90rem',
        '3xl': '110rem',
      },
      fontSize: {
        '4.5xl': '2.8rem',
        '6.2xl': '3.8rem',
        '6.5xl': '4rem',
        '7.5xl': '5rem',
        '7.8xl': '5.6em',
        '8.5xl': '6.5rem',
        '10xl': '9rem',
        '10.5xl': '9.5rem',
        '11xl': '10rem',
        '11.25xl': '10.25rem',
        '12xl': '11rem',
        '13xl': '12rem',
        '14xl': '13rem',
        '15xl': '14rem',
        '16xl': '15rem',
        '17xl': '16rem',
        '18xl': '17rem',
        '19xl': '18rem',
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'myteal': '#048A81',
        'mygray': '#5C5C5C',
        'gfsred': '#C80000',
        'chiblack': '#282828',
      },
    },
  },
  plugins: [],
  safelist: [
    // Safelist all custom classes, colors, font sizes, and screens
    { pattern: /bg-(myteal|mygray|gfsred|chiblack)/ }, // Safelist custom colors
    { pattern: /text-(4\.5xl|6\.2xl|6\.5xl|7\.5xl|7\.8xl|8\.5xl|10xl|10\.5xl|11xl|11\.25xl|12xl|13xl|14xl|15xl|16xl|17xl|18xl|19xl)/ }, // Safelist custom font sizes
    { pattern: /(xl\.5|3xl)/ }, // Safelist custom screens
  ],
} satisfies Config;
