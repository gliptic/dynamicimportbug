const path = require('path');

module.exports = (env, argv) => {
    return {
        entry: {
            main: './Content/index.ts'
        },
        mode: 'development',
        output: {
            chunkFilename: "[name].js",
            filename: "[name].js",
            path: path.resolve(__dirname, 'build'),
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/i,
                    loader: "ts-loader"
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.jsx']
        }
    };
};