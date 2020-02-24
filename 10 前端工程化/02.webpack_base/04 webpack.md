# 04 webpack

### 1. 创建隔行变色项目

* 新建空白目录，运行```npm init -y```命令，初始化报管理配置文件package.json
* 新建src源代码目录
* 新建```src->index.html```首页
* 初始化首页基本的结构
* 运行```npm install jquery -s```命令，安装jQuery
* 通过模块化的形式，实现列表隔行变色效果

### 2. webpack的安装

* 运行```npm install webpack webpack-cli -D```命令，安装webpack相关的包
* 在项目根目录中，创建名为webpack.config.js的webpack配置文件
* 在webpack的配置文件中，初始化如下基本配置：

```javascript
module.exports={
    //mode指定构建模式 production development
    mode:'development'
}
```

* 在package.json配置文件中的script节点下，新增dev脚本如下：

```javascript
"script":{
    //script节点下的脚本，可以通过npm run执行
    "dev":"webpack"
}
```

* 在终端中运行```npm run dev```命令，启动webpack进行项目打包

### 3. 配置打包的入口和出口

* 默认打包入口和出口
  * 入口为```src->index.js```
  * 出口为```dist->main.js```
* 配置打包入口和出口

```javascript
//在webpack.config.js中新增配置信息
//导入操作路径的模块
const path = require('path')

module.exports={
    //mode指定构建模式
    // mode:'development'
    mode:'production',
    //打包入口文件的路径
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        //输出文件的存放路径
        path:path.join(__dirname,'./dist'),
        //输出文件名称
        filename:'bundle.js'
    }
}
```

### 4. 自动打包功能

* 解决的问题

  * 修改完index.js文件后需要重新执行```npm run dev```重新生成转换后的js

* 步骤

  * 运行```npm install webpack-dev-server -D```命令，安装支持项目自动打包的工具
  * 修改```package.json->scripts```中的dev命令

  ```javascript
  "scripts":{
      //script节点下的脚本，可以通过npm run执行
      "dev":"webpack-dev-server"
  }
  ```

  * 将```src->index.html```中，script脚本引用路径修改为```/bundle.js```
  * 运行```npm run dev```命令，重新打包
  * 在浏览器中访问，查看自动打包效果

* 注意

  * ```webpack-dev-server```会启动一个实时打包的http服务器
  * ```webpack-dev-server```打包生成的输出文件，默认放到了项目根目录中，而且是虚拟的、看不见的

### 5. 配置```html-webpack-plugin```生成预览页面

* 运行```npm install html-webpack-plugin -D```命令，安装生成预览页面的插件

* 修改webpack.config.js文件的头部区域，添加如下配置信息：
  
  ```javascript
  //导入生成预览页面的插件，得到一个构造函数
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const htmlPlugin = new HtmlWebpackPlugin({
    //源文件
    template:'./src/index.html',
    //生成文件（存在内存中，目录中不显示）
    filename:'index.html'
  })
  ```
* 修改webpack.config.js文件中向外暴露的配置对象，新增如下配置节点：
  ```javascript
  module.exports={
      //插件列表
      plugins:[htmlPlugin]
  }
  ```

### 6. 配置打包相关参数

* 解决的问题
  
  * 需要复制地址打开浏览器访问
* 修改package.json的配置

  ```
  //package.json中的配置
  //--open 打包完成后自动打开浏览器页面
  //--host 配置IP地址
  //--port 配置端口
  "script":{
  "dev":"webpack-dev-server --open --host 127.0.0.1 --port 8888" 
  }
  ```

### 7. 加载器

