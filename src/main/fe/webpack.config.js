const path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['whatwg-fetch', 'babel-polyfill', './index.js'],
    output: {
        path: path.resolve('../resources/static/js/built'),
	filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
    // TODO use production configuration
    // },
    // plugins: [
    //     new webpack.DefinePlugin({ // <-- key to reducing React's size
    //         'process.env': {
    //             'NODE_ENV': JSON.stringify('production')
    //         }
    //     }),
    //     new webpack.optimize.DedupePlugin(), //dedupe similar code 
    //     new webpack.optimize.UglifyJsPlugin(), //minify everything
    //     new webpack.optimize.AggressiveMergingPlugin()//Merge chunks 
    // ],

}
