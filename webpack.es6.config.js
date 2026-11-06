const path = require('path');

module.exports = {
  mode: 'development',
  entry: './es6_modules/src/js/script.js', // Если главный файл main.js, поменяй script.js на main.js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'es6_modules/dist/js')
  },
  watch: true,
  devtool: "source-map",
  module: {}
};
