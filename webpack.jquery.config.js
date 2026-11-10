const path = require('path');

module.exports = {
  mode: 'development',
  entry: './jquery/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'jquery/dist')
  },
  watch: true,
  devtool: "source-map",
  module: {}
};
