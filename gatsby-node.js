// Add TypeScript support
require("ts-node").register({ files: true });

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreateWebpackConfig = ({ actions, plugins, rules }) => {
	// SASS --> CSS and Types
	const useCss = rules.css().use;
	const useCssModules = rules.cssModules().use;
	const sassLoader = {
		loader: "sass-loader",
		options: {
			sourceMap: true
		},
	};
	const typeLoader = {
		loader: "dts-css-modules-loader",
		options: {
			namedExport: true
		}
	};
	const sassLoaders = [ ...useCss, sassLoader ];
	const typeLoaders = [ typeLoader, ...useCssModules, sassLoader ];

	actions.setWebpackConfig({
		module: {
			rules: [
				{
					oneOf: [
						{
							test: /\.module\.s(a|c)ss$/,
							use: typeLoaders,
						},
						{
							test: /\.s(a|c)ss$/,
							use: sassLoaders,
						},
					],
				},
			],
		},
		optimization: {
			minimizer: [plugins.minifyCss()],
		},
		// Add webpack polyfills
		resolve: {
			alias: {
				// Use the front-end path library
				path: require.resolve("path-browserify"),
				// Resolve assert library
				assert: require.resolve("assert"),
				// Resolve util library
				util: require.resolve("util")
			},
			fallback: {
				// Remove FS from Node libraries.
				fs: false
			}
		}
	});
};
