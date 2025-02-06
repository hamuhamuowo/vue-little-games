const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
	entry: {
		app: path.join(__dirname, "main.js"),
	},
	devtool: "eval",
	resolve: {
		extensions: [".js", ".vue"],
	},
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: "vue-loader",
			},
			{
				test: /\.css$/,
				use: ["vue-style-loader", "css-loader"],
			},
		],
	},
	plugins: [new VueLoaderPlugin()],
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "dist"),
	},
};
