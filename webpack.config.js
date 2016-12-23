var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry:['./entry.js'],
	output:{
		path:'dist',
		filename:'bundle.js'
	},
	resolve:{
		extensions: ['','.js','.jsx','.sass']
	},
	module: {
		loaders: [{
      		test: /\.js|jsx$/,
      		loader:'babel',
      		exclude: /node_modules/,
      		query: {
        		presets: ['react', 'es2015']
      		}
    	},{
        	test: /\.scss$/,
        	loaders: ["style-loader", "css-loader", "sass-loader"]
      	}] 
	},
	plugins: [
		new CommonsChunkPlugin('init.js'),
		new OpenBrowserPlugin({ url: 'http://localhost:8080'})
	]
}

// var webpack = require('webpack');
// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// module.exports = {
//   entry: './index.jsx',
//   output: {
//     filename: 'bundle.js'
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx'],
//   },
//   module: {
//     loaders:[
//       { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader' },
//       { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
//     ]
//   },
//   plugins: [
//     new CommonsChunkPlugin('init.js'),
//     new OpenBrowserPlugin({ url: 'http://localhost:8080' })
//   ]
// };