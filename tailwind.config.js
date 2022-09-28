/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        "sm" : "380px"
      }
    },
      fontFamily:{
        mont:['Montserrat Alternates', 'sans-serif']
      }
  },
  plugins: [],
}
