const path = require('path');

module.exports = {
  mode: 'development',
  entry: './Java-JsRoadToIntership/javascript/tabs/js/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'Java-JsRoadToIntership/javascript/tabs/js')
  },
  watch: true,
  devtool: "source-map",
  module: {}
};
