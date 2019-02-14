const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts[x]?$/,
                options: {
                    compilerOptions: {
                        sourceMap: true
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
              }
        ]
    },
});
