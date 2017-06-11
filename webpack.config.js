var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // Here telling webpack where the entry (start) of our app is 
    entry: './app/index.js',

    // Where webpack outputs its bundled code
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },

    // Rules array for different loaders and transformations we want done to our code
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
  devServer: {
    historyApiFallback: true
  },
  // passing a template html file for webpack to use
  plugins: [new HTMLWebpackPlugin({
        template: 'app/index.html'
    })]
}