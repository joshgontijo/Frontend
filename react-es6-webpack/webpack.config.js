var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',

        //to run with webpack-dev-server
        //output will be
        //http:\\localhost:PORT/build/bundle.js
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};