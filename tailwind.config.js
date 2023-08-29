/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace']
      },
      colors: {
        'cf-black': '#010101',
        'cf-milk': '#fef1e5'
      },
      gridTemplateColumns: {
        'navigation': '1fr .25fr 1fr',
        'hero': '1.25fr 1fr',
        'menu': '1.5fr 1fr'
      },
      gridTemplateRows: {
        'auto': 'auto'
      }
    }
  },
  plugins: []
}
