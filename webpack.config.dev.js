const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const dotEnv = require('dotenv-webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions:['.js','.jsx'],
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        }
    },
    mode: 'development', 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            }, {
                test: /\.html$/,
                use: [
                    {loader: 'html-loader'}
                ]
            }, {
               test:/\.s[ac]ss$/,
               use: [
                   'style-loader',
                   'css-loader',
                   'sass-loader',
               ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename:'./index.html'
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        }),
        new dotEnv()
    ],
    devServer:{
        compress: true,
        historyApiFallback: true,
        port:3006
    }
}