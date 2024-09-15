/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px"
	},
	screens:{
		sm:	'648px',
		md:	'768px',
		lg:	'960px',
		xl:	'1200px',
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
  		colors: {
  			primary: '#1c1c22',
			accent: {
				// DEFAULT: '#00ff99',
				// DEFAULT: '#C147E9',
				DEFAULT: '#8758FF',
				hover:'#08e187',
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
