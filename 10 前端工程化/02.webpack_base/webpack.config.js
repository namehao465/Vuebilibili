//导入操作路径的模块
const path = require('path')

//导入生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    //源文件
    template:'./src/index.html',
    //生成文件（存在内存中，目录中不显示）
    filename:'index.html'
})

module.exports={
    //mode指定构建模式
    mode:'development',
    // mode:'production',
    //打包入口文件的路径
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        //输出文件的存放路径
        path:path.join(__dirname,'./dist'),
        //输出文件名称
        filename:'bundle.js'
    },
    plugins:[htmlPlugin]
}