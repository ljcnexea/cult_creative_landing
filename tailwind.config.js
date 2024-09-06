/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      5: "-.6rem",
    },
    fontFamily: {
      aileron: ["aileron", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      times: ["Times New Roman Condensed"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "loop-scroll-optics": {
          to: { transform: "translateX(calc(-100% - 8.5rem))" },
        },
        "loop-scroll-companies": {
          to: { transform: "translateX(calc(-100% - 8rem))" },
        },
        "loop-scroll-companies-reverse": {
          from: { transform: "translateX(calc(-100% - 8rem))" },
          to: { transform: "translateX(0)" },
        },
        "form-to-down": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "loop-scroll-optics": "loop-scroll-optics 15s linear infinite",
        "loop-scroll-companies": "loop-scroll-companies 20s linear infinite",
        "loop-scroll-companies-reverse":
          "loop-scroll-companies-reverse 20s linear infinite",
        "form-animation": "form-to-down .3s linear",
        "loop-paused": "animation-play-state: paused",
        marquee: "marquee 15s linear infinite",
        "marquee-reverse": "marquee-reverse 15s linear infinite",
      },
    },
  },
  plugins: [],
};
