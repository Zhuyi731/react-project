const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const fs = require("fs");
const path = require("path");
const es3ifyPlugin = require("es3ify-webpack-plugin");
const uglifyJs = require("uglifyjs-webpack-plugin");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = merge(baseConfig, {
    devtool: "souce-map",
    mode: "development",
    plugins: [
        new es3ifyPlugin(),
        new uglifyJs({
            cache: 'node_modules/.cache/',
            parallel: 3,
            uglifyOptions: {
                ie8: true
            }
        }),
        new cleanPlugin("publish/*", {
            root: path.join(__dirname, "../"),
            verbose: true
        })
    ]
});