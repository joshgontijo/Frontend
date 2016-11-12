var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './components/main.js',
    output: {
        filename: 'build/bundle.js', //build path

        //to run with webpack-dev-server
        //make sure port 8080 is used when launching webpack-dev-server
        //will be
        //http:\\localhost:8080/build/bundle.js
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new LiveReloadPlugin()
    ]
};