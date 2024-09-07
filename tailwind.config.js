/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        'primary-hover': '#1e40af',
        background: '#d6d3d1',
        'secondary-text': '#18181b',
      },
    },
  },
  plugins: [],
}
