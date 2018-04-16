var HtmlWebpackPlugin = require('html-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
    new HtmlWebpackPlugin({
        template: 'src/vgtImitation.html'
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
        'API_URL': isProduction
            ? JSON.stringify('http://www.bulibuli.wang:3000')
            : JSON.stringify('http://localhost:3000')
    })
]

isProduction && (plugins.push(new MinifyPlugin()));

module.exports = {
    entry: {
        main: __dirname + '/src/vgtImitation.js'
    },
    output: {
        path: __dirname + '/output',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                //resolve-url-loader may be chained before sass-loader if necessary
                use: ['css-loader', 'less-loader']
            })
        }, {
            test: /\.(png|jpg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: isProduction ? '[name].[ext]?x-oss-process=style/hcl' : '[name].[ext]',
                        publicPath: isProduction ? 'http://static.vgtime.bulibuli.wang/' : '',
                        outputPath: 'images/'
                    }
                }
            ]
        }, {
            test: /\.(gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: isProduction ? 'http://static.vgtime.bulibuli.wang/' : '',
                        outputPath: 'images/'
                    }
                }
            ]
        }, {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                    options: {}  
                }
            ]
        }, {
            test: /\.art$/,
            loader: "art-template-loader",
            options: {
                // art-template options (if necessary)
                // @see https://github.com/aui/art-template
            }
        }]
    },
    plugins
}
