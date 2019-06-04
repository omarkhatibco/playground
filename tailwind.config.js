module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    function({ addUtilities, addComponents, e, prefix, config }) {
    // This function is your plugin
    console.log(prefix)
    console.log(config('theme', []))
    },
  ],
}
