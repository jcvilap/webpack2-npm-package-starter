const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../dist/lib'),
        filename: 'innovation-ui-kit.js',
        library: 'innovation-ui-kit',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015', 'es2016', 'es2017']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
                })
            },
            {
                test: /\.(jpg|png)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/',
                            publicPath: 'assets/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'innovation-ui-kit.css'}),
        new CleanWebpackPlugin([path.resolve(__dirname, '../dist/lib')]),
    ]
};
