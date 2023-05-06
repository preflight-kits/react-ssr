const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/client/index.tsx',
  output: {
    filename: 'js/client.min.js',
    path: path.resolve(__dirname, 'dist/public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[hash:base64:5]",
              },
            }
          }
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[hash:base64:5]",
              },
            }
          },
          'sass-loader'
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/client.min.css',
    }),
  ]
};

