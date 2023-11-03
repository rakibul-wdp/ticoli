/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./universal/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#F5F5F5",
        "surface-sunken": "#EDEDE6",
        "surface-accent": "#F56344",
        "surface-accent-sunken": "#B23D24",
        "high-contrast": "#1C1917",
        "low-contrast": "#44403C",
        "subtle-contrast": "#78716C",
        "default-borders": "#D6D3D1",
      },
      fontFamily: {
        sora: "Sora",
        "source-sans": "Source Sans 3",
        lato: "Lato",
        "luckiest-guy": "Luckiest Guy",
        Handlee: "Handlee",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
