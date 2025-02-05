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
        '3xl': '100rem',
      },
      fontSize: {
        '8.5xl': '6.5rem',
        '10xl': '9rem',
        '11xl': '10rem',
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
      },
    },
  },
  plugins: [],
} satisfies Config;
