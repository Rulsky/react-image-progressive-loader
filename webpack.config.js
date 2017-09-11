const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        loader: "babel-loader", 
        enforce: "pre",
        options: {
          presets: ["es2015", "react", "stage-0"] 
        } 
      }
    ]
  }
};