const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
