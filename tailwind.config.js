/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/js/**/*.js",
    "./src/css/**/*.css",
  ],
  theme: {
    extend: {
      borderWidth: {
        default: '1px',
        '0': '0px',
        '0.5': '0.5px',
        '1': '1px',
        '2': '2px',
      },
      animation: {
        'scroll-infinite': 'scroll-horizontal 30s linear infinite',
      },
      keyframes: {
        'scroll-horizontal': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-1700%)' },
        },
      },
    },
  },
  plugins: [],
};
