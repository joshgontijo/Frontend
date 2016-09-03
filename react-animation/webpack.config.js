var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './components/main.jsx',
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
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
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