const path = require('path');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, './src/index.ts'),
	module: {
		rules: [
			{
				test: /.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 3000,
		open: true,
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'public', 'static', 'bundle'),
	},
};
