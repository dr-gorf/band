var webpack = require("webpack")
module.exports = {
    entry: ".",
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // new webpack.optimize.DedupePlugin()
    ],
    output: {
        path: './dist',
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader"},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /index.html$/, loader: "file-loader?name=index.html" },
            { test: /favicon.ico$/, loader: "file-loader?name=favicon.ico" },
            { test: /beach.jpg$/, loader: "file-loader?name=beach.jpg" },
            { test: /img\/.*(\.jpg)|(views\/.*\.html)$/, loader: "file-loader?name=[hash:6].[ext]" }
        ]
    }
}
