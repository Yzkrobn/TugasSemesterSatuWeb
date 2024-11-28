/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./public/**/*.html",
    "./public/js/**/*.js",
    "./src/css/**/*.css",],
  theme: {
    extend: {
      borderWidth:{
        default:'1px',
        '0': '0px',
        '0.5':'0.5px',
        '1':'1px',
        '2': '2px',
      }
    },
  },
  plugins: [],
}