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

* 打包css文件

  * 运行```npm i style-loader css-loader -D```命令，安装处理css文件的loader
  * 在webpack.config.js的```module->rules```数组中，添加loader规则如下：

  ```javascript
  //所有第三方文件模块的匹配规则
  module:{
      rules:[
          //test表示匹配的文件类型  use表示对应要调用的loader
          {test:/\.css$/,use:['style-loader','css-loader']}
      ]
  }
  ```

  * 注意
    * use数组中指定的loader顺序是固定的
    * 多个loader的调用顺序是：从后往前调用

* 打包less文件

  * 运行```npm i less-loader less -D```命令，安装处理less文件的loader
  * 在webpack.config.js的```module->rules```数组中，添加loader规则如下：

  ```javascript
  //所有第三方文件模块的匹配规则
  module:{
      rules:[
          //test表示匹配的文件类型  use表示对应要调用的loader
          {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
      ]
  }
  ```

* 打包scss文件

  * 运行```npm i sass-loader node-sass -D```命令，安装处理scss文件的loader（中文路径会安装失败）
  * 在webpack.config.js的```module->rules```数组中，添加loader规则如下：

  ```javascript
  //所有第三方文件模块的匹配规则
  module:{
      rules:[
          //test表示匹配的文件类型  use表示对应要调用的loader
          {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
      ]
  }
  ```


### 8.配置postCSS自动添加css的兼容前缀

* 解决的问题
  
* 浏览器前缀自动添加
  
* 步骤

  * 运行```npm i postcss-loader autoprefixer -D```命令
  * 在

  ```javascript
  //导入自动添加前缀的插件
  const autoprefixer = require('autoprefixer')
  module.exports={
      //挂载插件
      plugins:[autoprefixer]
  }
  ```

  * 在webpack.config.js的```module->rules```数组中，添加loader规则如下：

  ```javascript
  //所有第三方文件模块的匹配规则
  module:{
      rules:[
          //test表示匹配的文件类型  use表示对应要调用的loader
          {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']}
      ]
  }
  ```

### 9.打包样式中的图片和字体文件

* 运行```npm i url-loader file-loader -D```命令

* 在webpack.config.js的```module->rules```数组中，添加loader规则如下：

  ```javascript
  //所有第三方文件模块的匹配规则
  module:{
      rules:[
          //test表示匹配的文件类型  use表示对应要调用的loader
          {
              test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
              use:'url-loader?limit=10284988'
          }
      ]
  }
  ```

* 图片大小小于limit会被转化为base64，大于或等于不会转换为base64

### 10.打包ES6高级js语法

* 安装babel转换器相关的包：```npm i babel-loader @babel/core @babel/runtime -D```
* 安装babel语法插件相关的包：```npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D```
* 在项目根目录中，创建babel配置文件babel.config.js并初始化基本配置如下：

  ```javascript
  module.exports = {
    presets:['@babel/preset-env'],
    plugins:['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
  }
  ```

* 在webpack.config.js的```modules->rules```数组中，添加loader规则如下：

  ```javascript
  //exclude为排除项，表示babel-loader不需要处理node_modules中的js文件
  {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
  ```

### 11.Vue单文件组件加载器

* 运行```npm i vue-loader vue-template-compiler -D```命令

* 在webpack.config.js配置文件中，添加vue-loader的配置项如下：

  ```javascript
  const VueLoaderPlugin = require('vue-loader/lib/plugin')
  module.exports = {
      module:{
          rules:[
              {test:/\.vue$/,loader:'vue-loader'}
          ]
      },
      plugins:[
          new VueLoaderPlugin()
      ]
  }
  ```

### 12.webpack中使用Vue

* 运行```npm i vue -S```安装vue

* 在```src->index.js```入口文件中，通过```import Vue from 'vue'```来导入vue构造函数

* 创建vue的实例对象，并指定要控制的el区域

* 通过render函数渲染App根组件

  ```javascript
  //导入Vue构造函数
  import Vue from 'vue'
  //导入App根组件
  import App from './components/App.vue'
  
  const vm = new Vue({
      //指定要控制的el区域
      el:"#app",
      //通过render函数渲染App根组件
      render:h=>h(App)
  })
  ```

### 13.webpack简单打包发布

* 修改package.json文件配置打包命令

  ```javascript
  //在package.json文件中配置webpack打包命令
  "scripts":{
      "build":"webpack -p"
  }
  ```

  