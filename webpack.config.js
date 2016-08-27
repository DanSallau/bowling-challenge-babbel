/**
 * Created by Nuru on 27/08/16.
 */
var path = require('path');

module.exports = {
    entry: ['babel-polyfill', path.normalize(__dirname + '/src/_root/main')],
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src', 'js')],
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            },
            {
                loader: 'style!css',
                test: /\.css$/,
                include: [path.resolve(__dirname, 'public', 'css')]
            }
        ]
    }
};
