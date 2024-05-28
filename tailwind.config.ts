import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        default: "#0A0B0A",
        "text-primary": "#EFE7D2",
        "text-primary-hover": "rgb(207, 190, 145)",
        "text-secondary": "#f5f2eab3",
        muted: "#111111",
        "muted-hover": "rgba(239, 231, 210, 0.10)",
        border: "rgba(51, 51, 48, 1)",
        "border-hover": "rgba(71, 71, 68, 1)",
        "icon-default": "#EFE7D2",
        "gradient-lighter": "rgba(0, 0, 0, 0)",
        "gradient-darken": "rgba(0, 0, 0, 0.8)",
        "input-bg": "rgba(24, 24, 24, 0.5)",
        shadow: "rgba(0, 0, 0, 0.5)",
      },
      width: {
        "sidebar-lg": "381px",
        "sidebar-xl": "336px",
        "header-icon": "41px",
        "logo-icon": "18px",
        "45-about": "44%",
        "55-about": "56%",
        "blog-card-lg": "260px",
        "blog-card": "180px",
        150: "150px",
      },
      height: {
        "header-icon": "41px",
        "one-px": "1px",
        "header-logo": "32px",
        "logo-icon": "18px",
        about: "118px",
        "blog-h": "190px",
        100: "100px",
      },
      gap: {
        burger: "11px",
      },
      fontSize: {
        "layout-page-large": "112px",
        "layout-page": "92px",
        "layout-page-small": "62px",
        "about-info-main": "32px",
      },
      letterSpacing: {
        mainPage: "2px",
      },
      lineHeight: {
        mainPage: ".86",
        about: "1.1",
      },
      backgroundSize: {
        "hover-card": "120%",
        "default-card": "110%",
      },
      padding: {
        "6px": "6px",
      },
      maxWidth: {
        half: "50%",
        "text-layout": "390px",
      },
    },
  },
  plugins: [],
};
export default config;
