/* tslint:disable: variable-name max-line-length */
/**
 * Try to not make your own edits to this file, use the constants folder instead. 
 * If more constants should be added file an issue or create PR.
 */

import 'ts-helpers';

import {
  DEV_PORT, PROD_PORT, HOST, DEV_SERVER_WATCH_OPTIONS,
  DEV_SOURCE_MAPS, PROD_SOURCE_MAPS, MY_COPY_FOLDERS,
  MY_CLIENT_PLUGINS, MY_CLIENT_RULES, MY_PUG_VARIABLES
} from './constants';

const {
  ContextReplacementPlugin,
  DefinePlugin,
  ProgressPlugin,
  NoErrorsPlugin
} = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ForkCheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { root } = require('./helpers.js');

const EVENT = process.env.npm_lifecycle_event;
const DEV_SERVER = EVENT.includes('webdev');
const PROD = EVENT.includes('prod');

let port: number;
if (PROD) {
  port = PROD_PORT;
} else {
  port = DEV_PORT;
}

const PORT = port;

const CONSTANTS = {
  ENV: PROD ? JSON.stringify('production') : JSON.stringify('development'),
  HOST: JSON.stringify(HOST),
  PORT: PORT
};

console.log(EVENT.toUpperCase(), `\nStarting on ${HOST}:${PORT}\n`);

const clientConfig = function webpackConfig() {
  let config: any = (<any>Object).assign({});
  config.cache = true;
  PROD ? config.devtool = '' : config.devtool = DEV_SOURCE_MAPS;

  config.module = {
    rules: [
      {
        test: /\.ts$/,
        exclude: ['/node_modules/'],
        loaders: [
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: ['/node_modules/'],
        loader: ExtractTextPlugin.extract({loader: `css?minimize!sass`, fallbackLoader: 'style'})
      },
      { test: /\.jpg$/, loader: "url-loader" },
      {
        test:/\.pug$/,
        exclude: ['/node_modules/'],
        loader: 'pug-loader',
        query: {
          pretty: PROD ? false : true,
        }
      }
    ]
  };

  config.plugins = [
    new ExtractTextPlugin('stylesheets/[name].css'),
    new CopyWebpackPlugin(MY_COPY_FOLDERS),
    new HtmlWebpackPlugin({
      data: MY_PUG_VARIABLES,
      template: './src/index.pug',
      inject: true
    }),
    new ProgressPlugin(),
    new ForkCheckerPlugin(),
    new DefinePlugin(CONSTANTS),
    new NamedModulesPlugin(),
  ];

  if (PROD) {
    config.plugins.push(
      new NoErrorsPlugin(),
      new UglifyJsPlugin({
        beautify: false,
        comments: false,
        warnings: false,
        compressor: {
          screw_ie8: true,
          warnings: false,
        }
      }),
      new BundleAnalyzerPlugin()
    )
  } else {
    // dev only
  }

  config.entry = {
    main: './src/scripts/main'
  };

  config.output = {
    path: root('/dist'),
    filename: 'bundle.js'
  };

  config.devServer = {
    contentBase: './src',
    port: CONSTANTS.PORT,
    historyApiFallback: true,
    host: 'localhost',
    watchOptions: DEV_SERVER_WATCH_OPTIONS
  };

  config.node = {
    global: true,
    process: true,
    Buffer: false,
    crypto: true,
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  };

  config.resolve = {
    extensions: ['.ts', '.js', '.json']
  };
  return config;

} ();

module.exports = clientConfig;