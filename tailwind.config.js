/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        "on-primary": "#ffffff",
        ink: "#111111",
        "ink-deep": "#0a0a0a",
        charcoal: "#4a4a4a",
        body: "#6b6b6b",
        mute: "#9a9a9a",
        canvas: "#ffffff",
        "surface-soft": "#f5f5f5",
        "surface-card": "#ffffff",
        hairline: "#e8e8e8",
        "hairline-strong": "#d4d4d4",
        "on-dark": "#ffffff",
        "surface-dark": "#171717",
        "focus-ring": "rgba(59,130,246,0.5)",
        "accent-mail": "#ffe14a",
        border: "var(--border)",
      },
      fontFamily: {
        display: [
          "Instrument Serif",
          "Times New Roman",
          "Georgia",
          "serif",
        ],
        sans: [
          "DM Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "IBM Plex Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        "display-xl": ["36px", { lineHeight: "1.15", fontWeight: "400" }],
        "display-lg": ["30px", { lineHeight: "1.2", fontWeight: "400" }],
        "heading-lg": ["28px", { lineHeight: "1.25", fontWeight: "400" }],
        "heading-md": ["20px", { lineHeight: "1.4", fontWeight: "500" }],
        "heading-sm": ["18px", { lineHeight: "1.5", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.45", fontWeight: "400" }],
        "caption-sm": ["12px", { lineHeight: "1.33", fontWeight: "400" }],
        "code-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "code-sm": ["14px", { lineHeight: "1.43", fontWeight: "400" }],
        "button-md": ["14px", { lineHeight: "1", fontWeight: "500" }],
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "12px",
        full: "9999px",
      },
      spacing: {
        section: "88px",
        "section-md": "64px",
        "section-sm": "48px",
      },
      maxWidth: {
        content: "720px",
        wide: "960px",
        hero: "640px",
      },
      height: {
        nav: "72px",
        pill: "36px",
        snippet: "48px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
}
