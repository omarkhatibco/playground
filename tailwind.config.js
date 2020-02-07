
module.exports = {
   corePlugins: {
    padding: false,
    margin: false,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwind-css-variables')({}, { postcssEachVariables: true }),
    require('tailwind-css-logical-properties')({
      logicalBorderRaduis:true
    }),
  ],
}
