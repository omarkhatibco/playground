module.exports = {
	plugins: [
		require('tailwind-css-variables')({}, { postcssEachVariables: true }),
		require('tailwind-css-logical-properties')({
			logicalBorderRaduis: true,
		}),
	],
};
