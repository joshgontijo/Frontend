var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',

        //to run with webpack-dev-server
        //output will be http:\\localhost:PORT/build/bundle.js (which is the same as the file disk: /build/bundle.js)
        //ref: https://github.com/webpack/webpack-dev-server/issues/24
        publicPath: '/build'
    },
    module: {
        loaders: [
            {
                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['react-html-attrs']
                }
            }
        ]
    }
};