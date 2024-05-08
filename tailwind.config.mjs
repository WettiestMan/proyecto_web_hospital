/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend:{
			colors:{
				'saffron-mango': {
					'50': '#fdf8ed',
					'100': '#f9ebcc',
					'200': '#f3d694',
					'300': '#edbd5e',
					'400': '#e8a537',
					'500': '#e1851f',
					'600': '#c76418',
					'700': '#a54718',
					'800': '#873819',
					'900': '#6f2f18',
					'950': '#3f1709',
				},
				'blue-marguerite': {
					'50': '#f4f4fe',
					'100': '#edeafd',
					'200': '#dcd8fc',
					'300': '#c2b9f9',
					'400': '#a391f4',
					'500': '#805eed',
					'600': '#7444e3',
					'700': '#6432cf',
					'800': '#5429ae',
					'900': '#46238f',
					'950': '#2a1560',
				},
				'neon-carrot': {
					'50': '#fff5ed',
					'100': '#ffe8d5',
					'200': '#fed0aa',
					'300': '#fdb274',
					'400': '#fb923c',
					'500': '#f97c16',
					'600': '#ea700c',
					'700': '#c25e0c',
					'800': '#9a4f12',
					'900': '#7c4212',
					'950': '#432207',
				}
			}
		}
	},
	plugins: [animations],
}