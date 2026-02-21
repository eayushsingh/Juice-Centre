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
                primary: '#D4AF37',
                'primary-dark': '#B8960C',
                'primary-light': '#F5E6A3',
                black: '#0A0A0A',
                'card-black': '#111111',
                gold: '#D4AF37',
                secondary: '#111111',
                accent: '#D4AF37',
                highlight: '#D4AF37',
                cream: "#0A0A0A",
                dark: "#0A0A0A",
            },
        },
    },
    plugins: [],
}

export default config
