/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F1EFEC",
        taupe: "#D4C9BE",
        navy: "#123458",
        charcoal: "#030303",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      scrollMarginTop: {
        navbar: "104px",            // 🆕 Mobile navbar scroll margin
        "navbar-desktop": "96px",    // 🆕 Desktop navbar scroll margin
      },
    },
  },
  plugins: [],
};
