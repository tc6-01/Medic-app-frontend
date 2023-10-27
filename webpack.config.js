import path from "path";

module.exports = {
    resolve: {
        alias: {
            //在 webpack 中设置代码中 @ 符号表示 src 这一层目录
            '@': path.join(__dirname, './src/')
        }
    }
}
