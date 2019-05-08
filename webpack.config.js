const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/js/app.js",
	output:{
		path:path.resolve(__dirname,"dist"),
		filename: "bundle.js",
		publicPath: "/dist"
	},
	module:{
		rules: [
			{
				test:/\.css$/,
				//Webpack will execute these loaders in reverse order. So the order matters.
				use:[
					"style-loader",
					"css-loader"
				] 
			}
		]
	},
	plugins:[
		// new webpack.optimize.UglifyJsPlugin({
		// 	//...
		// })
	]
}