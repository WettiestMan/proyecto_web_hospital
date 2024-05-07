/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'atomic_tangerine': '#fe914c',
			'sandy_brown': '#f0974e',
			'butterscotch': '#e19d4f',
			'earth_yellow': '#e7ad57',
			'xanthous': '#edbd5e',
			'naples_yellow': {
				'mixed': '#f3cd66',
				'light': '#f8dc6d',
				DEFAULT: '#f4d765',
				'dark': '#efd15d',
			},
			'coffee': '#675439',
		},
	},
	plugins: [animations],
}