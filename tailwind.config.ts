import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['var(--font-display)', 'serif'],
                body: ['var(--font-body)', 'sans-serif'],
                sans: ['var(--font-body)', 'sans-serif'],
            },
            colors: {
                primary: '#FF6B00',
                secondary: '#FFF3E8',
                accent: '#1A1A1A',
                highlight: '#22C55E',
                cream: "#FFF9F0",
                dark: "#111111",
            },
        },
    },
    plugins: [],
}

export default config
