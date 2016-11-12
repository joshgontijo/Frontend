var LiveReloadPlugin = require('webpack-livereload-plugin');

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
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new LiveReloadPlugin()
    ]
};