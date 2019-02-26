var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './frontend/index.jsx',
    output: {
        path: path.resolve(__dirname, 'static', 'bundles'),
        filename: 'bundle.js'
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new ExtractTextPlugin('css/style.css')
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                }),
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    devtool: 'source-map',
};