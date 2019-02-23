var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    mode: 'development',
    entry: './frontend/index.jsx',
    output: {
        path: path.resolve(__dirname, 'static', 'bundles'),
        filename: 'bundle.js'
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
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
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    devtool: 'source-map',
};