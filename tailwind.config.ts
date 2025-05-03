import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography'; // Ensure this import is correct

const config: Config = {
  darkMode: "class", // Enable dark mode using the 'class' strategy
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       container: { // Define container settings globally
        center: true,
        padding: {
          DEFAULT: '1rem', // Default padding
          sm: '2rem',      // Padding for small screens and up
          lg: '4rem',      // Padding for large screens and up
          xl: '5rem',      // Padding for extra large screens and up
        },
        screens: {         // Define max-widths for container
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
         '2xl': '1400px', // Added a larger breakpoint
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: { // For potential popover-like elements
          DEFAULT: "hsl(var(--background))", // Use background for popovers
          foreground: "hsl(var(--foreground))",
        },
        card: { // Basic card styles
          DEFAULT: "hsl(var(--background))", // Use background for cards
          foreground: "hsl(var(--foreground))",
        },
      },
      borderRadius: {
        lg: `calc(var(--radius) + 2px)`,
        md: `var(--radius)`,
        sm: "calc(var(--radius) - 2px)",
      },
       fontFamily: {
        sans: ["var(--font-geist-sans)"], // Use Geist Sans
      },
      // Add subtle animations/transitions if desired
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke, opacity',
      },
    },
  },
  plugins: [
    typography // Add the typography plugin
  ],
};
export default config;
