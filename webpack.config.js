const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        app: './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.[hash].js',
    },
    plugins: [
		new CleanWebpackPlugin("dist"),
		new HtmlWebpackPlugin()
    ]
};