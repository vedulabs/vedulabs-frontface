const path                  = require('path');
const UglifyJsPlugin        = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/vedulabs-ff.js',
    output: {
        filename: 'vedulabs-ff.js',
        path: path.resolve(__dirname, 'public/js'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: true,
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    performance : {
        hints : false
    },
    plugins: [
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    // warnings: false,
                    // compress: true,
                    // mangle: true,
                }
            }),
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: '0.0.0.0',
        compress: true,
        port: 9001
    }
};