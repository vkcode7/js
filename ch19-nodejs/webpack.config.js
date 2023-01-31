//this file runs in nodejs
//can only run under node.js not in browser
//telling where source JS lives and where we are going to output it
const path = require('path'); //builtin module in node.js library

module.exports = {
    mode: 'development', //or production
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'), //absolute URL here
        filename: 'bundle.js'
    },
    devServer : {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'dist'), //web root path
            publicPath: '/' //assets folder
        },
        compress: true,
        port: 9000,
        module: {
            rules: [{
                test: /\.js$/, //any file ending in .js, run it thru babel-loader
                excludes: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }]
        }
    }
}; 

