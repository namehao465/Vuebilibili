# Vue脚手架

### 1.安装

```shell
npm install -g @vue/cli
vue -V
```

### 2. 创建Vue项目

```shell
//1. 基于交互式命令行的方式，创建新版vue项目
vue create my-project

//2. 基于图形化界面的方式，创建新版vue项目
vue ui

//3. 基于2.x旧模板，创建旧版vue项目
npm install -g @vue/cli-init
vue init webpack my-project
```
* 命令行创建步骤
```shell
Vue CLI v4.2.2
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Linter
? Use history mode for router? (Requires proper server setup for index fallback in
production) No
? Pick a linter / formatter config: Standard
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> t
o invert selection)Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config f
iles
? Save this as a preset for future projects? Yes
? Save preset as: vueSetting

cd my-project
npm run serve
```

### 3. 自定义配置
* 方式一：在package.json中添加如下信息，实现修改端口并自动打开网页
    ```json
    "vue": {
        "devServer": {
          "port": 8888,
          "open": true
        }
      }
    ```
* 方式二（推荐）：通过单独的配置文件配置项目
    * 根目录创建vue.config.js
    * 添加如下配置
        ```javascript
        module.exports = {
          "devServer": {
            "port": 8888,
              "open": true
          }
        }
        ```
### 4. Element-UI的使用
* 命令行安装
    * 安装依赖包```npm i element-ui -S```
    * 在main.js导入Element-UI相关资源
    ```javascript
    //导入组件库
    import ElementUI from 'element-ui'
    //导入样式
    import 'element-ui/lib/theme-chalk/index.css'
    //配置Vue插件
    Vue.use(ElementUI)
    ```
    * 在App.vue中导入Element-UI组件
    ```html
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    ```
