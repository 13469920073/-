module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://autumnfish.cn',
                pathRewrite: { '^/api': '' },
                ws: true,
                changeOrigin: true
            },
        },
        hot:true,
        open:true
    },
   /*  css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/music/'
        : '/' */
}