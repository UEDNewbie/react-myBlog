const webpack = require('webpack');
const path = require('path');
require('babel-polyfill');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: path.join(__dirname, "../src/index.js"),
        common: ['react', 'react-dom']
    },

    output: {
        path: path.join(__dirname, "../dist"),
        filename: "./assets/js/[name].js",

    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.less', 'sass', 'scss']
    },
    performance: {
        hints: false
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: { minimize: true }
                }]
            }, {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0',
                    options: {
                        cacheDirectory: true //缓存  
                    }
                }
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [{
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    }
                ]

            },

            {
                test: /\.(ico)$/,
                use: 'raw-loader'
            },
            {
                test: /\.(gif|png|jpg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 30,
                        publicPath: './assets/images/',
                        outputPath: 'images/',
                        name: '[name].[ext]?[hash]',
                    }
                }]
            },
            {
                test: /\.(woff2?|otf|woff|svg|ttf|eot)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50,
                        publicPath: './assets/font',
                        outputPath: 'font/'
                    }
                }]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "../public/index.html"),
            favicon: 'public/favicon.ico'
        }),

        new CopyWebpackPlugin([{
            from: "./src/assets/images/",
            to: "./assets/images/"
        }])
    ]
}