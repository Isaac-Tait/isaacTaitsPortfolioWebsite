const colors = require('tailwindcss/colors')
const heropatterns = require('tailwindcss-hero-patterns/src/patterns')

module.exports = {
  mode: 'jit',
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      pink: colors.pink,
      white: colors.white,
      gray: colors.zinc,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      slate: colors.slate,
      violet: colors.violet,
    },
    linearGradientColors: (theme) => theme('colors'),
    heroPatterns: {
      topography: heropatterns.topography,
      kiwi: heropatterns.kiwi,
    },
    heroPatternsShades: ['100', '300', '500'],
    heroPatternsColors: ['blue', 'green'],
    extend: {
      animation: {
        fadeIn: 'fadeIn 3s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        blue: {
          500: '#4391cdff',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-hero-patterns'),
    require('tailwindcss-gradients'),
  ],
}
