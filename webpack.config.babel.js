import webpack from 'webpack';
import path from 'path';

export default (env, args) => {
	const isProduction = args.mode === 'production';
	const devtool = !isProduction && 'inline-source-map';
	const rules = [
		{
			test: /\.jsx?$/,
			use: ['babel-loader'],
		},
	];

	return {
		devtool,
		entry: './src/entries/react-router-sample.jsx',
		output: {
			path: path.join(__dirname, './public/js/'),
			filename: 'sample.js',
		},
		module: { rules },
		resolve: {
			modules: ['node_modules'],
			alias: {
				'~': path.join(__dirname, './src/'),
			},
			extensions: ['.js', '.jsx'],
		},
	};
};