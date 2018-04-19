const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index:  './src/js/index.js',
        about: './src/js/about.js'
    },
    mode: 'development',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin("styles.css"),
        new ExtractTextPlugin({
            filename:  (getPath) => {
              return getPath('css/[name].css').replace('css/js', 'css');
            },
            allChunks: true
          }),
        new UglifyJSPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index.html',
            inject: true,
            title: 'index',
            favicon: './src/images/favicon.ico',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/pages/about.html',
            inject: true,
            title: 'about',
            favicon: './src/images/favicon.ico',
            chunks: ['about']
        })
    ]
}