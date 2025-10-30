/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D8F6F',
        accent: '#0B6FA4',
        neutral: '#F7F7F6',
        warning: '#E67A3D'
      }
    }
  },
  plugins: [],
}