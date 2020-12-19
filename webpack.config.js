const path = require("path");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ]
            },
            {
                test: require.resolve('./src/index.js'),
                loader: 'exports-loader',
                options: {
                    type: 'module',
                    exports: 'EmojiWidget',
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
    ],
};