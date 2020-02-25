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
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
    plugins:[htmlPlugin, new VueLoaderPlugin()],
    //所有第三方文件模块的匹配规则
    module:{
        rules:[
            //test表示匹配的文件类型  use表示对应要调用的loader
            {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {
                test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use:'url-loader?limit=10000'
            },
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,loader:'vue-loader'}
        ]
    }
}