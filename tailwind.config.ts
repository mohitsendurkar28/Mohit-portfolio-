import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                charcoal: "#111111",
                offwhite: "#F7F7F5",
                primary: "#6C63FF",
                secondary: "#8B5CF6",
                softPurple: "#A78BFA",
                darkPurple: "#4C1D95",
                accentGold: "#d8b277",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;