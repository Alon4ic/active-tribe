import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                gilroy: ['Gilroy', 'sans-serif'],
                satoshi: ['Satoshi', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif'],
            },
            boxShadow: {
                custom: '0 0 0 2px rgba(69, 57, 44, 0.25)',
                btnLight: '0 0 0 2px rgba(142, 131, 110, 0.3)',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            backgroundImage: {
                'provid-block': "url('/images/provid.jpg')",
                'users-block': "url('/images/users.jpg')",
            },
            screens: {
                phone: '393px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
                desktop: '1137px',
            },
            keyframes: {
                fadeInRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate3d(100%, 0, 0)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'none',
                    },
                },
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
            },
            animation: {
                fadeInRight: 'fadeInRight 1s ease-out',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    variants: {
        extend: {
            borderWidth: ['not-placeholder-shown', 'valid'],
            backgroundColor: ['not-placeholder-shown', 'valid'],
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
