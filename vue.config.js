module.exports = {

    devServer: {
        port: 8001,//改端口号
        proxy: {
            '/api': {
                target: 'http://192.168.100.204:8000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}