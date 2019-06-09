module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwind-css-variables')({},{postcssEachVariables:true})
  ],
}
