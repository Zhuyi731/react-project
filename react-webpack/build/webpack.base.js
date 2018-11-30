const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const basePath = path.join(__dirname, "../src");

module.exports = {
    entry: {
        "login": path.join(basePath, "./webViews/login/login.js"),
        "index": path.join(basePath, "./index.js")
    },
    output: {
        path: path.join(__dirname, "../publish"),
        filename: "[name]_[hash:5].js",
        chunkFilename: "[name]_[chunkhash:5].js"
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"],
        alias: {
            // "react": 'anujs/dist/ReactIE.js',
            // 'react-dom': 'anujs/dist/ReactIE.js',
            // 'prop-types': 'anujs/lib/ReactPropTypes.js',
            'create-react-class': 'anujs/lib/createClass.js',
            '@components': path.resolve(__dirname, "../src/components"),
            '@webViews': path.resolve(__dirname, "../src/webViews"),
            '@assets': path.resolve(__dirname, "../src/assets")
        }
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            use: [{ loader: "babel-loader" }]
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "postcss-loader" }
            ]
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "postcss-loader" },
                { loader: "sass-loader" }
            ]
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            exclude: /node_modules/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 10000
                }
            }]
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            // React: 'anujs/dist/ReactIE.js',
            // PropsTypes: 'anujs/lib/ReactPropTypes.js',
            // ReactDOM: 'anujs/dist/ReactIE.js',
            React: 'react',
            PropsTypes: 'prop-types',
            ReactDOM: 'react-dom',
            Promise: "es6-promise"
        }),
        new htmlWebpackPlugin({
            template: path.join(basePath, "./index.html"),
            filename: "index.html",
            chunks: ["index"],
            inject: true
        }),
        new htmlWebpackPlugin({
            template: path.join(basePath, "./login.html"),
            filename: "login.html",
            chunks: ["login"],
            inject: true
        }),
        new copyWebpackPlugin([{
            from: path.join(basePath, "assets"),
            to: "assets"
        }, {
            from: path.join(__dirname, "../mockDatas"),
            to: ""
        }])
    ]
};