const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: "development",
  entry: './src/main.ts',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, './src'),
    }
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/i, use: ['style-loader', 'css-loader', 'less-loader'] },
      {
        test: /\.ts$/i,
        exclude: /node_modiles/,
        use: {
          loader: 'ts-loader',
          options: { appendTsxSuffixTo: [/\.vue$/] }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        exclude: /node_modiles/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.vue$/i,
        exclude: /node_modiles/,
        use: {
          loader: 'vue-loader'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html')
    }),
    new VueLoaderPlugin(),
    //热更新插件
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: [
      path.join(__dirname, './dist')
    ],
    host: "127.0.0.1",
    port: 8090,
    hot: true,
    overlay: true,
  }
}