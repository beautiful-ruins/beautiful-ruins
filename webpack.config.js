var path = require('path');

module.exports = {
    mode: 'development',
    entry: './frontend/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
};