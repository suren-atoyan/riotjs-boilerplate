const webpack 			= require('webpack');
const WebpackDevServer 	= require('webpack-dev-server');
const webpackConfig 	= require('./webpack.config.js');
const config 			= require('./config');

// Set up inline reloading. This will automatically reload the browser when there's a change to the source.
webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:3000");

// Set up webpack-dev-server.
var compiler = webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {
  contentBase: __dirname + '/dist'
});

// Start the server on port 3000.
server.listen(config.get('port'));
