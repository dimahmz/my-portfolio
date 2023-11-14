import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
export default {
  prefix: "tw-",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-app-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-app-secondary) / <alpha-value>)",
        // fonts
        parag: "hsl(var(--color-app-paragraph) / <alpha-value>)",
        link: "hsl(var(--color-app-link) / <alpha-value>)",
        text: "hsl(var(--color-app-text) / <alpha-value>)",
        title: "hsl(var(--color-app-title) / <alpha-value>)",
      },
    },
  },
  plugins: [
    plugin(function (obj: any) {
      obj.addUtilities({
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-column": {
          display: "flex",
          flexDirection: "column",
        },
      });
    }),
  ],
} satisfies Config;
