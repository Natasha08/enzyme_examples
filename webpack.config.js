'use strict';

const path = require('path');
const webpack = require('webpack');
const lodash = require('lodash');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [path.join(__dirname, 'src', 'app.js')],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '',
    filename: 'app.js'
  },
  devtool: "inline-sourcemap",
  devServer: {
    contentBase: __dirname + 'public',
    historyApiFallback: true,
    port: '3001'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    alias: {
      'spec': path.resolve(__dirname, 'spec')
    }
  },
  devtool: "inline-sourcemap",
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDom': 'react-dom',
      'Redux': 'redux',
      '_': 'lodash'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app',
      title: 'Decanter',
      baseHref: './',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover' }
      ]
      // favicon: 'src/favicon.ico'
    })
  ],
  module: {
    rules: [
      {
        test: /(\.scss|\.sass|\.css)$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?limit=50240&absolute&name=images/[path][name]-[hash:7].[ext]'
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)$/,
        loader: 'url-loader?limit=10240&name=fonts/[name]-[hash:7].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
          plugins: ['transform-react-jsx', 'transform-object-rest-spread',  'transform-decorators-legacy', 'transform-class-properties']
        }
      }
    ]
  }
}
