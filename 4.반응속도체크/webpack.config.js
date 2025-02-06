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
	mode: "development",
	ignoreWarnings: [
		(warning) => warning.message.includes("asset size limit"), // 자산 크기 경고 무시
	],
	plugins: [new VueLoaderPlugin()],
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "dist"),
		publicPath: "/dist",
	},
	devServer: {
		devMiddleware: { publicPath: "/dist" },
		static: { directory: path.resolve(__dirname) },
		hot: true,
	},
};
