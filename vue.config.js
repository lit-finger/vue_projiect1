module.exports = {
    publicPath: "./",
    assetsDir: "static",
    outputDir: 'dist3',
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'https://m.maizuo.com',
                // ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api1': ''
                }
            },
            '/self': {
                target: 'http://192.168.61.14:1234/',
                // ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/self': ''
                }
            },

        }
    },
    css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                    remUnit: 37.5, //设计稿的 十分之一
                    "exclude": /node_modules/i
                })]
            }
        }
    }
};