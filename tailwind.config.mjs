/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      // Include essential default colors
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      // === RENOVATED COLOR PALETTE ===
      primary: {
        DEFAULT: '#004D40', // Deep Teal
        light: '#00796B', // Lighter Teal
      },
      accent: {
        DEFAULT: '#FFC107', // Sunny Yellow
        light: '#FFD54F', // Lighter Yellow
      },
      neutral: {
        DEFAULT: '#F8F7F6', // Light Stone / Off-white
        100: '#FFFFFF',
        200: '#EAE9E8', // Light Gray Stone
      },
      text: {
        dark: '#334155', // Slate 700
        light: '#64748B', // Slate 500
      },
      warning: '#E57373', // Soft Terracotta Red
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};