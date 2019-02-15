const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const dotenv = require("./env");

const root = path.resolve(__dirname, "..");
const env = dotenv();

module.exports = {
    context: path.resolve(root, "src"),
    entry: {
        app: "./index.tsx"
    },
    output: {
        path: path.resolve(root, "dist"),
        filename: "js/[name].js"
    },
    module: {
        rules: [
            {
                loader: "html-loader",
                test: /\.html$/
            },
            {
                test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 100 * 1024,
                            name: "./assets/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(root, "dist")
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".html"],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve(root, "tsconfig.json")
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin(env),
        new WriteFilePlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        new CopyWebpackPlugin([
            {
                from: "assets",
                to: "assets"
            }
        ])
    ]
};
