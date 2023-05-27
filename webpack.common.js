const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "assets/img/[name][ext]",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /.s?css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                loader: "babel-loader",
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/assets/img/favicon",
                    to: "./assets/img/favicon",
                },
            ],
        }),
        
    ],
    optimization: {

        splitChunks: {
            chunks: 'all',
        }
    }
};