const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    //publicPath: process.env.NODE_ENV === 'production' ? 'https://ak.txwy.tw/artcombat_demo/' : '',
    transpileDependencies: ['vuetify'],
    productionSourceMap: false,
    lintOnSave: false,
    outputDir: '/Users/txwy/Documents/wwwweb/static.txwy.tw/ak/artcombat_demo/',

    configureWebpack: config => {
        config.module
        if (process.env.NODE_ENV === 'production' ? './' : '') {
            return {
                plugins: [
                    new CompressionPlugin({
                        filename: '[path].gz[query]',
                        algorithm: 'gzip',
                        test: /\.(js|css|html|svg)$/, // 匹配文件名
                        threshold: 10240, // 对超过10k的数据压缩
                        deleteOriginalAssets: false, // 不删除源文件
                        minRatio: 0.8, // 压缩比
                    }),
                ],
            }
        }
    },

    chainWebpack: config => {
        config.module
            .rule('images')
            .test(/\.(jpg|png|gif)$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: 10,
                // 以下配置项用于配置file-loader
                // 根据环境使用cdn或相对路径
                publicPath: process.env.NODE_ENV === 'production' ? 'https://rescdn.imtxwy.com/ak/artcombat/img' : '',
                // 将图片打包到dist/img文件夹下, 不配置则打包到dist文件夹下
                outputPath: 'img',
                // 配置打包后图片文件名
                name: '[name]-[hash:5].[ext]',
            })
            .end()
    },
    // devServer: {
    //     proxy: {
    //         '/data': {
    //             target: 'https://ak.txwy.tw/artcombat_demo/', // 源地址
    //             ws: true, // 如果要代理websockets
    //             changeOrigin: true, // 改变源
    //             pathRewrite: {
    //                 '^/data': '', // 路径重写
    //             },
    //         },
    //     },
    // },
}
