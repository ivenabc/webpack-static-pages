const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        index:  './src/js/index.js',
        about: './src/js/about.js'
    },
    mode: 'development',
    output: {
        filename: 'scripts/[name].[hash].js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? 'styles/[name].css' : 'styles/[name].[hash].css',
            chunkFilename: devMode ? 'styles/[id].css' : 'styles/[id].[hash].css',
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