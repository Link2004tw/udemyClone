/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', "Roboto", "Arial", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        udemy: {
          primary: "#a435f0", // Udemy purple (main brand color)
          "primary-focus": "#7e1bc7",
          "primary-content": "#ffffff",

          secondary: "#ec5252", // Red for "Bestseller" badges
          "secondary-focus": "#d61e1e",
          "secondary-content": "#ffffff",

          accent: "#f57c00", // Orange for prices / buttons
          "accent-focus": "#e05a00",
          "accent-content": "#ffffff",

          neutral: "#1f2937", // Dark gray (headers, text)
          "neutral-focus": "#111827",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff", // Page background
          "base-200": "#f9fafb",
          "base-300": "#f3f4f6",
          "base-content": "#1f2937",

          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",

          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
        },
      },
    ],
    darkTheme: "dark", // optional: auto dark mode
    base: true,
    utils: true,
    logs: false,
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
