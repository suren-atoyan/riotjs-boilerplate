var webpack = require('webpack');

module.exports = {
  entry: './public/app/app',
  output: {
    filename: './public/app/bundle.js'
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings:     false,
    //     drop_console: true,
    //     unsafe:       true
    //   }
    // })
  ],

  watch: true,

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
