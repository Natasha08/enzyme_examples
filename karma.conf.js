'use strict';
/* eslint-disable */

var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var Adapter = require('enzyme-adapter-react-16');
var Enzyme = require('enzyme');

Enzyme.configure({ adapter: new Adapter() });
webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({
    browserNoActivityTimeout: 1000000,

    browsers: [ 'PhantomJS' ],
    singleRun: process.env.WATCH !== 'true',
    frameworks: [ 'mocha', 'chai-things', 'sinon-chai', 'chai', 'sinon' ],

    files: [
      'node_modules/es6-shim/es6-shim.js',
      { pattern: 'node_modules/babel-polyfill/browser.js', instrument: false},
      'tests.webpack.js',
    ],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-sinon',
      'karma-sinon-chai',
      'karma-chai-things'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'mocha' ],
    mochaReporter: {
      showDiff: true
    },
    webpack: Object.assign({}, webpackConfig, {
      externals: Object.assign({}, webpackConfig.externals, {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }),

      plugins: webpackConfig.plugins.concat([
        new webpack.ProvidePlugin({
          deepFreeze: 'deep-freeze'
        })
      ])
    }),

    webpackServer: {
      noInfo: true
    },

    autoWatch: process.env.WATCH === 'true'
  });
};
