var webpack = require("webpack")
module.exports = {
    entry: "./js/app.js",
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin()
    ],
    output: {
        path: './dist',
        filename: "supple.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
}
