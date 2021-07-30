const path = require('path'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

// project main config.
module.exports = {

    entry: ['@babel/polyfill',
            './src/js/index.js'],

    watch: true,

    output: {
        // project root
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // Relative URL to access assets in production.
        // This HTML file is at the project root, thus, empty string as path.
        publicPath: '',
        assetModuleFilename: 'assets/',
    },

    // Loaders
    module: {
        rules: [
            // JS
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            // SASS
            {
                test: /\.(sa|sc|c)ss$/, // règle des fichiers .sass, .scss et .cs
                // Attention, les loaders sont ajoutés en sens inverse !!
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader', // permet d'utiliser url() et @import dans ton CSS
                    },
                    {
                        // postCSS : ajoute un minifier ou bien un préfixeur automatique des règles CSS (--moz par exemple)
                        loader: 'postcss-loader',
                    },
                    {
                        // En premier, transformation des SASS en CSS :
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            // Image managment
            // Copy images in a new "images" folder in "dist".
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "assets/images/[hash][ext][query]"
                }
            },
            // Font managment
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "assets/fonts/[hash][ext][query]"
                },
            }, 

            // SVG managment
            {
                test: /.svg$/i,
                type: 'asset/source',
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
        new Dotenv(),
    ],

    // The default mode for webpack is "production".
    mode: 'development',
};