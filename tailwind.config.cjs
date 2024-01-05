/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	future: {
		hoverOnlyWhenSupported: true
	},

	theme: {
		container: { center: true },
		extend: {
			colors: {
				neutral: {
					100: '#ffffff',
					200: '#dfe1df',
					300: '#cbd0cc',
					400: '#d4d8d6',
					500: '#303030',
					600: '#262626',
					700: '#242423',
					800: '#1c1c1a'
				},
				main: {
					100: '#bfc0bf',
					200: '#98aaa2',
					300: '#82a094',
					400: '#6c9987',
					500: '#598c78',
					600: '#497e69',
					700: '#3a6e59',
					800: '#204b3a',
					900: '#0c2219'
				},
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Concourse_4', 'Concourse_3', 'ui-sans-serif', 'system-ui'],
				serif: ['Equity', 'ui-serif']
			}
		}
	},

	plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')]
};

module.exports = config;
