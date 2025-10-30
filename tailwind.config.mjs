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
      // Your custom colors
      primary: {
        DEFAULT: '#2B3A67',
        light: '#4A557A',
      },
      accent: {
        DEFAULT: '#E09F3E',
        light: '#EAAA6A',
      },
      neutral: {
        DEFAULT: '#F9F7F3',
        100: '#FFFFFF',
        200: '#EAE6E1',
      },
      text: {
        dark: '#1E293B',
        light: '#64748B',
      },
      warning: '#D95F02',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};