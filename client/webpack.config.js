module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		leaders: [{
			exclude: /node_modules/,
			leader: 'babel',
			query: {
				presets: [ 'react', 'es2015', 'stage-1' ]
			}
		}]
	},
	resolve: {
		extensions: [ '', '.js', '.jsx' ]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
};