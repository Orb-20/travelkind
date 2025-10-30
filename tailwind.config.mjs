/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A535C', // Dark Pine Green
        accent: '#FCA311', // Rich Gold
        neutral: '#F4F4F4', // Light Stone Gray
        warning: '#D95F02', // Burnt Orange
      },
    },
  },
  plugins: [],
};