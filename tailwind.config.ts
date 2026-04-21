import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        panel: "var(--panel)",
        panelStrong: "var(--panel-strong)",
        line: "var(--line)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        soft: "var(--soft)",
        sand: "var(--sand)"
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "ui-sans-serif", "system-ui"],
        serif: ["Baskerville", "Times New Roman", "ui-serif", "serif"]
      },
      boxShadow: {
        ambient: "0 32px 80px rgba(120, 109, 90, 0.14)",
        "panel-soft": "0 16px 36px rgba(110, 102, 88, 0.10)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(255,255,255,0.96), transparent 35%), radial-gradient(circle at 20% 0%, rgba(216,184,146,0.22), transparent 32%), linear-gradient(135deg, rgba(255,255,255,0.55), rgba(244,238,229,0.65))",
        "panel-sheen":
          "linear-gradient(180deg, rgba(255,255,255,0.88), rgba(245,239,230,0.65))"
      }
    }
  },
  plugins: []
};

export default config;
