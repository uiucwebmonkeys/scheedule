var path = require('path');
var webpack = require('webpack');

//tell webpack where to find the application files and where to put the output
var BUILD_DIR = path.resolve(__dirname, 'output');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'index.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  },
  devServer: {
    contentBase: BUILD_DIR
  }
};

module.exports = config;
