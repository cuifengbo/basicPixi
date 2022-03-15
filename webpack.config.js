const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    devServer: {
        static: './dist',
    },
    resolve: {
        extensions: ['.ts', '.js']
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /.(png|svg|jpg|jpeg|gif)/,
                type: 'asset/resource'
            },
                {
                    test: /\.ts$/,
                    use: ["ts-loader"]
                }
            
        ]
    },

};