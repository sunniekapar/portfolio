/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        "ten-seven": "1fr 0.65fr",
        "seven-ten": "0.7fr 1fr",
        "four-ten": "0.4fr 1fr",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.65, 0, 0.35, 1)",
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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        background: {
          from: { opacity: "0" },
          to: { opacity: "0.15" },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
            opacity: "100%",
          },
          "25%": {
            transform: "rotate(1deg)",
            opacity: "50%",
          },
          "75%": {
            transform: "rotate(-1deg)",
            opacity: "100%",
          },
        },
        breathe: {
          "0%, 25%, 75%, 100%": {
            opacity: "100%",
          },
          "50%": {
            opacity: "25%",
          },
        },
        appear: {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "25%": { opacity: "0" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 15s linear infinite",
        background: "background 3.6s cubic-bezier(0.17, 0.55, 0.55, 1)",
        tilt: "tilt 10s infinite linear",
        breathe: "breathe 10s infinite ease-in-out",
        appear: "appear 0.75s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
