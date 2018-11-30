const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const fs = require("fs");
const path = require("path");

module.exports = merge(baseConfig, {
    devtool: "souce-map",
    mode: "development",
    devServer: {
        before(app) {
            let mockDataPath = path.join(__dirname, "../mockDatas"),
                ret;
            app.post("/goform/:filename", (req, res) => {
                ret = require(path.join(mockDataPath, `/goform/req.params.filename`));
                res.json(ret);
            });
            app.post("/login/:filename", (req, res) => {
                ret = require(path.join(mockDataPath, `/login/${req.params.filename}`));
                res.json(ret);
            });
        }
    }
});