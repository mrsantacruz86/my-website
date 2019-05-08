const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
	filename: "main.css"
})

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
				test:/\.scss$/,
				//Webpack will execute these loaders in reverse order. So the order matters.
				use:[
					extractPlugin.extract({
						use:[
							"css-loader",
							"scss-loader"
						]
					}),
					"css-loader"
				] 
			},
			{
				test: /\.js$/,
				use:[
					{
						loader: "babel-loader",
						options: {
							presets: ["es2015"]
						}
					}
				]
			}
		]
	},
	plugins:[
		extractPlugin
		// new webpack.optimize.UglifyJsPlugin({
		// 	//...
		// })
	]
}