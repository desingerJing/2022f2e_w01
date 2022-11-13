const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js',
        skin: './src/skin.js',
    },
    output: {
        filename: '[name].min.js',
        path: __dirname + '/dist',
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // {
            //     test: /\.m?js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env'],
            //         }
            //     }
            // }
        ],
    },
};