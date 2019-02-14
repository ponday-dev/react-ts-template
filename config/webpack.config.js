const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const WriteFilePlugin   = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const root = path.resolve(__dirname, '..');

module.exports = {
    context: path.resolve(root, 'src'),
    entry: {
        app: './index.tsx'
    },
    output: {
        path: path.resolve(root, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                loader: 'html-loader',
                test: /\.html$/
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(root, 'dist')
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.ts', '.tsx',
            '.html'
        ],
        plugins: [
            new TsconfigPathsPlugin({ configFile: './tsconfig.json' })
        ]
    },
    plugins: [
        new WriteFilePlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: 'assets',
                to: 'assets'
            }
        ])
    ]
}
