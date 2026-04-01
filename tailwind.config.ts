import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@stz-code/ui/dist/**/*.{js,mjs}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				'dashboard-header': '#1F1F1F',
				dashboard: '#161716',
			},
			fontFamily: {
				bebas: ['var(--font-bebas)'],
				geist: ['var(--font-geist)'],
				orbitron: ['var(--font-orbitron)'],
				inter: ['var(--font-inter)'],
				sans: ['var(--font-geist)', 'ui-sans-serif', 'system-ui'],
			},
		},
	},
	plugins: [],
} satisfies Config
