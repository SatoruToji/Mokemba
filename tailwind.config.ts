import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                white: 'var(--white)',
                grey: 'var(--grey)',
                foreground: 'var(--foreground)',
            },
        },
    },
    plugins: [],
} satisfies Config
