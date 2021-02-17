const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: resolve('./dist/app'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/env',
              {
                targets: {
                  browsers: ['last 2 Chrome versions'],
                  node: 'current',
                },
              },
            ],
            '@babel/react',
            '@babel/preset-typescript',
          ],
          plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '#components': resolve(__dirname, `./src/components`),
      '#interfaces': resolve(__dirname, `./src/interfaces`),
      '#events': resolve(__dirname, `./src/events`),
      '#entities': resolve(__dirname, `./src/entities`),
      '#utils': resolve(__dirname, `./src/utils`),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}
