/**
 * Created by ou on 2018/8/14.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	// mode: 'development',
	entry: {
		index: './src/js/index.js',
		start: './src/js/start.js'
	},
	output: {
		filename: 'js/[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		// noParse: /event_bind/,
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(jpg|png|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: './images',
							publicPath: '../images/'
						}
					}
				]
			}
		]
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		// new webpack.HashedModuleIdsPlugin(),
		// new webpack.ProvidePlugin({
		// 	_: 'lodash'
		// }),
		new HtmlWebpackPlugin({
			title: 'test',
			filename: 'index.html'
		}),
		// new webpack.HotModuleReplacementPlugin()
	],
	// devServer: {
	// 	hot: true
	// }
}