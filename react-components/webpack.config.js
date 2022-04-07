const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: './src/react-components.js',
  output: {
    path: path.join(__dirname, '..', 'inst', 'www'),
    filename: 'react-components.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  externals: {
    'react': 'jsmodule["react"]',
    'react-dom': 'jsmodule["react-dom"]',
    '@/shiny.react': 'jsmodule["@/shiny.react"]'
  }
};

module.exports = config;
