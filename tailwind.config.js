import relumeTailwindPreset from '@relume_io/relume-tailwind';
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
                sans: ['var(--font-sans)'],
                mono: ['var(--font-mono)'],
                header: ['var(--font-header)'],
            },
            colors: {
                'color-1': 'hsl(var(--color-1))',
                'color-2': 'hsl(var(--color-2))',
                'color-3': 'hsl(var(--color-3))',
                'color-4': 'hsl(var(--color-4))',
                'color-5': 'hsl(var(--color-5))',
                'color-6': 'hsl(var(--color-6))',
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
                tertiary: {
                    DEFAULT: 'hsl(var(--tertiary))',
                    foreground: 'hsl(var(--tertiary-foreground))',
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
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))',
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    foreground: 'hsl(var(--warning-foreground))',
                },
                info: {
                    DEFAULT: 'hsl(var(--info))',
                    foreground: 'hsl(var(--info-foreground))',
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
                image: '40px',
                medium: 'var(--radius-medium)',
            },
            keyframes: {
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
                'aurora-border': {
                    '0%, 100%': {
                        borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%',
                    },
                    '25%': {
                        borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%',
                    },
                    '50%': {
                        borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%',
                    },
                    '75%': {
                        borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%',
                    },
                },
                'aurora-1': {
                    '0%, 100%': {
                        top: '0',
                        right: '-10%',
                    },
                    '50%': {
                        top: '50%',
                        right: '60%',
                    },
                    '75%': {
                        top: '25%',
                        right: '20%',
                    },
                },
                'aurora-2': {
                    '0%, 100%': {
                        top: '0',
                        left: '-10%',
                    },
                    '60%': {
                        top: '75%',
                        left: '35%',
                    },
                    '85%': {
                        top: '50%',
                        left: '80%',
                    },
                },
                'aurora-3': {
                    '0%, 100%': {
                        bottom: '0',
                        left: '-10%',
                    },
                    '40%': {
                        bottom: '50%',
                        left: '35%',
                    },
                    '65%': {
                        bottom: '25%',
                        left: '60%',
                    },
                },
                'aurora-4': {
                    '0%, 100%': {
                        bottom: '0',
                        right: '-10%',
                    },
                    '50%': {
                        bottom: '25%',
                        right: '60%',
                    },
                    '90%': {
                        bottom: '50%',
                        right: '20%',
                    },
                },
                'aurora-5': {
                    '0%, 100%': {
                        top: '25%',
                        left: '62%',
                    },
                    '45%': {
                        top: '40%',
                        left: '5%',
                    },
                    '70%': {
                        top: '35%',
                        left: '0%',
                    },
                },
                'aurora-6': {
                    '0%, 100%': {
                        bottom: '25%',
                        left: '62%',
                    },
                    '40%': {
                        bottom: '35%',
                        left: '5%',
                    },
                    '80%': {
                        bottom: '30%',
                        left: '0%',
                    },
                },
                'shiny-text': {
                    '0%, 90%, 100%': {
                        'background-position': 'calc(-100% - var(--shiny-width)) 0',
                    },
                    '30%, 60%': {
                        'background-position': 'calc(100% + var(--shiny-width)) 0',
                    },
                },
                shine: {
                    '0%': {
                        'background-position': '0% 0%',
                    },
                    '50%': {
                        'background-position': '100% 100%',
                    },
                    to: {
                        'background-position': '0% 0%',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'shiny-text': 'shiny-text 8s infinite',
                shine: 'shine var(--duration) infinite linear;',
            },
        },
    },
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('tailwindcss-animate'),
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('@tailwindcss/typography'),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function ({ addUtilities }) {
            addUtilities({
                '.scrollbar-hide': {
                    /* Firefox */
                    'scrollbar-width': 'none',
                    /* Safari and Chrome */
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
            });
        },
    ],
    presets: [relumeTailwindPreset],
};
