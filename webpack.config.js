var webpack = require('webpack');

// taken from:
// https://github.com/esnunes/riotjs-loader
module.exports = {
  entry: [ './src/app' ],
  output: {
    path: __dirname + './dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings:     false,
        drop_console: true,
        unsafe:       true
      }
    })
  ],
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { template: 'jade' } }
    ],
    loaders: [
      {
        test: /\.js|\.tag$/, exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ],

  },
  
  devtool: 'source-map'
};
