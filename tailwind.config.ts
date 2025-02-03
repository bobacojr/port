import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '9rem',
        '11xl': '10rem',
        '12xl': '11rem',
        '13xl': '12rem',
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
