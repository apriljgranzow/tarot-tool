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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
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
