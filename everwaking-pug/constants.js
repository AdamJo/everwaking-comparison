"use strict";
const root = require('./helpers.js').root

exports.HOST = 'localhost';
exports.DEV_PORT = 3000;
exports.PROD_PORT = 8088;

// https://webpack.github.io/docs/configuration.html#devtool
exports.DEV_SOURCE_MAPS = 'eval';
exports.PROD_SOURCE_MAPS = 'source-map';

/**
 * Set watch options for Dev Server. For better HMR performance, you can 
 * try setting poll to 1000 or as low as 300 and set aggregateTimeout to as low as 0. 
 * These settings will effect CPU usage, so optimal setting will depend on your dev environment.
 * https://github.com/webpack/docs/wiki/webpack-dev-middleware#watchoptionsaggregatetimeout
 */
exports.DEV_SERVER_WATCH_OPTIONS = {
  poll: undefined,
  aggregateTimeout: 300,
  ignored: /node_modules/
}

exports.MY_COPY_FOLDERS = [
  // use this for folders you want to be copied in to Client dist
  // src/assets and index.html are already copied by default.
  // format is { from: 'folder_name', to: 'folder_name' }
  { from: 'src/assets/icons', to: '.', flatten: true},
  { from: 'src/assets/dist_root', to: '.', flatten: true },
  { from: 'src/assets/img', to: 'assets/img' }
]

exports.MY_PUG_VARIABLES = {
  title:'Everwaking',
  link: [
    { rel: 'shortcut icon', href: "favicon.ico"},

    // <link> tags for 'apple-touch-icon' (AKA Web Clips).
    { rel: 'apple-touch-icon', sizes: '60x60', href: 'apple-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: 'apple-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', href: 'apple-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: 'apple-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-icon-180x180.png' },

    // <link> tags for android web app icons
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: 'android-chrome-512x512.png' },

    // <link> tags for favicons
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },

    // <link> tags for a Web App Manifest
    { rel: 'manifest', href: 'manifest.json' },
    
    { rel: "mask-icon", href:"/safari-pinned-tab.svg", color:"#5bbad5" }
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'msapplication-TileImage', content: 'ms-icon-144x144.png', '=content': true },
    { name: 'theme-color', content: '#ffffff' },
    { name: "application-name", content: "everwaking" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    { name: "apple-mobile-web-app-title", content: "everwaking" }
  ]
}